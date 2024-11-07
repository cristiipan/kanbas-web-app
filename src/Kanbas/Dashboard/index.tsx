import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { enrollCourse, unenrollCourse } from "./reducer";
import * as db from "../Database";
import './Dashboard.css';

interface DashboardProps {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardProps) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.dashboardReducer);

  // 确保 Hooks 调用在组件的最顶部
  const [showAllCourses, setShowAllCourses] = useState(false);

  if (!currentUser) {
    return <div>Please sign in to see your courses.</div>;
  }

  const isFaculty = currentUser.role === "FACULTY";
  const isStudent = currentUser.role === "STUDENT";

  // 定义课程图片
  const customImages: Record<string, string> = {
    RS108: "/images/LOTR.jpg",
    RS109: "/images/Magic.jpg",
    RS119: "/images/AncientChina.jpg",
  };

  // 筛选当前用户报名的课程
  const userCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id &&
        enrollment.course === course._id
    )
  );

  // 点击按钮切换显示所有课程或已报名课程
  const toggleEnrollments = () => {
    setShowAllCourses(!showAllCourses);
  };

  // 确定要显示的课程列表
  const displayedCourses = showAllCourses ? courses : userCourses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={updateCourse}
              disabled={course._id === "0"}
            >
              Update
            </button>
          </h5>
          <div className="mb-3">
            <input
              value={course.name}
              className="form-control mb-2"
              placeholder="Course Name"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <textarea
              value={course.description}
              className="form-control"
              placeholder="Course Description"
              onChange={(e) => setCourse({ ...course, description: e.target.value })}
            />
          </div>
          <hr />
        </>
      )}

      {/* 学生用户特有的 Enrollments 按钮 */}
      {isStudent && (
        <div className="d-flex justify-content-end mb-3">
          <button
            className="btn btn-primary"
            onClick={toggleEnrollments}
          >
            {showAllCourses ? "Show My Enrollments" : "Show All Courses"}
          </button>
        </div>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
        {displayedCourses.map((course) => (
          <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to={
                  isStudent &&
                  !userCourses.some((enrolledCourse) => enrolledCourse._id === course._id)
                    ? `/Kanbas/Dashboard` // 未报名则不允许导航
                    : `/Kanbas/Courses/${course._id}/Home`
                }
              >
                <img
                  src={customImages[course._id] || course.image || "/images/reactjs.jpg"}
                  width="100%"
                  height={160}
                  alt="Course Image"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                  <p
                    className="wd-dashboard-course-title card-text overflow-y-hidden"
                    style={{ maxHeight: 100 }}
                  >
                    {course.description}
                  </p>
                  <button className="btn btn-primary">Go</button>

                  {isFaculty && (
                    <>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                        id="wd-edit-course-click"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                    </>
                  )}

                  {/* 学生角色特有的报名和取消报名按钮 */}
                  {isStudent && (
                    <div className="mt-2">
                      {userCourses.some((enrolledCourse) => enrolledCourse._id === course._id) ? (
                        <button
                          className="btn btn-danger"
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(unenrollCourse({ user: currentUser._id, course: course._id }));
                          }}
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          className="btn btn-success"
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(enrollCourse({ user: currentUser._id, course: course._id }));
                          }}
                        >
                          Enroll
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
