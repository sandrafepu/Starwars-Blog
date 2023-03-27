import React from "react";
import { Card, Button } from 'react-bootstrap';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

export const CardCharacter = (props) => {
    return (
          
            <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
              <Card.Body>
              <h2 id="person-title">Person Title</h2>
              </Card.Body>
              <ListGroup className="list-group-flush">
              <strong>Gender:</strong><p id="person-gender"></p>
              <strong>Eye color:</strong><p id="person-eye_color"> Eye_color:</p>
              <strong>Hair:</strong><p id="person-hair_color"> Hair_color:</p>
              </ListGroup>
              <Card.Body>
                < Link to="/character"><Button variant="outline-primary">Learn More!</Button></Link> 
                <Button variant="outline-warning float-end"><FontAwesomeIcon icon={faHeart}/></Button>
              </Card.Body>
            </Card>
                    
    );
};
