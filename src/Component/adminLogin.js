import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import './adminLogin.css'
import Loading from './Loading'
import { } from 'react-bootstrap';

const AdminLogin = (props) => {

    const [password, setPassword] = useState();
    // const [password2, setPassword2] = useState();
    const [isLoading, setIsLoading] = useState();
    const [loggedIn, setLoggedIn] = useState();
    const [userName, setUserName] = useState();
    const [type, setType] = useState("police");

    const [msg, setMsg] = useState();



    const loginHandler = async e => {
        setIsLoading(true)
        e.preventDefault();
        console.log("called");
        try {
            const response = await fetch('https://helping-backend.vercel.app/api/login/admin/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type, username: userName, password
                })
            });
            const responseData = await response.json();

            if (response.ok) {
                setLoggedIn(true) //not working!!!
                props.login(true, type)
                //console.log("login: "+ loggedIn)

            }
            else { setMsg("Wrong Credentials") }
            setIsLoading(false)
            console.log("s: " + responseData)
            //localStorage.setItem("adminName", JSON.stringify(responseData.session))
            localStorage.setItem("adminToken", JSON.stringify(responseData.jsontoken))

        }
        catch {
            setIsLoading(false)
        }

    }



    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    // const handlePasswordChange2 = e => {
    //     setPassword2(e.target.value);
    // }
    const usernameChange = e => {
        setUserName(e.target.value);
    }

    const serviceSet = e => {
        setType(e.target.value);
    }


    return (
        <React.Fragment>
            {isLoading && <Loading />}

            {!isLoading && !loggedIn &&

                <Container>
                    <Row className="box">
                        <Col md={12}>
                            <div className="form-group">
                                <div className="text-center">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
                                        height="100px"
                                        width="auto"
                                        alt="login"
                                    />
                                    <h3>Admin Login</h3>
                                </div>
                                <p className="lable">Select User Type</p>
                                <select className="form-control" name="serviceType" value={type} onChange={serviceSet}>
                                    <option value="service">Service type</option>
                                    <option value="police">Police Station</option>
                                    <option value="fire">Fire Service</option>
                                    <option value="others">Others</option>
                                </select>
                                <p className="lable">User Name</p>
                                <Form.Control name="username" value={userName} onChange={usernameChange} type="email" required placeholder="Username"></Form.Control>
                                <p className="lable">User Password</p>
                                <Form.Control value={password} onChange={handlePasswordChange} name="password" type="password" required placeholder="Password"></Form.Control>
                                
                                {/* <p className="lable">User Password</p>
                                <Form.Control value={password2} onChange={handlePasswordChange2} name="password" type="password" placeholder="Password2"></Form.Control>
                                 */}
                                <div className="loginBtn mt-3 text-center">
                                    <Button className="subbtn" onClick={loginHandler} type="submit">Submit</Button>
                                </div>

                                <p className="red center">{msg}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            }

        </React.Fragment>
    )
}


export default AdminLogin
