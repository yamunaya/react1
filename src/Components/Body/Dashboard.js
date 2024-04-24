import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Graph from './Graph'
import Tables from'./Tables'
import Cards from'./Cards'
function Dashboard() {
  return (
    <div className='up'>
      
        <h1 > ITEM OVERVIEW</h1 >
    
        <Cards/>
       <Row>
        <Col sm={6}>
        <Graph/>
        </Col>
        <Col sm={6}>
        <Tables/>
        </Col>
       </Row>
  </div>
  )
}

export default Dashboard