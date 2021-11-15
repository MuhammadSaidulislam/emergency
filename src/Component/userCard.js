import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import './userCard.css'

const UserCard =(props) =>
{
    const data = props.data
    
    const Users = data.map((user) =>

    <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.first_name} {user.last_name}</td>
        <td>{user.email}</td> 
        <td>{user.phone}</td>
    </tr>
    
    );


    return(
        <>
        <Container className="mb-5">
            <Row>
                <Col md={12}>
                <Table striped bordered hover className="text-center">
              <thead>
                <tr style={{ backgroundColor: '#222', color: '#ff304d' }}>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>E-mail</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {Users}
              </tbody>
            </Table>
                </Col>
            </Row>
        </Container>
        </>

    )
}
export default UserCard;