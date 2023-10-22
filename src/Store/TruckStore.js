import { createSlice, configureStore } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTruckData = (truckId) => async (dispatch) => {
  dispatch(setCurrentTruckId(truckId));
  try {
    const response = await axios.get(
      `https://tracking.bosta.co/shipments/track/${truckId}`
    );
    dispatch(setCurrentTruck(response.data));
  } catch (error) {
    dispatch(setCurrentTruck(null));
  }
};
// id
// 7234258
// 67151313
// 13737343

const TruckSlice = createSlice({
  name: "truck",
  initialState: {
    CurrentTruck: {},
    CurrentTruckId: 67151313,
    CurrentLanguage: true,
  },
  reducers: {
    setCurrentTruck: (state, action) => {
      state.CurrentTruck = action.payload;
    },
    setCurrentTruckId: (state, action) => {
      state.CurrentTruckId = action.payload;
    },
    toggleLanguage: (state) => {
      state.CurrentLanguage = !state.CurrentLanguage;
    },
  },
});

export const TruckStore = configureStore({
  reducer: TruckSlice.reducer,
});

export const { setCurrentTruck, toggleLanguage, setCurrentTruckId } =
  TruckSlice.actions;
