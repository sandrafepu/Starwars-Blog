import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import { useLocation } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Planet = () => {
  const url = useLocation().pathname
  const urlSplitted = url.split("/")

  const [planet, setPlanet] = useState([]);

  useEffect(() => {
		fetch("https://swapi.dev/api/planets/" + urlSplitted[2])
		.then((response) => response.json())
		.then((data) => {
			//console.log(data)
			setPlanet(data);
		});
	}, []);

    return (
  <>
    <Container>
      <Row className="mb-4">
        <Col lg={8}><img src="https://via.placeholder.com/700x500"></img></Col>
        <Col lg={4}> 
          <h1 className=" mt-3">{planet.name}</h1>
          <p className="fs-4 text-align-center">Esto es la descripción</p>
        </Col>
      </Row>
      </Container>
      <Row>
        <Col sm={2}><h2 className="fs-4 text-align-center">NAME</h2><p className=" mt-3">{planet.name}</p></Col>
        <Col sm={2}><h2 className="fs-4 text-align-center">CLIMATE</h2><p className=" mt-3">{planet.climate}</p></Col>
        <Col sm={2}><h2 className="fs-4 text-align-center">DIAMETER</h2><p className=" mt-3">{planet.diameter}</p></Col>
        <Col sm={2}><h2 className="fs-4 text-align-center">GRAVITY</h2><p className=" mt-3">{planet.gravity}</p></Col>
        <Col sm={2}><h2 className="fs-4 text-align-center">ROTATION PERIOD</h2><p className=" mt-3">{planet.totation_period}</p></Col>
        <Col sm={2}><h2 className="fs-4 text-align-center">POPULATION</h2><p className=" mt-3">{planet.population}</p></Col>
      </Row>
        </>
    
    
    );
};