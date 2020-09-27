import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import { Search } from 'react-feather';
import PieScreen from '../components/PieScreen'
import LineChart from './LineChart';
import '../styles/style.css';

const invoiceList = [{"id":"0", "name":"Total Revenue", "amt":"$3,507.76", "info":"$300.76  last days"},  {"id":"0", "name":"Average Invoice", "amt":"$3,507.76", "info":"$300.76  last days"},
{"id":"0", "name":"Total Revenue", "amt":"$3,507.76", "info":"$300.76  last days"}, {"id":"0", "name":"Average Invoice", "amt":"$3,507.76", "info":"$300.76  last days"}]


const InvoiceScreen = ()=>{
    const[invoices, setInvoices] = useState(invoiceList);
   
    return(
        <div>
           <Header/>
           
           <div style={{backgroundColor:"#E8E8E8", height:40,display:"flex", alignItems:"center", paddingLeft:20}}>
              <span>Menu</span>
           </div>

           <Container fluid>
           <Row>
           <Col sm={2}  className="chartRow1"></Col>
           <Col sm={10}  className="chartRow2">
               <div style={{display:"flex", flexDirection:"row", paddingTop:30, paddingLeft:10}}>
               <Search color="#959595" size={24} />
               <div style={{paddingLeft:10}}>Search...</div>
               </div>

               <div style={{paddingTop:30, fontSize:20, paddingLeft:20}}>Invoice Summary</div>

                <div style={{display:"flex", flexDirection:"row"}}> 
                    <div style={{ width:"20%", height:"30%",backgroundColor:"blue", marginTop:30, marginLeft:30, paddingLeft:20}}>
                    <div style={{paddingTop:30}}>Total Revenue</div>
                    <div style={{paddingTop:20, fontSize:30}}>fjff</div>
                    <div style={{paddingTop:20}}>jkfm,d</div>
                    </div>
                    
                    
                    <div style={{ width:"20%", height:"30%",backgroundColor:"blue", marginTop:30, marginLeft:30, paddingLeft:20}}>
                    <div style={{paddingTop:30}}>Total Revenue</div>
                    <div style={{paddingTop:20, fontSize:30}}>fjff</div>
                    <div style={{paddingTop:20}}>jkfm,d</div>
                    </div>

                    <div style={{ width:"20%", height:"30%",backgroundColor:"blue", marginTop:30, marginLeft:30, paddingLeft:20}}>
                    <div style={{paddingTop:30}}>Total Revenue</div>
                    <div style={{paddingTop:20, fontSize:30}}>fjff</div>
                    <div style={{paddingTop:20}}>jkfm,d</div>
                    </div>

                    <div style={{ width:"20%", height:"30%",backgroundColor:"blue", marginTop:30, marginLeft:30, paddingLeft:20}}>
                    <div style={{paddingTop:30}}>Total Revenue</div>
                    <div style={{paddingTop:20, fontSize:30}}>fjff</div>
                    <div style={{paddingTop:20}}>jkfm,d</div>
                    </div>

                    
                </div>


        
         <div style={{paddingTop:60, backgroundColor:"blue", height:"50%", width:"55%", marginTop:40, paddingLeft:40}}>
         <LineChart/>
         </div>
          
           <PieScreen/> 
               
               
               
               
           </Col>
           </Row>
           </Container>

        </div>



       
     
    )
}
export default InvoiceScreen;