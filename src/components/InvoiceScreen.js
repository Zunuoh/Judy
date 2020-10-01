import React, {useState, PureComponent} from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import { Search, Square } from 'react-feather';
import PieScreen from '../components/PieScreen'
import LineChart from './LineChart';
import ChartScreen from '../components/Chart';
import '../styles/style.css';


const invoiceList = [{"id":"0", "name":"Total Revenue", "amt":"$3,507.76", "info":"$300.76  last 30 days"},  {"id":"1", "name":"Average Invoice", "amt":"$3,507.76", "info":"$300.76  last 30 days"},
{"id":"2", "name":"Total Revenue", "amt":"$3,507.76", "info":"$300.76  last 30 days"}, {"id":"3", "name":"Average Invoice", "amt":"$3,507.76", "info":"$300.76  last 30 days"}];

const CompanyList =[{"id":"0", "inoiceid":"128957", "date":"14/03/2020","cname":"Shrubs & Co Law Firm", "invalue":"$1,000", "icon":  <Square color="#959595" size={24} />},
{"id":"1", "inoiceid":"128957", "date":"14/03/2020","cname":"Shrubs & Co Law Firm", "invalue":"$1,000", "icon":  <Square color="#959595" size={24} />},{"id":"2", "inoiceid":"128957", "date":"14/03/2020","cname":"Shrubs & Co Law Firm", "invalue":"$1,000", "icon":  <Square color="#959595" size={24} />},
{"id":"3", "inoiceid":"128957", "date":"14/03/2020","cname":"Shrubs & Co Law Firm", "invalue":"$1,000", "icon":  <Square color="#959595" size={24}/>}, {"id":"4", "inoiceid":"128957", "date":"14/03/2020","cname":"Shrubs & Co Law Firm", "invalue":"$1,000", "icon":  <Square color="#959595" size={24} />}]


const InvoiceScreen = ()=>{
    const[invoices, setInvoices] = useState(invoiceList);
    const[companies, setCompanies] = useState(CompanyList);
   
    return(
        <div>
           <Header/>
           
           <div style={{backgroundColor:"#E8E8E8", height:40,display:"flex", alignItems:"center", paddingLeft:20}}>
              <span>Menu</span>
           </div>

           <Container fluid style={{backgroundColor:"#FAFAFA"}}>
           <Row>
           <Col sm={2}  className="chartRow1"></Col>
           <Col sm={10}  className="chartRow2">
               <div style={{display:"flex", flexDirection:"row", paddingTop:30, paddingLeft:10}}>
               <Search color="#959595" size={24} />
               <div style={{paddingLeft:10}}>Search...</div>
               </div>

               <div style={{paddingTop:30, fontSize:20, paddingLeft:20}}>Invoice Summary</div>
                
                <div style={{display:"flex", flexDirection:"row", height:"13%"}} > 
                {invoices && invoices.map(invoice=>{
                    return(
                        <div style={{backgroundColor:"white", marginTop:30, marginLeft:18, paddingLeft:20, width:"23%", borderWidth:2}}>
                        <div style={{paddingTop:30}}>{invoice.name}</div>
                        <div style={{paddingTop:10, fontSize:30}}>{invoice.amt}</div>
                        <div style={{paddingTop:20, color:"#A5C6A9"}}>{invoice.info}</div>
                        </div>
                    );
                })} 
                </div>


  <Row>
    <Col xs={8}>
    <div className='chart'>
            <LineChart/>
        </div>
    </Col>
    <Col xs={4}>
    <div style={{backgroundColor:"white", marginTop:45, width:"88%", height:"55%", display:"flex", justifyContent:"center", alignItems:"center", paddingLeft: 80, paddingTop:90}} className="shadow">
      <PieScreen/> 
      </div>
    </Col>
  </Row>

      <div className="newInvoice">
      <div>New Invoices</div>
      <div style={{marginLeft:20}}>Unpaid Invoices</div>
      <div style={{marginLeft:20}}>Paid Invoices</div>
      </div>
      {/* <div style={{width:"90%", height:1, backgroundColor:"#DEDDDE", marginTop:20}}/> */}
        

        <div style={{display:"flex",flexDirection:"row", height:"35%", marginTop:20}}>
            <div style={{ width:"60%",backgroundColor:"white", padding:20, paddingLeft:60, paddingTop:40}}>
            <div style={{display:"flex", flexDirection:"row"}}>
            <Search color="#959595" size={24} />
            <div style={{paddingLeft:20}}>Search...</div>
            </div>
            
            <div className="company" >
            <Square color="#959595" size={24} />
            <div style={{paddingLeft:10}}>Invoice ID</div>
            <div style={{paddingLeft:90}}>Date</div>
            <div style={{paddingLeft:90}}>Company Name</div>
            <div style={{paddingLeft:90}}>Invoice Value</div>
            </div>

            {companies && companies.map(company =>{
                return(
                <div className="company">
                     <Square color="#959595" size={24} />
            <div style={{paddingLeft:10}}>{company.inoiceid}</div>
            <div style={{paddingLeft:90}}>{company.date}</div>
            <div style={{paddingLeft:90}}>{company.name}</div>
            <div style={{paddingLeft:90}}>{company.invalue}</div>
            <div style={{paddingLeft:90}}>{company.icon}</div>
                </div>
           
                );
            })}
            </div>


            {/* <div style={{backgroundColor:"white", marginLeft:50, padding:50}}> */}
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginLeft:40, padding:20}} className="shadow">
                <PieScreen/>
                </div>
              
            {/* </div> */}
        </div>

        
               
               
           </Col>
           </Row>
           </Container>

        </div>



       
     
    )
}
export default InvoiceScreen;