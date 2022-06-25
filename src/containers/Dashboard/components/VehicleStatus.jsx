import React from "react";
import { Col, Container, Row } from "reactstrap";
import greenCheckIcon from "../../../shared/img/greenCheckIcon.svg";
import greyCheckIcon from "../../../shared/img/greyCheckIcon.svg";

export default function VehicleStatus({ vehicle }) {
  return (
    <Col xs="12" sm="12" md="12" lg="5" className="pb-3">
      <h4>Vehicle Status</h4>
      <Container fluid className="vehiclestatus">
        <Row>
          <Col xs="12" sm="12" md="12" lg="8">
            <Row className="mb-3">
              <Col xs="8" sm="8" md="6" lg="6" xl="4">
                <span className="label">Elevation</span>
              </Col>
              <Col xs="4" sm="4" md="6" lg="6" xl="8">
                <span className="value">{20 * vehicle}m</span>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs="8" sm="8" md="6" lg="6" xl="4">
                <span className="label">Temperature</span>
              </Col>
              <Col xs="4" sm="4" md="6" lg="6" xl="8">
                <span className="value">{15 * vehicle}</span>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs="8" sm="8" md="6" lg="6" xl="4">
                <span className="label">Locked</span>
              </Col>
              <Col xs="4" sm="4" md="6" lg="6" xl="8">
                <img src={greyCheckIcon} />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs="8" sm="8" md="6" lg="6" xl="4">
                <span className="label">Battery</span>
              </Col>
              <Col xs="4" sm="4" md="6" lg="6" xl="8">
                <span className="value">{9 * vehicle}%</span>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="mb-2">
              <Col xs="auto">
                <img src={greenCheckIcon} className="greencheck" />
              </Col>
              <Col className="pl-0">
                <span className="label">Throttle</span>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs="auto">
                <img src={greenCheckIcon} className="greencheck" />
              </Col>
              <Col className="pl-0">
                <span className="label">Controller</span>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs="auto">
                <img src={greenCheckIcon} className="greencheck" />
              </Col>
              <Col className="pl-0">
                <span className="label">Motor</span>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs="auto">
                <img src={greenCheckIcon} className="greencheck" />
              </Col>
              <Col className="pl-0">
                <span className="label">Overload</span>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs="auto">
                <img src={greenCheckIcon} className="greencheck" />
              </Col>
              <Col className="pl-0">
                <span className="label">Overcurrent</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}
