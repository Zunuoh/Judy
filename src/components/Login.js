import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import '../styles/style.css';
import { Facebook, Twitter, Instagram } from 'react-feather';
import {Link} from 'react-router-dom';



const Login = ()=>{
    return(
    <div>
    <Container fluid>
    <Row className="head">
       <Col sm={5} className="login">
           <div className="container">
           <div style={{paddingTop:"52%", paddingLeft:70}}>
               <div style={{fontSize:30}}>Login</div>
           </div>
           
           <div >
           <input type="text" className="field" placeholder="Email Address"/>
           <input type="text" className="field" placeholder="Password"/>
           </div>

           <div style={{paddingTop:5, paddingLeft:"69%", fontSize:12, color:"#888888"}}>
               Forgot password? Reset
               
           </div>
           
           <Link to ="/second">
           <Button className="button" style={{backgroundColor: "#313F52"}}>
                  {/* <Icon icon="plus"/> */}
                  <span style={{fontSize:20, fontStyle:"cursive"}}>Sign In</span>
                </Button>
                </Link>
                <div style={{width:"100%", height:2, backgroundColor:"#F5F5F5", marginTop:60}}/>

                <div style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:50}}>
                    <span>Sign in with</span>
                </div>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", paddingTop:20}}> 
                    <div style={{paddingRight:40}}><Facebook color="#959595" size={24} /></div>
                    <div style={{paddingLeft:10}}><Twitter color="#959595" size={24} /></div>
                    <div style={{paddingLeft:40}}><Instagram color="#959595" size={24} /></div>
                    
                    
                </div>
              
                </div>
           </Col>
       <Col sm={7} className="oj">
           <div style={{padding:40}}>
           <div style={{paddingTop:30, fontSize:60, color:"white"}}>J</div>

      <div style={{paddingTop:"20%", paddingLeft:30, color:"white"}}>
         <span style={{fontSize:60}}>Welcome</span>
         <div style={{marginTop:40, fontSize:18}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam</div>
         <div style={{fontSize:18}}>eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
         <div style={{fontSize:18}}>Ut enim ad minim veniam</div>
      </div>
           </div>
           
      
       </Col>
    </Row>
   
    </Container>

    
    </div>
    
    );
}

export default Login;