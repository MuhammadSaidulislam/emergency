import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './getServiceData.css';
import Loading from './Loading';

const GetServiceData = (props) => {

    const [isLoading, setIsLoading] = useState();
    const [msg, setMsg] = useState();
    const data = props.data
    const type = props.type
    const token = localStorage.getItem("token")
    const [createdServiceId, setCreatedServiceId] = useState();

    const createService = async (serviceId) => {
        setIsLoading(true)

        try {
            const response = await fetch('https://helping-backend.vercel.app/api/service', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({
                    type, serviceId
                })

            });
            const responseData = await response.json();
            if (response.ok) {
                setCreatedServiceId(responseData.data);
                setMsg("Please Don't Panik, We're on the way")
            }
            else if (response.status === 405) { setMsg("Required Data Error") }
            else if (response.status === 500) { setMsg("Database Error") }
            else { setMsg("Something Bad, Contact Developers"); }
            setIsLoading(false)
        }
        catch {
            setIsLoading(false)
        }
    }


    const Users = data.map((data) =>

        <div className="profileInfo mt-3 mb-4" key={data.id}>
            <p><strong>ID:</strong> {data.id}</p>
            <p><strong>Full address:</strong> {data.address}, {data.thana}, {data.district}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>Added By:</strong> {data.addedBy}</p>
            <Button className="btn btn-info" onClick={() => createService(data.id)}>Get Help Now !!</Button>
        </div>

    );


    return (
        <React.Fragment>

            {isLoading && <Loading />}

            {!isLoading &&
                <div>
                    <h4 className="text-center text-danger mt-4"> {msg}</h4>
                    {!isLoading && createdServiceId && <h5 className="text-center text-dark">Service Creation ID: {createdServiceId}</h5>}

                    <Container>
                        <Row>
                            <Col className="centerPosition mt-5" md={7}>
                                <h1 className="text-center">Services list</h1>
                            </Col>
                            <Col className="centerPosition" md={7}>
                                {Users}
                            </Col>
                        </Row>
                    </Container>
                </div>}
        </React.Fragment>



    )
}

export default GetServiceData