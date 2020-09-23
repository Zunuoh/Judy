import React from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import '../styles/style.css';

const Login = ()=>{
    return(
    <div>
        <Container >
    <Row className="head">
       <Col xs={6} className="login">
           <div className="container">
           <div style={{paddingTop:"50%", paddingLeft:70}}>
               <div style={{fontSize:30}}>Login</div>
           </div>
           
           <div >
           <input type="text" className="field" placeholder="Email Address"/>
           <input type="text" className="field" placeholder="Password"/>
           </div>

           <div style={{paddingTop:5, paddingLeft:"69%", fontSize:12}}>
               Forgot password? Reset
           </div>
           
           <Button variant="outline-secondary" style={{marginLeft:260, marginBottom:5}}>
                  {/* <Icon icon="plus"/> */}
                  <span style={{fontSize:10, fontStyle:"cursive"}}>Collection</span>
                </Button>
         







           </div>
           
       </Col>
       <Col xs={6} className="oj">sm=4
      
       </Col>
    </Row>
   
    </Container>

    
    </div>
    
    );
}

export default Login;