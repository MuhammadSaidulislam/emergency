import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faFacebook } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

export const Footer = () => {
    return (
        <>
               <section className="footer">
                <Container>
                    <Row>

                        <Col md={3}>
                            <div className="footer-title m-t-5 m-b-20 p-b-8">
                                About us
                            </div>
                            <p className="white-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 text of the printing.
                            </p>
                        </Col>
                        <Col md={3}>
                            <div className="footer-title m-t-5 m-b-20 p-b-8">
                                Services
                            </div>
                            <div className="footer-links">
                                <Link to="/fire">
                                    Fire Services
                                </Link>
                                <Link to="/police">
                                Police Services
                                </Link>
                                <Link to="#">
                                Ambulance Services
                                </Link>
                                <Link to="#">
                                Blood Donation Services
                                </Link>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-title m-t-5 m-b-20 p-b-8">
                                Quick Links
                            </div>
                            <div className="footer-links">
                                <Link to="/userlogincheck">
                                    Sign In
                                </Link>
                                <Link to="/signup">
                                   Sign Up
                                </Link>
                                <Link to="/adminlogincheck">
                                    Admin
                                </Link>
                                <Link to="/Services">
                                    Get Services
                                </Link>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-title m-t-5 m-b-20 p-b-8">
                                Support
                            </div>
                            <div className="footer-social-links m-t-30">
                                <li>
                                    <Link to="#">
                                    <FontAwesomeIcon icon={faCoffee} />
                                    </Link>
                                    <Link to="#">
                                    <FontAwesomeIcon icon={faCoffee} />
                                    </Link>
                                    <Link to="#">
                                    <FontAwesomeIcon icon={faCoffee} />
                                    </Link>
                                    <Link to="#">
                                    <FontAwesomeIcon icon={faCoffee} />
                                    </Link>
                                </li>
                            </div>
                        </Col>
                        <hr/>
                        <div className="footer-bottom">
                            Copyright © 2021, All Rights Reserved
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}
