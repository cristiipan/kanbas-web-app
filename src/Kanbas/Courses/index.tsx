import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import AssignmentEditor from "./Assignments/Editor";
import Assignments from "./Assignments";
import CourseStatus from "./Home/Status";
import { Navigate, Route, Routes } from "react-router";
import { FaAlignJustify } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import PeopleTable from "./People/Table";

export default function Courses() {
  return (
    <div id="wd-courses" className="d-flex">
      {/* side bar */}
      <div style={{ width: '180px' }} className="d-none d-md-block">
        {/* second side bar */}
        <CoursesNavigation />
      </div>

      <div className="flex-fill">
        <h2 className="text-danger">
          <FaAlignJustify className="me-4 fs-4 mb-1" />
          Course 1234
        </h2>
        <hr />
        <Routes>
          {/* Define a base path for the course */}
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:aid" element={<AssignmentEditor />} />
          <Route path="People" element={<PeopleTable />} />
        </Routes>
      </div>
    </div>
  );
}
