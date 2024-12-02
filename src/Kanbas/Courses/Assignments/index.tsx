import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSearch, FaPlus, FaEllipsisV, FaTrash } from "react-icons/fa";
import { BsStack, BsCheckCircle, BsThreeDotsVertical } from "react-icons/bs";
import { Badge, Dropdown, Modal, Button } from "react-bootstrap";
import * as db from "../../Database";
import { deleteAssignment } from "./reducer"; // 导入删除作业的 action
import './Assignments.css';

interface Assignment {
  _id: string;
  title: string;
  course: string;
}

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAssignment, setSelectedAssignment] = useState<string>("Assignments");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<Assignment | null>(null);

  // 获取当前用户信息
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const allAssignments = useSelector((state: any) => state.assignmentsReducer.assignments);

  useEffect(() => {
    if (!cid) {
      const firstCourse = allAssignments[0]?.course;
      if (firstCourse) {
        navigate(`/Kanbas/Courses/${firstCourse}/Assignments`);
      } else {
        console.error("No courses found in the database");
      }
    } else {
      const filteredAssignments = allAssignments.filter(
        (assignment: Assignment) => assignment.course === cid
      );
      setAssignments(filteredAssignments);
    }
  }, [cid, navigate, allAssignments]);

  const handleSelect = (assignmentTitle: string | null) => {
    if (assignmentTitle) {
      setSelectedAssignment(assignmentTitle);
    }
  };

  // 删除确认对话框
  const handleDeleteClick = (assignment: Assignment) => {
    setAssignmentToDelete(assignment);
    setShowModal(true);
  };

  // 确认删除
  const handleConfirmDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete._id)); // 调用 action 删除作业
      setShowModal(false);
      setAssignmentToDelete(null);
    }
  };

  // 取消删除
  const handleCancelDelete = () => {
    setShowModal(false);
    setAssignmentToDelete(null);
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

        {/* 只有 "FACULTY" 角色的用户可以看到添加作业和分组按钮 */}
        {currentUser?.role === "FACULTY" && (
          <div>
            <button id="wd-add-assignment-group" className="btn btn-outline-secondary me-2">
              <FaPlus className="me-2" /> Group
            </button>
            <Link
              to={`/Kanbas/Courses/${cid}/Assignments/Editor`}
              className="btn btn-primary"
            >
              Add Assignment
            </Link>
          </div>
        )}
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
                <Link
                  to={`/Kanbas/Courses/${cid}/Assignments/Editor/${assignment._id}`}
                  className="assignment-name"
                >
                  {assignment.title}
                </Link>
                <p className="mb-0 text-muted">
                  Multiple Modules | <strong>Not available until</strong> TBD | <strong>Due</strong> TBD | 100pts
                </p>
              </div>

              {/* 只有 "FACULTY" 角色的用户可以看到右侧的编辑和删除按钮 */}
              {currentUser?.role === "FACULTY" && (
                <>
                  <div className="ms-auto">
                    <BsCheckCircle className="text-success fs-4" />
                  </div>
                  <div className="ms-3">
                    <FaTrash
                      className="text-danger fs-4"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDeleteClick(assignment)}
                    />
                  </div>
                </>
              )}
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
          Total assignments in database: {allAssignments.length}
        </div>
      )}

      {/* 确认删除的对话框 */}
      <Modal show={showModal} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
