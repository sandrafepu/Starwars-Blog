import React from "react";
import { Card, Button } from 'react-bootstrap';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

export const CardCharacter = (person) => {

    return (
          
            <Card id="personcard" style={{ width: '18rem' }}>
               <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
              <Card.Body>
              <h2>{person.name}</h2>
              </Card.Body>
              <ListGroup className="list-group-flush">
              <p>Gender: {person.gender}</p>
              <p>Hair color: {person.hair_color}</p>
              <p>Eye color: {person.eye_color}</p>
              </ListGroup>
              <Card.Body>
                < Link to="/character"><Button variant="outline-primary">Learn More!</Button></Link> 
                <Button variant="outline-warning float-end"><FontAwesomeIcon icon={faHeart}/></Button>
              </Card.Body>
            </Card>
                    
    );
};
