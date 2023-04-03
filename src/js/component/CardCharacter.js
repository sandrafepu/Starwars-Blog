import React from "react";
import { Card, Button } from 'react-bootstrap';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import "../../styles/cardcharacters.css";

export const CardCharacter = (props) => {

  return (  
    < div className="listcards">  
    <Card id="personcard" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
        <Card.Body>
          <h3>{props.name}</h3>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <p><strong>Gender:</strong> {props.gender}</p>
          <p><strong>Hair color:</strong> {props.hair_color}</p>
          <p><strong>Eye color:</strong> {props.eye_color}</p>
        </ListGroup>
        <Card.Body>
          <Link to={`/character/${props.index}`}><Button variant="outline-primary">Learn More!</Button></Link>
          <Button variant="outline-warning float-end"><FontAwesomeIcon icon={faHeart}/></Button>
      </Card.Body>
    </Card> 
    </div> 
  );
};
