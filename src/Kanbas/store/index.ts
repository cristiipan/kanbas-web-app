import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../Account/reducer";
import dashboardReducer from "../Dashboard/reducer";
import modulesReducer from "../Courses/Modules/reducer";

const store = configureStore({
  reducer: {
    accountReducer,
    dashboardReducer,
    modulesReducer,
  },
});

export default store; 