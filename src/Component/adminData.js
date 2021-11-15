import React from 'react'
import './userCard.css'
import "./myServicesData.css"
import { Col, Container, Row, Table } from 'react-bootstrap';

const adminData =(props) =>
{
    const data1 = props.data.data
    const data2 = props.data.data2
    console.log("data",data1)
    console.log("data2",data2)
    
    const Fire = data1.map((user) =>

    <tr key={user.id}>
                <td>{user.serviceid}</td> 
        <td>Fire Service</td>
        <td>{user.status}</td>
        <td>{user.creation_time}</td>
    </tr>
    
    );
    const Police = data2.map((user) =>

    <tr key={user.id}>
        <td>{user.serviceid}</td> 
        <td>Police Station</td>
        <td>{user.status}</td>
        <td>{user.creation_time}</td>
    </tr>
    
    );


    return(
        <>
            <Container className="mt-5 mb-5">
            <Row>
                <Col md={12}>
                    <h1 className="text-center">Police Station List</h1>
                    </Col>
                <Col md={12}>
                <Table striped bordered hover className="text-center">
              <thead>
                <tr style={{ backgroundColor: '#222', color: '#ff304d' }}>
                  <th>Service ID</th>
                  <th>Service Type</th>
                  <th>Status</th>
                  <th>Creation Time</th>
                </tr>
              </thead>
              <tbody>
                {Police}
              </tbody>
            </Table>
                </Col>
            </Row>
        </Container>
            <Container className="mt-5 mb-5">
            <Row>
                <Col md={12}>
                    <h1 className="text-center">Fire Services List</h1>
                    </Col>
                <Col md={12}>
                <Table striped bordered hover className="text-center">
              <thead>
                <tr style={{ backgroundColor: '#222', color: '#ff304d' }}>
                  <th>Service ID</th>
                  <th>Service Type</th>
                  <th>Status</th>
                  <th>Creation Time</th>
                </tr>
              </thead>
              <tbody>
                {Fire}
              </tbody>
            </Table>
                </Col>
            </Row>
        </Container>
        </>

    )
}
export default adminData;