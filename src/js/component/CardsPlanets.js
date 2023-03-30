import React from "react";
import { Card, Button } from 'react-bootstrap';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import { useState } from 'react';

export const CardPlanet = (planet) => {
    return (

            <Card id="planetcard" style={{ width: '18rem' }}>
               <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
              <Card.Body>
              <h3>{planet.name}</h3>
              </Card.Body>
              <ListGroup className="list-group-flush">
              <p>Population: {planet.population}</p>
              <p>Terrain: {planet.terrain}</p>
              </ListGroup>
              <Card.Body>
                < Link to="/planet"><Button variant="outline-primary">Learn More!</Button></Link> 
                <Button variant="outline-warning float-end"><FontAwesomeIcon icon={faHeart}/></Button>
              </Card.Body>
            </Card>
    );
};