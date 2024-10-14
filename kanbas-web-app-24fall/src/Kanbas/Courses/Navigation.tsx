import { NavLink } from "react-router-dom";

export default function CoursesNavigation() {
  return (
      <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
        
        {/* Home Link */}
        <NavLink 
          to="/Kanbas/Courses/1234/Home" 
          id="wd-course-home-link"
          className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}
          style={{ marginBottom: '30px' }}
        >
          Home 
        </NavLink>

        {/* Modules Link */}
        <NavLink 
          to="/Kanbas/Courses/1234/Modules" 
          id="wd-course-modules-link"
          className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}
          style={{ marginBottom: '30px' }}
        >
          Modules 
        </NavLink>
        
        {/* Piazza Link */}
        <NavLink 
          to="/Kanbas/Courses/1234/Piazza" 
          id="wd-course-piazza-link"
          className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}
          style={{ marginBottom: '30px' }}
        >
          Piazza 
        </NavLink>
        
        {/* Zoom Link */}
        <NavLink 
          to="/Kanbas/Courses/1234/Zoom" 
          id="wd-course-zoom-link"
          className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}
          style={{ marginBottom: '30px' }}
        >
          Zoom 
        </NavLink>
        
        {/* Assignments Link */}
        <NavLink 
          to="/Kanbas/Courses/1234/Assignments" 
          id="wd-course-quizzes-link"
          className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}
          style={{ marginBottom: '30px' }}
        >
          Assignments 
        </NavLink>
        
        {/* Quizzes Link */}
        <NavLink 
          to="/Kanbas/Courses/1234/Quizzes" 
          id="wd-course-assignments-link"
          className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}
          style={{ marginBottom: '30px' }}
        >
          Quizzes 
        </NavLink>
        
        {/* People Link */}
        <NavLink 
          to="/Kanbas/Courses/1234/People" 
          id="wd-course-people-link"
          className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}
          style={{ marginBottom: '30px' }}
        >
          People 
        </NavLink>
      </div>
  );
}
