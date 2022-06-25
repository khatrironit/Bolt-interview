import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import {
  changeMobileSidebarVisibility,
  changeSidebarVisibility
} from "../../redux/actions/sidebarActions";
import arrowRightIcon from "../../shared/img/arrowRightIcon.svg";
import hamburgerIcon from "../../shared/img/hamburgerIcon.svg";
import RecentTrips from "./components/RecentTrips";
import VehicleStatistics from "./components/VehicleStatistics";
import VehicleStatus from "./components/VehicleStatus";

export default function Dasboard() {
  const dispatch = useDispatch();
  const { vehicle } = useParams();

  return (
    <Card className="dashboard">
      <CardBody>
        <Container fluid>
          <Row className="dashboard__title mt-1">
            <Col xs="auto">
              <img
                src={hamburgerIcon}
                onClick={() => dispatch(changeSidebarVisibility())}
                className="dashboard__hamburger-desktop"
              />
              <img
                src={hamburgerIcon}
                onClick={() => dispatch(changeMobileSidebarVisibility())}
                className="dashboard__hamburger-mobile"
              />
            </Col>
            <Col xs="auto">
              <h6>Vehicles</h6>
            </Col>
            <Col xs="auto p-0">
              <img src={arrowRightIcon} className="mb-2" />
            </Col>
            <Col>
              <h5>Vehicle {vehicle || 1}</h5>
            </Col>
          </Row>
          <br />
          <Row>
            <VehicleStatus vehicle={Number(vehicle || 1)} />
            <VehicleStatistics />
          </Row>
          <br />
          <Row>
            <RecentTrips vehicle={Number(vehicle || 1)} />
          </Row>
        </Container>
      </CardBody>
    </Card>
  );
}
