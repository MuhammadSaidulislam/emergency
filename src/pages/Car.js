import React, { useEffect } from "react";
import { Button, Card, CardColumns, CardGroup, Carousel, Col, Container, Row } from "react-bootstrap";
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Car = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
             <section>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: '100vh' }}
            src="https://livedemo00.template-help.com/joomla_52578/images/slider/slide-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 data-aos="fade-up" data-aos-duration="2000">Police Stations Service</h3>
            <p data-aos="fade-up" data-aos-duration="3000">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: '100vh' }}
            src="http://smartdemowp.com/firbrigs/wp-content/uploads/2020/09/banner-3.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
          <h3 data-aos="fade-up" data-aos-duration="2000">Fire Station Service</h3>
            <p data-aos="fade-up" data-aos-duration="3000">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: '100vh' }}
            src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
          <h3 data-aos="fade-up" data-aos-duration="2000">Blood Donation Service</h3>
            <p data-aos="fade-up" data-aos-duration="3000">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: '100vh' }}
            src="https://www.rrp.com.au/wp-content/uploads/2017/06/ambulance-called.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
          <h3 data-aos="fade-up" data-aos-duration="2000">Ambulance Service</h3>
            <p data-aos="fade-up" data-aos-duration="3000">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>

        </>
    )
}
