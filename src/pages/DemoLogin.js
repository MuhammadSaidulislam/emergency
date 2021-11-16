import React, { useState, useEffect } from "react";
import "./DemoLogin.css";
import Services from "./services";
import Loading from "../Component/Loading";
//import Login from '../Component/Sdata/Login'
import { facebookProvider, googleProvider } from "../config/authMethods";
import socialMediaAuth from "../config/auth";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import Taskbar from "../Component/taskbar";
import { setToken } from "../../src/Component/token";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faLocationArrow, faPassport, faPhone, faUnlock, faUnlockAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const DemoLogin = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [district, setDistrict] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [signUpMode, setSignUpMode] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [msg, setMsg] = useState();
  const [isLoading, setIsLoading] = useState();
  const [phone, setPhone] = useState();
  const [data, setData] = useState();
  const [img, setImg] = useState();
  const [type, setType] = useState();
  let token = localStorage.getItem("token");
  const loginCheck = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://helping-backend.vercel.app/api/logincheck/user",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        setLoggedIn(true);
        setData(responseData.user.user.name);
        props.loginStatus(true);
      } else {
        setLoggedIn(false);
        console.log("Token Error");
      }
    } catch {
      console.log("Catch");
    }
    setIsLoading(false);
  };
  function App() {
    useEffect(() => {
      if (token) {
        loginCheck();
      }
    }, []);
  }
  App();

  const signUpHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const response = await fetch("https://helping-backend.vercel.app/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          phone: phone,
          email: email,
          password: password,
          district,
        }),
      });
      //const resposneData = await response.json();
      console.log(response);
      if (response.ok) {
        setSignUpMode(false);
        setMsg("Signup Successfully. Please Login");
      } else if (response.status === 400) {
        setMsg("Email already exists");
      } else if (response.status === 401) {
        setMsg("Phone already exists");
      } else {
        setMsg("Something Bad, Contact Developers");
      }
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

  const loginHandler = async (e) => {
    setIsLoading(true);
    console.log(e);
    if (e) {
      e.preventDefault();
    }

    try {
      const response = await fetch(
        "https://helping-backend.vercel.app/api/login/user/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            type: type,
          }),
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        setLoggedIn(true);
        setData(responseData.name);
        props.loginStatus(true);
      } else {
        setMsg("Wrong Credentials");
      }
      console.log(responseData.jsontoken);
      let t = responseData.jsontoken.replace('"', "");
      let t2 = responseData.jsontoken.replace('"', "");
      setIsLoading(false);
      localStorage.setItem("name", JSON.stringify(responseData.session));
      //localStorage.setItem("token", t2.jsontoken);
      setToken(t2.jsontoken);
    } catch {
      setIsLoading(false);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const firstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };
  const districtChange = (e) => {
    setDistrict(e.target.value);
  };
  const modeToggle = () => {
    setSignUpMode(!signUpMode);
  };

  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    if (res.uid) {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://helping-backend.vercel.app/api/login/user/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: res.email,
              password: "password",
              type: "social",
            }),
          }
        );
        const responseData = await response.json();
        if (response.ok) {
          setLoggedIn(true);
          setData(responseData.name);
        } else {
          setMsg("You are not Registered!!");
        }
        setIsLoading(false);
        localStorage.setItem("name", JSON.stringify(responseData.session));
        // localStorage.setItem("token", JSON.stringify(responseData.jsontoken));
        setToken(responseData.jsontoken);
      } catch {
        setIsLoading(false);
      }
    } else {
      setMsg("User not found");
    }
  };
  return (
    <React.Fragment>
      {!loggedIn && <Taskbar />}
      {!isLoading && loggedIn && <Services login={loggedIn} data={data} />}
      {isLoading && <Loading />}
      {!isLoading && !loggedIn && (
        <Container>
          <Row className="box">
            <Col md={12}>
              <div className="App">
                {signUpMode && (
                  <div>
                    <Row className="g-2">
                      <Col md={12}>
                        <p className="lable mt-3">First Name</p>
                        <span>
                          <FontAwesomeIcon icon={faUserAlt} />
                        </span>
                        <Form.Control
                          name="first_name"
                          value={firstName}
                          onChange={firstNameChange}
                          type="text"
                          placeholder="First name"
                        ></Form.Control>
                        <p className="lable mt-3">Last Name</p>
                        <span>
                          <FontAwesomeIcon icon={faUserAlt} />
                        </span>
                        <Form.Control
                          name="last_name"
                          value={lastName}
                          onChange={lastNameChange}
                          type="text"
                          placeholder="Last Name"
                        ></Form.Control>
                        <p className="lable mt-3">Phone number</p>
                        <span>
                          <FontAwesomeIcon icon={faPhone} />
                        </span>
                        <Form.Control
                          name="phone"
                          value={phone}
                          onChange={phoneChange}
                          type="phone"
                          required
                          placeholder="Phone"
                        ></Form.Control>
                        <p className="lable mt-3">District</p>
                        <span>
                          <FontAwesomeIcon icon={faLocationArrow} />
                        </span>
                        <Form.Control
                          name="district"
                          value={district}
                          onChange={districtChange}
                          type="text"
                          required
                          placeholder="District"
                        ></Form.Control>
                      </Col>
                    </Row>
                  </div>
                )}
                <div>
                  <Row className="g-2">
                    <Col md={12}>
                      <p className="lable mt-3">E-mail</p>
                      <span>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                      <Form.Control
                        name="email"
                        onChange={handleEmailChange}
                        type="email"
                        required
                        placeholder="Email"
                      ></Form.Control>
                      <p className="lable mt-3">Password</p>
                      <span>
                          <FontAwesomeIcon icon={faUnlock} />
                        </span>
                      <Form.Control
                        onChange={handlePasswordChange}
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                      ></Form.Control>
                    </Col>
                  </Row>
                </div>
                <div className="mt-3 text-center loginBtn">
                  <Button
                    className="centerL w-100"
                    onClick={signUpMode ? signUpHandler : loginHandler}
                    type="submit"
                  >
                    Submit
                  </Button>
                  <Button className="mt-3 w-100 signupBtn" onClick={modeToggle}>
                    {signUpMode ? "Already have a Account" : "Create Account"}
                  </Button>
                  <p className="text-center mt-2">{msg}</p>
                  {!isLoading && !loggedIn && (
                    <Col md={12} className="text-center mt-3 linkSet">
                      <h1>OR</h1>
                      <Button onClick={() => handleOnClick(facebookProvider)}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                        />
                      </Button>
                      <Button onClick={() => handleOnClick(googleProvider)}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                        />
                      </Button>
                    </Col>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </React.Fragment>
  );
};

export default DemoLogin;
