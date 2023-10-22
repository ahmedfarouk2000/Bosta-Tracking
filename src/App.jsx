import React, { Suspense, lazy } from "react";

import "./App.css";
import { Provider } from "react-redux";
import { TruckStore } from "./Store/TruckStore.js";
import Loading from "./Components/Loading/loading";

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
      </Provider>
    </>
  );
}

export default App;
