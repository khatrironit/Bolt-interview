import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Scrollbar from "react-smooth-scrollbar";
import { Col, Container, Row } from "reactstrap";
import vehicles from "../../../shared/data/vehicles";
import AddVehicle from "./components/AddVehicle";
import SelectedVehicleCard from "./components/SelectedVehicleCard";

const Sidebar = ({ changeMobileSidebarVisibility, sidebar }) => {
  const sidebarClass = classNames({
    sidebar: true,
    "sidebar--show": sidebar.show,
    "sidebar--collapse": sidebar.collapse,
  });

  const [selectedVehicles, setSelectedVehicle] = useState([1, 2, 3]);
  const [optionVehicles, setOptionVehicle] = useState(
    vehicles.filter((vehicle) => vehicle.value > 1)
  );
  const [searchClicked, setSearchClicked] = useState(false);
  const [vehicleClicked, setVehicleClicked] = useState(1);

  const addVehicle = (vehicle) => {
    setSelectedVehicle((prevSelectedVehicles) => [
      ...prevSelectedVehicles,
      vehicle,
    ]);
    setSearchClicked(false);
  };

  const removeVehicle = (vehicle) => {
    setSelectedVehicle((prevSelectedVehicles) =>
      prevSelectedVehicles.filter((elmt) => elmt !== vehicle)
    );
  };

  useEffect(() => {
    setOptionVehicle(
      vehicles.filter((vehicle) => !selectedVehicles.includes(vehicle.value))
    );
  }, [selectedVehicles]);
  return (
    <div className={sidebarClass}>
      {searchClicked && (
        <div
          className="sidebar__blursearch"
          onClick={() => setSearchClicked(false)}
        />
      )}
      <button
        className="sidebar__back"
        onClick={changeMobileSidebarVisibility}
      />
      <Row className="mb-2 mt-3">
        <Col className="text-center">
          <span className="sidebar__heading">Vehicle Viewer</span>
        </Col>
      </Row>
      <Scrollbar className="sidebar__scroll scroll">
        <div className="sidebar__wrapper sidebar__wrapper--desktop">
          <Container fluid>
            <Row className="sidebar__addvehicle">
              <Col>
                <AddVehicle
                  vehicleOptions={optionVehicles.filter(
                    (vehicle) => !selectedVehicles.includes(vehicle.value)
                  )}
                  addVehicle={addVehicle}
                  searchClicked={searchClicked}
                  setSearchClicked={setSearchClicked}
                />
              </Col>
            </Row>
            {selectedVehicles.map((vehicle) => (
              <SelectedVehicleCard
                vehicleNumber={vehicle}
                vehicleClicked={vehicleClicked}
                removeVehicle={removeVehicle}
                setVehicleClicked={setVehicleClicked}
              />
            ))}
          </Container>
        </div>
        <div className="sidebar__wrapper sidebar__wrapper--mobile">
          <Container fluid>
            <Row className="sidebar__addvehicle">
              <Col>
                <AddVehicle
                  vehicleOptions={optionVehicles.filter(
                    (vehicle) => !selectedVehicles.includes(vehicle.value)
                  )}
                  addVehicle={addVehicle}
                  searchClicked={searchClicked}
                  setSearchClicked={setSearchClicked}
                />
              </Col>
            </Row>
            {selectedVehicles.map((vehicle) => (
              <SelectedVehicleCard
                vehicleNumber={vehicle}
                vehicleClicked={vehicleClicked}
                removeVehicle={removeVehicle}
                setVehicleClicked={setVehicleClicked}
              />
            ))}
          </Container>
        </div>
      </Scrollbar>
    </div>
  );
};
export default Sidebar;
