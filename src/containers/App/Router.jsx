import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/index";
import Layout from "../Layout/index";


const Router = () => (
  <main>
    <Layout />
    <div className="container__wrap">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:vehicle" element={<Dashboard />} />
      </Routes>{" "}
    </div>
  </main>
);

export default Router;
