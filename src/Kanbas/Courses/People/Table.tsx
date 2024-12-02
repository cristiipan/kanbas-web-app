import React from "react";
import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../Database";

export default function PeopleTable() {
  const { cid } = useParams(); // Get the course ID from the URL
  const { users, enrollments } = db;

  // Filter users based on their enrollment in the current course
  const enrolledUsers = users.filter((usr) =>
    enrollments.some((enrollment) => enrollment.user === usr._id && enrollment.course === cid)
  );

  return (
    <div id="wd-people-table" className="container mt-4 p-3 bg-light rounded shadow-sm">
      <h3>People in Course {cid}</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolledUsers.length > 0 ? (
            enrolledUsers.map((user) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center">
                No users enrolled in this course.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
