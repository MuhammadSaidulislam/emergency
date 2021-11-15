import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from '../Component/Cards'
import { Footer } from '../Component/Footer';
import Sdata from '../Component/Sdata'
import Taskbar from '../Component/taskbar'
import './services.css'


function ncard(value) {
   return (
      <Col md={4} className="categoryCard">
         <div class="card">
            <div class="card__image-container">
               <img
                  class="card__image"
                  src={value.imgsrc}
                  alt=" "
                  width="100%"
               />
            </div>


            <div class="card__content">
               <h1 class="card__title">{value.title}</h1>
               <p>
                  We believe in providing valuable insights for brands to
                  improve their presence on shelf and to be able to create
                  an impact at every single retailer and store in the
                  region.
               </p>
               <Button className="btn"> <Link to={value.link}>Explore Service</Link></Button>
            </div>
         </div>
      </Col>

   );
}
const Services = (props) => {


   return (

      <>
         <Taskbar login={props.login} />
         <h1 className="text-center">Emergency Services. Hi {props.data}</h1>
         <Container className="mb-5">
            <Row>
               {Sdata.map(ncard)}
            </Row>
         </Container>
         <Footer/>
      </>
   );
}


export default Services;