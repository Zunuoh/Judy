import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from '../src/components/Login'
import HomeScreen from '../src/components/HomeScreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calendar } from 'react-feather';
import LineChart from '../src/components/LineChart'
import PieScreen from './components/PieScreen'
import InvoiceScreen from '../src/components/InvoiceScreen';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>

    const App=()=>{
      return(
      // <Login/>
      // <HomeScreen/>
      // <PieScreen/>
      // <LineChart/>
      <InvoiceScreen/>
      )
    }
    
//     ReactDOM.render(<App/>, document.querySelector('#root'))
//   );
// }

export default App;
