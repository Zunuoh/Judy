import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import { Search } from 'react-feather';
import PieScreen from '../components/PieScreen'
import LineChart from './LineChart';
import '../styles/style.css';

const invoiceList = [{"id":"0", "name":"Total Revenue", "amt":"$3,507.76", "info":"$300.76  last 30 days"},  {"id":"1", "name":"Average Invoice", "amt":"$3,507.76", "info":"$300.76  last 30 days"},
{"id":"2", "name":"Total Revenue", "amt":"$3,507.76", "info":"$300.76  last 30 days"}, {"id":"3", "name":"Average Invoice", "amt":"$3,507.76", "info":"$300.76  last 30 days"}]


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

                <div style={{display:"flex", flexDirection:"row", height:"22%"}}> 
                {invoices && invoices.map(invoice=>{
                    return(
                        <div style={{backgroundColor:"#F8F7F8", marginTop:30, marginLeft:30, paddingLeft:20, width:"22%", borderWidth:2}}>
                        <div style={{paddingTop:30}}>{invoice.name}</div>
                        <div style={{paddingTop:10, fontSize:30}}>{invoice.amt}</div>
                        <div style={{paddingTop:20, color:"#A5C6A9"}}>{invoice.info}</div>
                        </div>
                    );
                })} 
                </div>


        
        <div style={{display:"flex", flexDirection:"row"}}>
        <div className='chart'>
            <LineChart/>
        </div>
      
      <div style={{backgroundColor:"red", width:"30%", marginTop:81, height:"80%", marginLeft:80, paddingLeft:30, paddingTop:60, paddingBottom:60, display:"flex", flex:2}}>
      <PieScreen/> 
      </div>
       
        </div>
        
               
               
               
               
           </Col>
           </Row>
           </Container>

        </div>



       
     
    )
}
export default InvoiceScreen;