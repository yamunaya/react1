import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PieChart } from '@mui/x-charts/PieChart';
export default function BasicLineChart() {
  return (
  <div>
    <h1> THIS IS PURCHASING PAGE </h1>
    <Row>
      <Col sm={6}>
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={550}
      height={500}
    />
    </Col>
    <Col sm={6}>
      <br/>
      <center>
    <PieChart
  series={[
    {
      data: [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
      ],
    },
  ]}
  width={500}
  height={300}
/>
</center>
    </Col>
</Row>
</div>
  );
}