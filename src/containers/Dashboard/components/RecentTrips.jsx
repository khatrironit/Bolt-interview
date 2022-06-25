import React from "react";
import { Col, Table } from "reactstrap";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function RecentTrips({ vehicle }) {
  return (
    <Col>
      <h4>Recent Trips</h4>
      <Table responsive bordered className="dashboard__table">
        <tbody>
          <tr>
            <th>Start Time</th>
            <th>Duration</th>
            <th>Max Speed</th>
            <th>Average Speed</th>
            <th>Starting Voltage</th>
            <th>Ending Voltage</th>
            <th>Distance</th>
            <th>Driver Score</th>
          </tr>
          {data.map((elmt) => (
            <tr key={elmt}>
              <td>May {26 + vehicle}, 5:18 pm</td>
              <td>{24 + vehicle} min</td>
              <td>{91 + vehicle} kmph</td>
              <td>{54 + vehicle} kmph</td>
              <td>{70.04 + vehicle}V</td>
              <td>{69.42 + vehicle}V</td>
              <td>{5.45 + vehicle} km</td>
              <td>{98.5 + vehicle}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  );
}
