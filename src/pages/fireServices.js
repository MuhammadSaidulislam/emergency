import React, { useState, useEffect } from "react";
import Loading from "../Component/Loading";
import FireCard from "../Component/fireCard";
import "./users.css";
import fire from "../images/fire.jpg";
import "./fireServices.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const FireServices = (props) => {
  const [allUsers, setUsers] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState();
  const [loggedIn, setLoggedin] = useState();

  let token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  function App() {
    useEffect(() => {
      //console.log(token.toString());
      let t = token.replace('"', "");
      let t2 = t.replace('"', "");
      //console.log(t2);
      if (props.login) {
        console.log("Here in if");
        setLoggedin(true);
        getUsers(t2);
      } else {
        console.log("Here in else");
        setLoggedin(false);
      }
    }, [props.login]);
  }
  App();

  const getUsers = async (tc) => {
    setIsLoading(true);
    //console.log("called");
    console.log(tc);

    try {
      const response = await fetch(
        "https://helping-backend.vercel.app/api/fire",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tc,
          },
        }
      );

      const responseData = await response.json();
      console.log(responseData);
      if (response.ok) {
        setLoggedin(true);
        setUsers(responseData.data);
        //console.log(allUsers)
        setCurrentUser(responseData.user.user);
      } else {
        console.log("Error");
      }
    } catch {
      console.log("Catch");
    }
    setIsLoading(false);
  };

  // if(loggedIn){
  //     getUsers();
  // }

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      {!loggedIn && (
        <div className="errorBox">
          <FontAwesomeIcon style={{ fontSize: "80px" }} icon={faTimesCircle} />
          <h1>ERROR !!</h1>
          <p>Please log in to view the page</p>
        </div>
      )}
      {!isLoading && (
        <div>
          <div className="">
            {allUsers && (
              <Container>
                <Row>
                  <Col md={12}>
                    <FireCard data={allUsers} user={currentUser} />
                  </Col>
                </Row>
              </Container>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default FireServices;
