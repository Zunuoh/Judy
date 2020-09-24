import React from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import '../styles/style.css';


const HomeScreen = ()=>{
    return(
        <Container fluid>
         <Row>
    <Col sm={4}>sm=8</Col>
    <Col sm={8}>sm=4</Col>
  </Row>
      </Container>
    
    );
}
 
export default HomeScreen;