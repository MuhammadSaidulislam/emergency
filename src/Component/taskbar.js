import React, {useState, useEffect} from 'react'
import './taskbar.css'
import { Redirect  } from 'react-router-dom';
import { Navbar, Nav, } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";

//set active page color code
const isActive = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "red" };
    } else {
      return { color: "white" };
    }
  };

const Taskbar = (props) => {

    const [loggedIn, setIsLoggedIn] = useState();
    
    let token;
    
    function App() {
        useEffect(() => {
            token = localStorage.getItem("token")
            if (!token) {
                setIsLoggedIn(false)
            }
            else {
                setIsLoggedIn(true)
            }
            if(props.login){
                console.log("gettit")
                setIsLoggedIn(props.login)
            }
        }, []);
    } 
    App();
    const logout = (e) => {
        if(loggedIn)
        {
        localStorage.removeItem("token")
        localStorage.removeItem("name")
        console.log("called")
        return (
            <Redirect to="users"/>
        )
        
        }
        
    }

    return(
        <>
        {/* <div className="taskbar">

            <Navbar bg="danger" text="light" expand="lg">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link className="space" href="/demo" onClick={logout}>{loggedIn? 'Logout': 'Login'}</Nav.Link>
                    <Nav.Link className="space" href="/">Home</Nav.Link>
                    {loggedIn &&<Nav.Link className="space" href="/profile">My Profile</Nav.Link>}
                    <Nav.Link className="space" href="admin">Admins</Nav.Link>
                    <Nav.Link className="space" href="/myservices">My Services</Nav.Link>
                    <Nav.Link className="space" href="/police_stations">Police Stations</Nav.Link>
                    <Nav.Link className="space" href="/fire_services">Fire Services</Nav.Link>
                    <Nav.Link className="space" href="/get_service">Get Services</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>



        </div> */}
        <section className="navigation">
        <Navbar fixed="top" expand="lg">
          <Navbar.Brand href="/">Emergency</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{backgroundColor: '#242733',padding: '1px 30px'}}>
            <Nav
              className="my-2 my-lg-0"
              style={{ marginLeft: "auto" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/profile"
              >
                Profile
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/myservices"
              >
                My Service
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/police"
              >
                Police Stations
              </Nav.Link>
              <Nav.Link as={Link} to="/fire">
                Fire Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/help"
              >
                Get Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/admin"
              >
                Admin
              </Nav.Link>
              <Nav.Link className="space" href="/login/user" onClick={logout}>{loggedIn? 'Logout': 'Login'}</Nav.Link>
  
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section> 
        </>
    )
}

export default Taskbar