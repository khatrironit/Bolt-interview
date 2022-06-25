import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import PlusIcon from "../../../../shared/img/PlusIcon.svg";
import searchIcon from "../../../../shared/img/searchIcon.svg";

export default function AddVehicle({
  searchClicked,
  setSearchClicked,
  vehicleOptions,
  addVehicle,
}) {
  const [searchFocussed, setSearchFocussed] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [vehicles, setVehicles] = useState(vehicleOptions);

  useEffect(() => {
    const vehicles = vehicleOptions.filter((vehicle) =>
      vehicle.label.includes(searchInput)
    );
    setVehicles(vehicles);
  }, [searchInput, vehicleOptions]);

  useEffect(() => {
    setSearchFocussed(false);
    setSearchInput("");
  }, [searchClicked]);

  if (searchClicked) {
    return (
      <Container fluid className="sidebar__search">
        <Row>
          <Col>
            <div className="sidebar__search-inputdiv">
              <img src={searchIcon} />
              <input
                value={searchInput}
                placeholder="Search..."
                onChange={(e) => setSearchInput(e.target.value)}
                onFocus={() => setSearchFocussed(true)}
              />
            </div>
          </Col>
        </Row>
        {searchFocussed &&
          vehicles.map((vehicle, index) => (
            <Row
              className="sidebar__search-options"
              key={index}
              onClick={() => addVehicle(vehicle.value)}
            >
              <Col className="p-2 text-left">
                <span className="p-3">{vehicle.label}</span>
              </Col>
            </Row>
          ))}
      </Container>
    );
  }
  return (
    <Button
      className="sidebar__add-button"
      onClick={() => setSearchClicked(true)}
    >
      <span>
        <img src={PlusIcon} />
        <p className="mb-0">Add Vehicle</p>
      </span>
    </Button>
  );
}
