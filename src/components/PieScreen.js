import React from 'react';
import Calendar from 'react-calendar';
import {Pie} from 'react-chartjs-2';
import '../styles/style.css';


const PieScreen =()=>{
    const data = {
        labels: [
            'Jan','Feb', 'Mar', 'Apr', 'May', 
        ],
        datasets:[
            {
                label:"Total Revenue",
                data:[
                    4, 1, 2, 4, 6, 8
                ],
                // borderColor:['rgba(109, 29, 35)'],
                backgroundColor:['red', 'blue', 'green', 'violet', 'black', 'yellow']
                
            },
            
        ]
    }

    return(
        <div className="pie">
            {/* <Calendar/> */}
            <Pie data={data}/>
           
        </div>
    );
}

export default PieScreen;