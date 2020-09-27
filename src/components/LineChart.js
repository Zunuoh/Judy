import React from 'react'
import {Line} from 'react-chartjs-2';
import '../styles/style.css';

const LineChart = ()=>{
  
    const data = {
        labels: [
            'Jan','Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Aug',
            'Nov', 'Dec'
        ],
        datasets:[
            {
                label:"Total Revenue",
                data:[
                    4, 2, 2, 1, 2, 6, 2, 4, 8, 2, 4, 2
                ],
                borderColor:['rgba(109, 29, 35)'],
                
            },
            {
                label:'Sales for 2019(M)',
                data:[
                    1,3,2,2,3, 4, 2,1,2,5,3,1
                ],
                borderColor:['rgba(89, 192, 104)']
            }
        ]
    }

  
    return(
        <div>
            <div className='chart'>
            <Line data={data}/>
            </div>
        </div>      
     
    )
}
export default LineChart;