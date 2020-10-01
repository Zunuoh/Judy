import React, {PureComponent} from 'react'
// import {Line} from 'react-chartjs-2';
import '../styles/style.css';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

// const LineChart = ()=>{
  
//     const data = {
//         labels: [
//             'Jan','Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Aug',
//             'Nov', 'Dec'
//         ],
//         datasets:[
//             {
//                 label:"Total Revenue",
//                 data:[
//                     4, 2, 2, 1, 2, 6, 2, 4, 8, 2, 4, 2
//                 ],
//                 borderColor:['rgba(109, 29, 35)'],
                
//             },
//             {
//                 label:'Sales for 2019(M)',
//                 data:[
//                     1,3,2,2,3, 4, 2,1,2,5,3,1
//                 ],
//                 borderColor:['rgba(89, 192, 104)']
//             }
//         ]
//     }

  
//     return(
//         <div>
//             <div>
//             <Line data={data}/>
//             </div>
//         </div>      
     
//     )
// }
// export default LineChart;

const data = [
    {
      name: 'Jan', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Feb', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Mar', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Apr', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'May', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'June', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'July', uv: 3490, pv: 4300, amt: 21020,
    },
    {
        name: 'Aug', uv: 3430, pv: 4200, amt: 2500,
      },
      {
        name: 'Sep', uv: 4490, pv: 3300, amt: 2800,
      },
      {
        name: 'Oct', uv: 2290, pv: 2300, amt: 2220,
      },
      {
        name: 'Nov', uv: 2490, pv: 6300, amt: 2130,
      },
      {
        name: 'Dec', uv: 4490, pv: 2300, amt: 2500,
      },
  ];
  
  export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
  
    render() {
      return (
        <LineChart
          width={1000}
          height={400}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      );
    }
  }