import React from "react";
import { Card, Button } from 'react-bootstrap';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

export const CardPlanet = () => {
    return (

            <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                < Link to="/planet"><Button variant="outline-primary">Learn More!</Button></Link> 
                <Button variant="outline-warning float-end"><FontAwesomeIcon icon={faHeart}/></Button>
              </Card.Body>
            </Card>
    );
};