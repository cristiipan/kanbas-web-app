import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './Assignments.css';
import * as db from '../../Database';

interface Assignment {
  _id: string;
  title: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
}

export default function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const [assignment, setAssignment] = useState<Assignment | null>(null);
  
  useEffect(() => {
    console.log("Current courseId:", courseId);
    console.log("Current assignmentId:", assignmentId);

    const selectedAssignment = db.assignments.find(
      (assignment) => assignment._id === assignmentId
    );

    if (selectedAssignment) {
      setAssignment(selectedAssignment);
    }
  }, [assignmentId]);

  if (!assignment) {
    return <div>Loading assignment data...</div>;
  }

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={`/Kanbas/Courses/${courseId}`} className="breadcrumb-link">
              Course {courseId}
            </Link>
            <span className="mx-2">{'>'}</span>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="breadcrumb-link">
              Assignments
            </Link>
            <span className="mx-2">{'>'}</span>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {assignment.title}
          </li>
        </ol>
      </nav>

      {/* Title */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control"
          value={assignment.title}
          readOnly
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <div className="form-control p-3" style={{ height: 'auto', whiteSpace: 'pre-line' }}>
          {assignment.description || "No description available for this assignment."}
        </div>
      </div>

      {/* Points */}
      <div className="d-flex align-items-center mb-3">
        <label htmlFor="wd-points" className="form-label me-3" style={{ minWidth: '150px', textAlign: 'right' }}>Points</label>
        <input 
          id="wd-points" 
          type="number" 
          value={assignment.points || 100}
          className="form-control"
          style={{ maxWidth: '800px' }}
          readOnly
        />
      </div>

      {/* Assignment Group */}
      <div className="d-flex align-items-center mb-3">
        <label htmlFor="wd-group" className="form-label me-3" style={{ minWidth: '150px', textAlign: 'right' }}>Assignment Group</label>
        <select id="wd-group" className="form-control" style={{ maxWidth: '800px' }}>
          <option>ASSIGNMENTS</option>
          <option>QUIZZES</option>
          <option>EXAMS</option>
          <option>PROJECT</option>
        </select>
      </div>

      {/* Display Grade As */}
      <div className="d-flex align-items-center mb-3">
        <label htmlFor="wd-display-grade-as" className="form-label me-3" style={{ minWidth: '150px', textAlign: 'right' }}>Display Grade As</label>
        <select id="wd-display-grade-as" className="form-control" style={{ maxWidth: '800px' }}>
          <option>Percentage</option>
          <option>Points</option>
          <option>Letter Grade</option>
        </select>
      </div>

      {/* Submission Type & Online Entry Options */}
      <div className="d-flex align-items-start mb-3">
        <label htmlFor="wd-submission-type" className="form-label me-3" style={{ minWidth: '150px', textAlign: 'right' }}>Submission Type</label>
        <div className="border p-3 rounded" style={{ maxWidth: '800px', width: '100%' }}>
          <select id="wd-submission-type" className="form-control mb-3">
            <option>Online</option>
            <option>On Paper</option>
          </select>

          <div className="ms-3">
            <label className="form-label fw-bold">Online Entry Options</label>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="wd-text-entry" />
              <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="wd-website-url" defaultChecked />
              <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
              <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="wd-file-upload" />
              <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
            </div>
          </div>
        </div>
      </div>


      {/* Assign to & Dues */}
      <div className="d-flex align-items-start mb-3">
        <label htmlFor="wd-assign-to" className="form-label me-3" style={{ minWidth: '150px', textAlign: 'right' }}>Assign</label>
        <div className="border p-3 rounded" style={{ maxWidth: '800px', width: '100%' }}>
          {/* Assign to */}
          <div className="mb-3">
            <label className="form-label fw-bold">Assign to</label>
            <select id="wd-assign-to" className="form-control">
              <option>Everyone</option>
              <option>Section 1</option>
              <option>Section 2</option>
            </select>
          </div>

        {/* Due Date */}
        <div className="mb-3">
          <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
          <input
            id="wd-due-date"
            type="datetime-local"
            className="form-control"
            value={assignment.dueDate || "2024-05-13T23:59"}
            readOnly
          />
        </div>
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="wd-available-from" className="form-label fw-bold">Available From</label>
            <input
              id="wd-available-from"
              type="datetime-local"
              className="form-control"
              value={assignment.availableFrom || "2024-05-06T00:00"}
              readOnly
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
            <input
              id="wd-available-until"
              type="datetime-local"
              className="form-control"
              value="2024-05-20T00:00"
              readOnly
            />
          </div>
        </div>
      </div></div>

      {/* Button */}
      <div className="d-flex justify-content-end mt-4">
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
          <button className="custom-save-btn">Save</button>
      </div>
    </div>
  );
}
