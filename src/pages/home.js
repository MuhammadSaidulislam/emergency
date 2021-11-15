import React, { useState, useEffect } from 'react';
import './home.css'
import Loading from '../Component/Loading'
import img1 from '../images/home.png'
import { Card, CardGroup, Carousel, Col, Container, Pagination, Row, Table } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Car } from './Car';
import { Link } from 'react-router-dom';
const Home = () => {

  const [isLoading, setIsLoading] = useState();
  const [temp, setTemp] = useState();
  const [aTemp, setAtemp] = useState();
  const getWeather = async () => {
    setIsLoading(true)

    console.log("called");
    try {
      const response = await fetch('https://api.weatherapi.com/v1/current.json?key=e4bdd4326ac64b2987c93822211407&q=Dhaka&aqi=no', {
        method: 'GET'

      });
      const responseData = await response.json();
      console.log(responseData);
      if (response.ok) {
        setTemp(responseData.current.temp_c)

        setAtemp(responseData.current.feelslike_c)
      }
      setIsLoading(false)


    }
    catch {
      setIsLoading(false)
      console.log("catch")
    }
  }



  function App() {
    useEffect(() => {
      getWeather()
    }, []);
  }
  App();

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Car></Car>
     
    </>
  )
}
export default Home;