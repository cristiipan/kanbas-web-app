import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaSearch, FaPlus, FaEllipsisV } from "react-icons/fa";
import { BsStack, BsCheckCircle, BsThreeDotsVertical } from "react-icons/bs";
import { Badge, Dropdown } from "react-bootstrap";
import CoursesNavigation from "../Navigation";
import * as db from "../../Database";
import './Assignments.css';

interface Assignment {
  _id: string;
  title: string;
  course: string;
}

export default function Assignments() {
  const { cid } = useParams();  // Retrieve course ID from the URL
  const navigate = useNavigate();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [searchTerm, setSearchTerm] = useState("");  // Search term
  const [selectedAssignment, setSelectedAssignment] = useState<string>("Assignments");  // Dropdown value

  useEffect(() => {
    console.log("Current cid:", cid); // Log the current course ID

    if (!cid) {
      const firstCourse = db.assignments[0]?.course;
      if (firstCourse) {
        navigate(`/Kanbas/Courses/${firstCourse}/Assignments`);
      } else {
        console.error("No courses found in the database");
      }
    } else {
      const filteredAssignments = db.assignments.filter(
        (assignment: Assignment) => assignment.course === cid
      );
      console.log("Filtered Assignments:", filteredAssignments); // Log filtered assignments
      setAssignments(filteredAssignments);
    }
  }, [cid, navigate]);

  const handleSelect = (assignmentTitle: string | null) => {
    if (assignmentTitle) {
      setSelectedAssignment(assignmentTitle);
    }
  };

  return (
    <div id="wd-assignments" className="container mt-4 p-3 bg-light rounded shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <FaSearch className="me-2" />
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
            style={{ width: "300px" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-outline-secondary me-2">
            <FaPlus className="me-2" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <FaPlus className="me-2" /> Assignment
          </button>
        </div>
      </div>

      {/* Assignments Dropdown */}
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="light" className="d-flex align-items-center border-0">
            <FaEllipsisV className="me-2" />
            <span className="fw-bold fs-5">{selectedAssignment}</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {assignments.map((assignment) => (
              <Dropdown.Item key={assignment._id} eventKey={assignment.title}>
                {assignment.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <div className="d-flex align-items-center">
          <Badge pill bg="light" text="dark" className="me-2 border fs-5">
            40% of Total
          </Badge>
          <div className="d-flex align-items-center">
            <FaPlus className="fs-5 me-2" style={{ cursor: 'pointer' }} />
            <BsThreeDotsVertical className="fs-5" style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>

      {assignments.length > 0 ? (
        <ul id="wd-assignment-list" className="list-group mt-4">
          {assignments.map((assignment) => (
            <li
              key={assignment._id}
              className="list-group-item d-flex align-items-center border-0 p-3 mb-3 shadow-sm bg-white"
            >
              <div className="border-start border-success border-4 me-3" style={{ height: "80px" }}></div>
              <div className="me-3">
                <BsStack className="text-success fs-3" />
              </div>
              <div>
                <a
                  className="wd-assignment-link text-decoration-none text-dark fw-bold fs-5"
                  href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </a>
                <p className="mb-0 text-muted">
                  Multiple Modules | <strong>Not available until</strong> TBD | <strong>Due</strong> TBD | 100pts
                </p>
              </div>
              <div className="ms-auto">
                <BsCheckCircle className="text-success fs-4" />
              </div>
              <div className="ms-3">
                <BsThreeDotsVertical />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          {cid ? (
            `No assignments found for this course (cid: ${cid}).`
          ) : (
            "No course selected. Please choose a course."
          )}
          <br />
          Total assignments in database: {db.assignments.length}
        </div>
      )}
    </div>
  );
}
