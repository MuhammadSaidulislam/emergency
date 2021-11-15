import React, { useState, useEffect } from 'react'
import './adminTaskbar.css'
import { Navbar, Nav, } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";

const AdminTaskbar = (props) => {

    const [loggedIn, setLoggedIn] = useState();
    const adminToken = localStorage.getItem("adminToken")
    const adminName = localStorage.getItem("adminName")

    function App() {
        useEffect(() => {
            if (adminToken) {
                setLoggedIn(true)
            }
            else {
                setLoggedIn(false)
            }
            if (props.login) {
                setLoggedIn(props.login)
            }
        }, []);
    }
    App();



    const logout = (e) => {
        console.log("logout hoye gelam...")
        e.preventDefault();
        if (loggedIn) {
            localStorage.removeItem("adminToken")
            localStorage.removeItem("adminName")
            setLoggedIn(false)
            console.log("called")
            props.loginChange(false)

        }

    }

    return (
        <React.Fragment>

            {/* <div className="navbar2">
                <Navbar bg="danger" text="light" expand="lg" >
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className="ad" href="/admin" onClick={loggedIn ? logout : null}>{loggedIn ? 'Logout' : 'Login'}</Nav.Link>
                            <Nav.Link className="ad" href="admin">Admins</Nav.Link>
                            <Nav.Link className="ad" href="/users">User</Nav.Link>
                            <Nav.Link className="ad" href="/police_stations">Police Stations</Nav.Link>
                            <Nav.Link className="ad" href="/fire_services">Fire Services</Nav.Link>
                            <Nav.Link className="ad" href="/get_service">Get Services</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div> */}


            <section className="navigation">
                <Navbar fixed="top" expand="lg">
                    <Navbar.Brand href="/">Emergency</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" style={{ backgroundColor: '#242733', padding: '1px 30px' }}>
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ marginLeft: "auto" }}
                            navbarScroll
                        >
                             {/* <Nav.Link
                as={Link}
                to="/myservices"
              >
                My Service
              </Nav.Link> */}
                            <Nav.Link as={Link} to="/users">User List</Nav.Link>
                            {/* <Nav.Link
                                as={Link}
                                to="/admin"
                            >
                                Admin
                            </Nav.Link> */}
                            <Nav.Link className="space" to="/admin" onClick={logout}>{loggedIn? 'Logout': 'Login'}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </section>


        </React.Fragment>
    )
}

export default AdminTaskbar