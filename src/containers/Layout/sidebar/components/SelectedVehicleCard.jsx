import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import crossIcon from "../../../../shared/img/crossIcon.svg";

export default function SelectedVehicleCard({
  vehicleNumber,
  removeVehicle,
  vehicleClicked,
  setVehicleClicked,
}) {
  const navigate = useNavigate();

  const redirect = () => {
    setVehicleClicked(vehicleNumber);
    navigate(`/${vehicleNumber}`);
  };
  return (
    <Row className="mt-3">
      <Col>
        <Card className="sidebar__selectedvehicle-card">
          <Row>
            <Col onClick={redirect}>
              <h6 className={vehicleClicked == vehicleNumber ? "active" : ""}>
                Vehicle {vehicleNumber}
              </h6>
            </Col>
            <Col xs="auto">
              <img
                src={crossIcon}
                onClick={() => removeVehicle(vehicleNumber)}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
