import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import tasksReducer from "./slices/tasksSlice";
import weatherReducer from "./slices/weatherSlice";

const preloadedState = {
  auth: {
    isAuthenticated: !!localStorage.getItem("user"), // Only true if user exists in storage
    user: JSON.parse(localStorage.getItem("user")) || null,
    error: null,
  },
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
    weather: weatherReducer,
  },
  preloadedState,
});

export default store;
