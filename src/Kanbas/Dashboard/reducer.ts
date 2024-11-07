import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as db from "../Database";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface EnrollmentPayload {
  user: string;
  course: string;
}

const initialState = {
  courses: db.courses,
  enrollments: db.enrollments as Enrollment[],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    enrollCourse: (state, action: PayloadAction<EnrollmentPayload>) => {
      const newEnrollment: Enrollment = {
        _id: new Date().getTime().toString(),
        user: action.payload.user,
        course: action.payload.course,
      };
      state.enrollments.push(newEnrollment);
    },
    unenrollCourse: (state, action: PayloadAction<EnrollmentPayload>) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(enrollment.user === action.payload.user && 
            enrollment.course === action.payload.course)
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = dashboardSlice.actions;
export default dashboardSlice.reducer;
