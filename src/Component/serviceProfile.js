import React from 'react'
import './serviceProfile.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactStars from 'react-stars'
import { render } from 'react-dom'


const ServiceProfile = (props) => {
    const data = props.data
    console.log(data)

    return (

        <>
            <Container>
                <Row>
                    <Col md={8} className="centerPosition" key={data.id}>
                        <div className="card-wrapper">
                            <div className="card">
                                {/* <div class="number-label">
                                    <img src={"/images/fireman.png"} alt="Profile" />
                                </div> */}
                                {/* <div className="ribbon-wrapper">
                                    <div className="ribbon">
                                        <span>Fire</span>
                                    </div>
                                </div> */}
                                <div className="card-inner">
                                    <h1>
                                        <strong>ID:</strong> {data.id}
                                    </h1>
                                    <p>
                                        <strong>Email:</strong> {data.email}
                                    </p>
                                    <p>
                                        <strong>Phone:</strong> {data.phone}
                                    </p>
                                    <p>
                                        <strong>Phone Extra:</strong> {data.phone_extra}
                                    </p>
                                    <p>
                                        <strong>LAT:</strong> {data.lat}
                                    </p>
                                    <p>
                                        <strong>LNG:</strong> {data.lng}
                                    </p>
                                    <p>
                                        <strong>Address:</strong> {data.address}
                                    </p>
                                    <p>
                                        <strong>Thana:</strong> {data.thana}
                                    </p>
                                    <p>
                                        <strong>District:</strong> {data.district}
                                    </p>
                                    <p>
                                        <strong>Added By:</strong> {data.addedBy}
                                    </p>
                                    <div className="ratingBox">
                                        <div className="ratingText">
                                            <p> <strong>Rating:</strong> </p>
                                        </div>
                                        <div className="ratingIcon">
                                            <ReactStars
                                                        count={5}
                                                        value={3}
                                                        size={20}
                                                        edit={false}
                                                        activeColor="#ff304d "
                                                    />
                                        </div>
                                    </div>
                                    {/* <div className="ratingBox">
                                        <div className="ratingText">
                                            <p> <strong>Rating:</strong> </p>
                                        </div>
                                        <div className="ratingIcon">
                                            <ReactStars
                                                        count={5}
                                                        value={0}
                                                        size={20}
                                                        edit={true}
                                                        activeColor="#ff304d "
                                                    />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Col>
                 
                </Row>
            </Container>

        </>
    )

}

export default ServiceProfile