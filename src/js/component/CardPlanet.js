import React from "react";
import { Card, Button } from 'react-bootstrap';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListGroup from 'react-bootstrap/ListGroup';
import "../../styles/cardplanet.css";
import { Link } from "react-router-dom";

export const CardPlanet = (props) => {

  return (  
    <div className="listcardsplanets">
    <Card id="planetcard" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
        <Card.Body>
          <h3>{props.name}</h3>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <p><strong>Population:</strong> {props.population}</p>
          <p><strong>Terrain:</strong> {props.terrain}</p>
        </ListGroup>
        <Card.Body>
        <Link to={`/planet/${props.index}`}><Button variant="outline-primary">Learn More!</Button></Link>
          <Button variant="outline-warning float-end"><FontAwesomeIcon icon={faHeart}/></Button>
      </Card.Body>
    </Card> 
    </div>
  );
};