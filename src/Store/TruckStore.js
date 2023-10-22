import { createSlice, configureStore } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTruckData = (truckId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://tracking.bosta.co/shipments/track/${truckId}`
    );
    dispatch(setCurrentTruck(response.data));
  } catch (error) {}
};

const TruckSlice = createSlice({
  name: "truck",
  initialState: { CurrentTruck: {}, CurrentLanguage: true },
  reducers: {
    setCurrentTruck: (state, action) => {
      state.CurrentTruck = action.payload;
    },

    toggleLanguage: (state) => {
      state.CurrentLanguage = !state.CurrentLanguage;
    },
  },
});

export const TruckStore = configureStore({
  reducer: TruckSlice.reducer,
});

export const { setCurrentTruck, toggleLanguage } = TruckSlice.actions;
