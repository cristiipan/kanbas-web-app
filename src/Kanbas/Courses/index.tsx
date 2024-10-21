import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import AssignmentEditor from "./Assignments/Editor";
import Assignments from "./Assignments";
import CourseStatus from "./Home/Status";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import PeopleTable from "./People/Table";
import { courses } from "../Database";

export default function Courses() {
  const { cid } = useParams();
  console.log("Current cid:", cid);
  
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  
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
          {course && course.name} &gt; {pathname.split("/")[4]}
        </h2>
        <hr />
        <Routes>
          {/* Define a base path for the course */}
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="People" element={<PeopleTable />} />
        </Routes>
      </div>
    </div>
  );
}
