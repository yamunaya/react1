import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import Purchasing from './Components/Purchasing';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './Components/Body/Dashboard';
import Sidenavbar from './Components/Body/Sidenavbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './Components/About';
import Inventory from './Components/Inventory'
import Admin from'./Components/Admin'
import Data from './Components/Data';
import Fianance from'./Components/Fianance';
function App(){
  return(
    <>
   <Router>
    <Row>
    <Col sm={2}>
      <Sidenavbar/>
    </Col>
    <Col sm={10}>
    <Routes>
<Route path='/react1' exact Component={Dashboard}/>
<Route path='/about' exact Component={About}/>
<Route path='/Purchasing' exact Component={Purchasing}/>
<Route path='/Inventory' exact Component={Inventory}/>
<Route path='/Data' exact Component={Data}/>
<Route path='/Admin' exact Component={Admin}/>
<Route path='/Fianance' exact Component={Fianance}/>
</Routes>
    </Col>
    </Row>
    </Router>
  
    </>
  )
  }
export default App