import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Col, Row } from "reactstrap";

const data = {
  labels: [
    "Text",
    "Text",
    "Text",
    "Text",
    "Text",
    "Text",
    "Text",
    "Text",
    "Text",
    "Text",
    "Text",
    "Text",
  ],
  datasets: [
    {
      label: "Vehicle",
      fill: false,
      lineTension: 0.3,
      backgroundColor: "#424242",
      borderColor: "#424242",
      borderWidth: 1,
      pointBackgroundColor: "#424242",
      pointHoverRadius: 6,
      pointHoverBorderWidth: 1,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [20, 47, 45, 4, 58, 7, 45, 25, 54, 2, 48, 78, 54],
    },
  ],
};

const options = {
  legend: {
    display: false,
  },
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgb(204, 204, 204)",
          borderDash: [3, 3],
        },
        ticks: {
          fontColor: "rgb(204, 204, 204)",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgb(204, 204, 204)",
          borderDash: [3, 3],
        },
        ticks: {
          fontColor: "rgb(204, 204, 204)",
        },
      },
    ],
  },
};
export default function VehicleStatistics() {
  const [graphType, setGraphType] = useState("Earnings");
  const [graphTenure, setGraphTenure] = useState("D");
  const [graphData, setGraphData] = useState(data);

  useEffect(() => {
    const newData = [];
    const oldDataSet = graphData.datasets[0];
    for (let x = 0; x < data.labels.length; x += 1) {
      newData.push(Math.floor(Math.random() * 100));
    }
    const newDataSet = {
      ...oldDataSet,
    };

    newDataSet.data = newData;
    const newState = {
      ...data,
      datasets: [newDataSet],
    };
    setGraphData(newState);
  }, [graphType, graphTenure]);
  return (
    <Col xs="12" sm="12" md="12" lg="7" className="vehiclestatistics">
      <Row>
        <Col>
          <div className="d-flex">
            <h4 className="mb-0">Statistics</h4>
            <button
              className={`${graphType === "Bookings" ? "active" : ""}`}
              onClick={() => setGraphType("Bookings")}
            >
              Bookings
            </button>
            <button
              className={`${graphType === "Earnings" ? "active" : ""}`}
              onClick={() => setGraphType("Earnings")}
            >
              Earnings
            </button>
          </div>
        </Col>
        <Col className="text-right">
          <div className="d-flex right">
            <button
              className={`${graphTenure === "D" ? "active" : ""}`}
              onClick={() => setGraphTenure("D")}
            >
              D
            </button>
            <button
              className={`${graphTenure === "W" ? "active" : ""}`}
              onClick={() => setGraphTenure("W")}
            >
              W
            </button>
            <button
              className={`${graphTenure === "M" ? "active" : ""}`}
              onClick={() => setGraphTenure("M")}
            >
              M
            </button>
            <button
              className={`${graphTenure === "Max" ? "active" : ""}`}
              onClick={() => setGraphTenure("Max")}
            >
              Max
            </button>
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col style={{ height: "220px" }}>
          <Line data={graphData} options={options} />
        </Col>
      </Row>
    </Col>
  );
}
