import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from '../src/components/Login'
import HomeScreen from '../src/components/HomeScreen';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calendar } from 'react-feather';
import LineChart from '../src/components/LineChart'
import PieScreen from './components/PieScreen'
import InvoiceScreen from '../src/components/InvoiceScreen';
import CalendarScreen from '../src/components/CalendarScreen';
import ChartScreen from '../src/components/Chart';


    const App=()=>{
      return(
      // <Login/>
      // <HomeScreen/>
      // <PieScreen/>
      // <LineChart/>
      // <InvoiceScreen/>
      // <CalendarScreen/>
      // <ChartScreen/>
      <BrowserRouter>
           <Switch>
             <Route component={Login} path="/" exact/>
             <Route component={HomeScreen} path="/second" exact/>
             <Route component={InvoiceScreen} path="/third" exact/>
             <Route component={CalendarScreen} path="/forth" exact/>

           </Switch>
      </BrowserRouter>

     
      )
    }
    
//     ReactDOM.render(<App/>, document.querySelector('#root'))
//   );
// }

export default App;
