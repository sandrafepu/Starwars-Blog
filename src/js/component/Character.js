import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import { useLocation } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Character = () => {
  const url = useLocation().pathname
  const urlSplitted = url.split("/")

  const [character, setCharacter] = useState([]);

  useEffect(() => {
		fetch("https://swapi.dev/api/people/" + urlSplitted[2])
		.then((response) => response.json())
		.then((data) => {
			//console.log(data)
			setCharacter(data);
		});
	}, []);

    return (
  <>
    <Container>
      <Row className="mb-4">
        <Col lg={8}><img src="https://via.placeholder.com/700x500"></img></Col>
        <Col lg={4}> 
          <h1 className=" mt-3">{character.name}</h1>
          <p className="fs-4 text-align-center">Esto es la descripción</p>
        </Col>
      </Row>
      </Container>
      <Row>
        <Col sm={2}><h2 className="fs-4 text-align-center">NAME</h2><p className=" mt-3">{character.name}</p></Col>
        <Col sm={2}><h2 className="fs-4 text-align-center">GENDER</h2><p className=" mt-3">{character.gender}</p></Col>
        <Col sm={2}><h2 className="fs-4 text-align-center">HEIGHT</h2><p className=" mt-3">{character.height}</p></Col>
        <Col sm={2}><h2 className="fs-4 text-align-center">BIRTH YEAR</h2><p className=" mt-3">{character.birth_year}</p></Col>
        <Col sm={2}><h2 className="fs-4 text-align-center">HAIR COLOR</h2><p className=" mt-3">{character.hair_color}</p></Col>
        <Col sm={2}><h2 className="fs-4 text-align-center">EYE COLOR</h2><p className=" mt-3">{character.eye_color}</p></Col>
      </Row>
        </>
    
    
    );
};