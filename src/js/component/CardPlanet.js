import React from "react";
import { Card, Button } from 'react-bootstrap';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListGroup from 'react-bootstrap/ListGroup';

export const CardPlanet = (props) => {

  return (  
    <Card id="planetcard" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
        <Card.Body>
          <h2>{props.name}</h2>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <p>Population: {props.population}</p>
          <p>Terrain: {props.terrain}</p>
        </ListGroup>
        <Card.Body>
          <Button variant="outline-primary">Learn More!</Button>
          <Button variant="outline-warning float-end"><FontAwesomeIcon icon={faHeart}/></Button>
      </Card.Body>
    </Card> 
  );
};