import React, { useEffect } from "react";
import "./home.css";
import Navbar from "../Navbar/navbar";
import TrackingCard from "../Tracking Card/trackingCard";
import TruckingDetails from "../Trucking Details/truckingDetails";

import { fetchTruckData } from "../../Store/TruckStore";
import { useDispatch } from "react-redux";

const Home = () => {
  // 7234258
  // 67151313
  // 13737343
  const initialTruckId = 67151313;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTruckData(initialTruckId));
  }, [dispatch]);

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
