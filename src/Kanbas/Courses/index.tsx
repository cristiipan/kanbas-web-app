import React from "react";
import { useParams, Link, Routes, Route } from "react-router-dom";
import CourseNavigation from "./Navigation";
import BreadcrumbNavigation from "./Navigation/index";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Modules from "./Modules";
import Home from "./Home";
import "./index.css";

function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);

  return (
    <div>
      <div className="d-flex">
        <div className="wd-course-navigation">
          <CourseNavigation />
        </div>
        
        <div className="flex-grow-1 p-4">
          {/* 将面包屑导航移到这里，替换原来的课程标题 */}
          <BreadcrumbNavigation />
          
          {/* Course Content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/Editor" element={<AssignmentEditor />} />
            <Route path="Assignments/Editor/:assignmentId" element={<AssignmentEditor />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
