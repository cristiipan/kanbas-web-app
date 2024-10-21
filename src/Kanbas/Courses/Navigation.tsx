import { NavLink, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "People"];
  const { cid } = useParams();
  const { pathname } = useLocation();

  // 检查 cid 是否存在
  if (!cid) {
    return <div>Loading course information...</div>;
  }

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const to = `/Kanbas/Courses/${cid}/${link}`;  // 生成动态链接路径
        const isActive = pathname.includes(link);    // 检查当前路径是否匹配

        return (
          <NavLink
            key={link}
            to={to}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}
            style={{ marginBottom: '30px' }}
          >
            {link} 
          </NavLink>
        );
      })}
    </div>
  );
}
