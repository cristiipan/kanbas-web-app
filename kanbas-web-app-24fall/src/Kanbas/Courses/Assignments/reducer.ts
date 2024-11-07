import { createSlice, createAction } from "@reduxjs/toolkit";
import * as db from "../../Database";

// 定义 Assignment 接口
interface Assignment {
  _id: string;
  title: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
  course?: string;
}

const initialState = {
  assignments: db.assignments,
};

export const addAssignment = createAction(
  "assignments/addAssignment",
  (assignment: Assignment) => ({
    payload: assignment,
  })
);

export const deleteAssignment = createAction(
  "assignments/deleteAssignment",
  (assignmentId: string) => ({
    payload: assignmentId,
  })
);

export const updateAssignment = createAction(
  "assignments/updateAssignment",
  (assignment: Assignment) => ({
    payload: assignment,
  })
);

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        dueDate: assignment.dueDate || null,
        points: assignment.points || 0,
        description: assignment.description || "",
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: updatedAssignment }) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === updatedAssignment._id ? updatedAssignment : assignment
      );
    },
  },
});

export default assignmentsSlice.reducer;
