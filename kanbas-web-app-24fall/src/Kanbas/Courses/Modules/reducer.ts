import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";

const initialState = {
  modules: db.modules,
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action) => {
      state.modules.push(action.payload);
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) =>
        module._id === action.payload._id ? action.payload : module
      );
    },
  },
});

export const { addModule, deleteModule, updateModule } = modulesSlice.actions;
export default modulesSlice.reducer; 