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
      <Row>
        <Col sm={8}><img src="https://via.placeholder.com/700x500"></img></Col>
        <Col sm={4}> 
          <h1 className=" mt-3">{character.name}</h1>
          <p className="fs-4 text-center">Esto es la descripción</p>
        </Col>
      </Row>
      </Container>
      <Row>
        <Col sm={6}> 
          <h1 className=" mt-3">{character.name}</h1>
          <h1 className=" mt-3">{character.gender}</h1>
          <h1 className=" mt-3">{character.name}</h1>
          <h1 className=" mt-3">{character.name}</h1>
          <h1 className=" mt-3">{character.name}</h1>
          <h1 className=" mt-3">{character.name}</h1>
        </Col>
      </Row>
        </>
    
    
    );
};