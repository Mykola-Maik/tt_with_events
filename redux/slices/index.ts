import { combineReducers } from "@reduxjs/toolkit";
import serviceModalReducer from "./serviceModalSlice/serviceModalSlice";
import eventReducer from "./eventSlice/eventSlice";

const rootReducer = combineReducers({
  serviceModalSlice: serviceModalReducer,
  eventSlice: eventReducer,
});

export default rootReducer;
