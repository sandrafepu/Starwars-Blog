import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Planet = () => {
    return (
  <>
    <Container>
      <Row>
        <Col sm={8}><img src="https://via.placeholder.com/700x500"></img></Col>
        <Col sm={4}> <h1 className=" mt-3">NOMBRE PLANETA</h1><p className="fs-4 text-center">Descripción</p></Col>
      </Row>
      </Container>
        </>
    
    
    );
};