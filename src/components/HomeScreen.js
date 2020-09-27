import React from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import '../styles/style.css';
import { Grid, Bell, User } from 'react-feather';
import Header from './Header';



const HomeScreen = ()=>{
    return(
      <div>
      <Header/>

      <Container>
      <Row>
    <Col xs={6} md={4} className="row1">
    <div style={{width:"70%", height:"20%",marginTop:170, marginLeft:30, display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
    <User color="black" size={60} />
    <span style={{fontSize:22, paddingTop:5}}>Profile Managment</span>
    <span style={{fontSize:22}}> Module</span>
    </div>

    <div style={{width:"70%", height:"20%",marginTop:50, marginLeft:30 , display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
    <User color="black" size={60} />
    <span style={{fontSize:22, paddingTop:5}}>Invoices</span>
    {/* <span style={{fontSize:22}}> Module</span> */}
    </div>

    <div style={{width:"70%", height:"20%",marginTop:50, marginLeft:30, display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
    <User color="black" size={60} />
    <span style={{fontSize:22, paddingTop:5}}>Document Module</span>
    {/* <span style={{fontSize:22}}> Module</span> */}
    </div>
    </Col>

    <Col xs={6} md={4}  className="row2">
    <div style={{width:"70%", height:"20%",marginTop:170, marginLeft:30, display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
    <User color="black" size={60} />
    <span style={{fontSize:22, paddingTop:5}}>Practice Managment</span>
    <span style={{fontSize:22}}> Module</span>
    </div>

    <div style={{width:"70%", height:"20%",marginTop:50, marginLeft:30 , display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
    <User color="black" size={60} />
    <span style={{fontSize:22, paddingTop:5}}>Expense</span>
    <span style={{fontSize:22}}> Management</span>
    </div>

    <div style={{width:"70%", height:"20%",marginTop:50, marginLeft:30 , display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
    <User color="black" size={60} />
    <span style={{fontSize:22, paddingTop:5}}>Calender</span>
    <span style={{fontSize:22}}> Module</span>
    </div>
    </Col>
    <Col xs={6} md={4}  className="row3">
    <div style={{width:"70%", height:"20%",marginTop:170, marginLeft:30, display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
    <User color="black" size={60} />
    <span style={{fontSize:22, paddingTop:5}}>Master Class</span>
    <span style={{fontSize:22}}> Module</span>
    </div>

    <div style={{width:"70%", height:"20%",marginTop:50, marginLeft:30, display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
    <User color="black" size={60} />
    <span style={{fontSize:22, paddingTop:5}}>Case Managment</span>
    <span style={{fontSize:22}}> Management</span>
    </div>

    <div style={{width:"70%", height:"20%",marginTop:50, marginLeft:30, display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
    <User color="black" size={60} />
    <span style={{fontSize:22, paddingTop:5}}>File Storage</span>
    {/* <span style={{fontSize:22}}> Module</span> */}
    </div>
    </Col>
  </Row>
      </Container>
      </div>

 
    
    );
}
 
export default HomeScreen;