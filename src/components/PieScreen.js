import React from 'react';
import {Pie} from 'react-chartjs-2';
import '../styles/style.css';


const PieScreen =()=>{
   const pieData = {
       labels:[
           'Jan', 'Feb', 'Mar', 'Apr', 'May'
       ],
       datasets:[
           {
               label:"Total Revenue",
               data:[
                   4,1,2,4,6
               ],
               backgroundColor : ["green", "red", "brown", "blue", "black"]
            }
       ]
   }


    return(
         <div className="pie">
           
            <Pie data={pieData} />
           
             </div>
    );
}

export default PieScreen;