import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import { FaBars } from "react-icons/fa";
import * as db from "../../Database"; // 导入数据库

function Navigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  
  // 获取当前课程信息
  const course = db.courses.find((c) => c._id === cid);
  
  // 获取当前页面的名称
  const getPageName = () => {
    if (pathname.includes("/Assignments")) return "Assignments";
    if (pathname.includes("/Modules")) return "Modules";
    if (pathname.includes("/Piazza")) return "Piazza";
    if (pathname.includes("/Zoom")) return "Zoom";
    if (pathname.includes("/Quizzes")) return "Quizzes";
    if (pathname.includes("/People")) return "People";
    return "Home";
  };

  return (
    <div className="wd-breadcrumb">
      <nav>
        <FaBars className="course-bars-icon" />
        <Link to={`/Kanbas/Courses/${cid}/Home`} className="course-title">
          {course?.name || `Course ${cid}`} {/* 显示具体课程名称 */}
        </Link>
        <span className="breadcrumb-separator">&gt;</span>
        <span className="page-name">{getPageName()}</span>
      </nav>
    </div>
  );
}

export default Navigation; 