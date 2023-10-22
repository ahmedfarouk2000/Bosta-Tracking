import React, { useEffect } from "react";
import "./home.css";
import Navbar from "../Navbar/navbar";
import TrackingCard from "../Tracking Card/trackingCard";
import TruckingDetails from "../Trucking Details/truckingDetails";

import { fetchTruckData } from "../../Store/TruckStore";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../Not Found/notFound";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTruckData(currentTruckId));
  }, [dispatch]);

  const currentTruck = useSelector((state) => state.CurrentTruck);

  const currentTruckId = useSelector((state) => state.CurrentTruckId);

  return (
    <>
      <div className="home-container">
        {currentTruck != null ? (
          <>
            <Navbar></Navbar>
            <TrackingCard></TrackingCard>
            <TruckingDetails></TruckingDetails>
          </>
        ) : (
          <>
            <Navbar></Navbar>
            <NotFound></NotFound>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
