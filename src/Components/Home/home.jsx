import React, { useEffect, useState } from "react";
import "./home.css";
import Navbar from "../Navbar/navbar";
import TrackingCard from "../Tracking Card/trackingCard";
import TruckingDetails from "../Trucking Details/truckingDetails";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Navbar></Navbar>
        <TrackingCard></TrackingCard>
        <TruckingDetails></TruckingDetails>
      </div>
    </>
  );
};

export default Home;
