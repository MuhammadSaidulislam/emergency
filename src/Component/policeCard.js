import React from 'react'
import './fireCard.css'
import { Col, Container, Row, Table } from 'react-bootstrap'


const PoliceCard =(props) =>
{
    const data = props.data
    
    const Users = data.map((user) =>
    
<tr key={user.id}>
      <td>
      <a href={"/police/"+user.id}>{user.id}</a>
      </td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.address}, {user.thana}, {user.district}</td>
    </tr>
   
    
    );


    return(
        <div>
            <Container className="mt-5 mb-5">
        <Row>
          <Col md={12} className="serviceHeading">
            <h1 className="text-center mt-5">Police Station</h1>
          </Col>
          <Col md={12}>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr style={{ backgroundColor: '#222', color: '#ff304d' }}>
                  <th>ID</th>
                  <th>E-mail</th>
                  <th>Phone</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {Users}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
        </div>

    )
}
export default PoliceCard;