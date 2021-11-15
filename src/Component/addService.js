import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import './addService.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const AddService = (props) => {

    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState();
    const [msg, setMsg] = useState();
    const [phone, setPhone] = useState();
    const [phone_extra, setPhone_extra] = useState();
    const [district, setDistrict] = useState();
    const [thana, setThana] = useState();
    const [address, setAddress] = useState();
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [email, setEmail] = useState();
    const [type, setType] = useState();

    let insertId;
    let token = localStorage.getItem("adminToken")

    const signUpHandler = async e => {
        setIsLoading(true)
        e.preventDefault();
        console.log("called signup");
        //https://helping-backend.vercel.app/api/
        try {
            const response = await fetch('https://helping-backend.vercel.app/api/add_service', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({
                    type: props.type, district, thana, address, phone, phone_extra, lat, lng, password, email
                })

            });
            const responseData = await response.json();
            insertId = responseData.data.insertId
            if (response.ok) {
                setMsg("Data Inserted at ID: " + insertId)
            }
            else if (response.status === 405) { setMsg("Required Data Error") }
            else if (response.status === 500) { setMsg("Database Error") }
            else {
                setMsg("Something Bad, Contact Developers");
            }
            setIsLoading(false)

        }
        catch {
            setIsLoading(false)
        }
    }

    const districtChange = e => {
        setDistrict(e.target.value);
    }

    const thanaChange = e => {
        setThana(e.target.value);
    }

    const addressChange = e => {
        setAddress(e.target.value);
    }

    const latChange = e => {
        setLat(e.target.value);
    }

    const lngChange = e => {
        setLng(e.target.value)
    }

    const emailChnage = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const phoneChange = e => {
        setPhone(e.target.value);
    }

    const phoneChange2 = e => {
        setPhone_extra(e.target.value);
    }

    const OneTimeChange = () => {
        useEffect(() => {
            if (props.type === 'fire') {
                setType('Fire Service')
            }
            else if (props.type === 'police') {
                setType('Police Station')
            }
        }, [])
    }

    OneTimeChange();
    console.log(type)

    return (
        <div>
            {isLoading && <Loading />}
            {!isLoading &&

                <Container>
                    <Row>
                        <Col md={8} className="box">
                            <h1 className="text-center">Hello Admin</h1>
                            <h3 className="text-center mb-5">Please add {type}</h3>

                            <h4 className="text-center text-danger">{msg}</h4>

                            <p className="lable mt-3">Enter your District</p>
                            <Form.Control name="district" value={district} onChange={districtChange} required type="text" placeholder="District"></Form.Control>
                            <p className="lable mt-3">Enter your Thana</p>
                            <Form.Control name="thana" value={thana} onChange={thanaChange} type="text" placeholder="Thana"></Form.Control>
                            <p className="lable mt-3">Enter your Address</p>
                            <Form.Control name="address" value={address} onChange={addressChange} type="text" placeholder="Address"></Form.Control>
                            <p className="lable mt-3">Enter your E-mail</p>
                            <Form.Control name="email" value={email} onChange={emailChnage} type="email" placeholder="Email"></Form.Control>
                            <p className="lable mt-3">Enter your Phone</p>
                            <Form.Control name="phone" value={phone} onChange={phoneChange} type="phone" placeholder="Phone"></Form.Control>
                            <p className="lable mt-3">Enter your Phone extra</p>
                            <Form.Control name="phone_extra" value={phone_extra} onChange={phoneChange2} type="phone" placeholder="Phone Extra"></Form.Control>
                            <p className="lable mt-3">Enter your Latitude</p>
                            <Form.Control name="lat" value={lat} onChange={latChange} type="number" placeholder="Latitude"></Form.Control>
                            <p className="lable mt-3">Enter your Longitude</p>
                            <Form.Control name="lng" value={lng} onChange={lngChange} type="number" placeholder="Longitude"></Form.Control>
                            <p className="lable mt-3">Enter your Password</p>
                            <Form.Control value={password} onChange={handlePasswordChange} name="password" type="password" placeholder="Password"></Form.Control>
                            <Button className="mt-5 text-center" id="center" onClick={signUpHandler} type="submit">Submit</Button>

                        </Col>
                    </Row>
                </Container>


            }
        </div>
    )
}

export default AddService