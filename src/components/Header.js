import React from 'react';
import { Grid, Bell, User } from 'react-feather';

const Header =()=>{
    return(
        <div>
            <div style={{display:"flex",flexDirection:"row", backgroundColor:"#35475D", height:70, alignItems:"center", paddingLeft:20}}>
        <div style={{width:40, height:40, backgroundColor:"#B2B2B2", borderWidth:1, borderRadius:20}}/>
        <div style={{paddingLeft:20, color:"#FFFFFF"}}>Judy</div>
        <input type="text" className="field" placeholder="Search..." style={{marginTop:2, marginLeft:"18%",width:"50%", borderRadius:5}}/>
        <Bell color="#FFFFFF" size={20} style={{marginLeft:150}}/>
        <Grid color="#FFFFFF" size={20} style={{marginLeft:20}}/>
       <div style={{marginLeft:30, color:"#FFFFFF"}}>Abigail Bobson</div>
       <div style={{width:40, height:40, backgroundColor:"#4B7E8B", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:30, marginLeft:40}}>
         <span style={{color:"#FFFFFF"}} >AB</span>
       </div>
      </div>
        </div>
    );
}

export default Header;