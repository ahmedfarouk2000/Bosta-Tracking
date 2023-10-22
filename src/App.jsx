import React, { useEffect, useState, Suspense, lazy } from "react";

import "./App.css";
// import Home from "./Components/Home/home";

import { Provider } from "react-redux";
import { TruckStore } from "./Store/TruckStore.js";
import Loading from "./Components/Loading/loading";

// const Home = React.lazy(() => import("./Components/Home/home"));

const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Components/Home/home")), 3000);
  });
});

function App() {
  return (
    <>
      <Provider store={TruckStore}>
        <Suspense fallback={<Loading></Loading>}>
          <Home></Home>
        </Suspense>

        {/* <Loading></Loading> */}
      </Provider>
    </>
  );
}

export default App;
