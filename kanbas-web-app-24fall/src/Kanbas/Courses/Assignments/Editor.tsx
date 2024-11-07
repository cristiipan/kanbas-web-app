import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { assignments as dbAssignments } from '../../Database';
import './Assignments.css';
import './Editor.css';
import * as db from "../../Database";

interface Assignment {
  _id: string;
  title: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
  course?: string;
}

export default function AssignmentEditor() {
  const { cid, assignmentId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const course = db.courses.find((c) => c._id === cid);

  const [assignment, setAssignment] = useState<Assignment>({
    _id: assignmentId || new Date().getTime().toString(),
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
    course: cid || "",
  });

  useEffect(() => {
    if (assignmentId && cid) {
      const selectedAssignment = dbAssignments.find(
        (a) => a._id === assignmentId && a.course === cid
      );
      if (selectedAssignment) {
        setAssignment(selectedAssignment);
      }
    }
  }, [assignmentId, cid]);

  // 如果是学生用户，只显示作业内容
  if (currentUser?.role === "STUDENT") {
    return (
      <div className="container mt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={`/Kanbas/Courses/${cid}`} className="breadcrumb-link">
                {course?.name || `Course ${cid}`}
              </Link>
            </li>
            <li className="breadcrumb-item">
              <span className="breadcrumb-separator">/</span>
              <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="breadcrumb-link">
                Assignments
              </Link>
            </li>
            <li className="breadcrumb-item">
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-link">
                {assignment.title}
              </span>
            </li>
          </ol>
        </nav>

        <div className="p-4 bg-white rounded shadow-sm">
          <h2 className="mb-3">{assignment.title}</h2>
          <div className="mb-4">
            <p style={{ whiteSpace: 'pre-line' }}>{assignment.description}</p>
          </div>
          <div className="assignment-details">
            <p><strong>Points:</strong> {assignment.points}</p>
            <p><strong>Due Date:</strong> {assignment.dueDate || "Not set"}</p>
            <p><strong>Available From:</strong> {assignment.availableFrom || "Not set"}</p>
          </div>
        </div>
      </div>
    );
  }

  // 如果不是教师用户，重定向到作业列表页面
  if (currentUser?.role !== "FACULTY") {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
    return null;
  }

  // 以下是教师用户可以看到的编辑界面
  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!cid) {
      console.error("No course ID available");
      return;
    }
    
    if (assignmentId) {
      dispatch(updateAssignment({ ...assignment, course: cid }));
    } else {
      dispatch(addAssignment({ ...assignment, course: cid }));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!cid) {
      console.error("No course ID available");
      return;
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={`/Kanbas/Courses/${cid}`} className="breadcrumb-link">
              {course?.name || `Course ${cid}`}
            </Link>
          </li>
          <li className="breadcrumb-item">
            <span className="breadcrumb-separator">/</span>
            <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="breadcrumb-link">
              Assignments
            </Link>
          </li>
          <li className="breadcrumb-item active">
            <span className="breadcrumb-separator">/</span>
            <span className="active">
              {assignmentId ? assignment.title || "Edit Assignment" : "New Assignment"}
            </span>
          </li>
        </ol>
      </nav>

      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input
          id="wd-name"
          className="form-control"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea
          id="wd-description"
          className="form-control p-3"
          style={{ height: 'auto', whiteSpace: 'pre-line' }}
          value={assignment.description || ""}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        />
      </div>

      <div className="d-flex align-items-center mb-3">
        <label htmlFor="wd-points" className="form-label me-3" style={{ minWidth: '150px', textAlign: 'right' }}>Points</label>
        <input
          id="wd-points"
          type="number"
          value={assignment.points || 100}
          className="form-control"
          style={{ maxWidth: '800px' }}
          onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
        />
      </div>

      <div className="d-flex align-items-center mb-3">
        <label htmlFor="wd-group" className="form-label me-3" style={{ minWidth: '150px', textAlign: 'right' }}>Assignment Group</label>
        <select id="wd-group" className="form-control" style={{ maxWidth: '800px' }}>
          <option>ASSIGNMENTS</option>
          <option>QUIZZES</option>
          <option>EXAMS</option>
          <option>PROJECT</option>
        </select>
      </div>

      <div className="d-flex align-items-center mb-3">
        <label htmlFor="wd-display-grade-as" className="form-label me-3" style={{ minWidth: '150px', textAlign: 'right' }}>Display Grade As</label>
        <select id="wd-display-grade-as" className="form-control" style={{ maxWidth: '800px' }}>
          <option>Percentage</option>
          <option>Points</option>
          <option>Letter Grade</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
        <input
          id="wd-due-date"
          type="datetime-local"
          className="form-control"
          value={assignment.dueDate || ""}
          onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
        />
      </div>

      <div className="row">
        <div className="col-sm-6">
          <label htmlFor="wd-available-from" className="form-label fw-bold">Available From</label>
          <input
            id="wd-available-from"
            type="datetime-local"
            className="form-control"
            value={assignment.availableFrom || ""}
            onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
          <input
            id="wd-available-until"
            type="datetime-local"
            className="form-control"
            value="2024-05-20T00:00"
          />
        </div>
      </div>

      <div className="d-flex justify-content-end mt-4">
        <button 
          className="btn btn-secondary me-2" 
          onClick={handleCancel}
          type="button"
        >
          Cancel
        </button>
        <button 
          className="custom-save-btn" 
          onClick={handleSave}
          type="button"
        >
          Save
        </button>
      </div>
    </div>
  );
}
