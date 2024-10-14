import { Link, useParams } from "react-router-dom";
import CoursesNavigation from '../Navigation';
import './Assignments.css'

export default function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();

  return (
    <div className="d-flex">
      <div style={{ width: '200px' }}>
        <CoursesNavigation />
      </div>

      <div id="wd-assignments-editor" className="container mt-4">
        {/* Breadcrumb Navigate */}
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
              Assignment {assignmentId}
            </li>
          </ol>
        </nav>


      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control"
          value={`Assignment ${assignmentId}`}
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <div className="form-control p-3" style={{ height: 'auto', whiteSpace: 'pre-line' }}>
          The assignment is <a href="https://example.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(209, 6, 6, 0.77)', textDecoration: 'none' }}>available online</a>.
          
          <br /><br />
          Submit a link to the landing page of your Web application running on Netlify.

          <br /><br />
          The landing page should include the following:
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the Kanbas application</li>
            <li>Links to all relevant source code repositories</li>
          </ul>

          The Kanbas application should include a link to navigate back to the landing page.
        </div>
      </div>


        {/* Points */}
        <div className="row mb-3">
          <div className="col-sm-12 d-flex justify-content-end align-items-center">
            <label htmlFor="wd-points" className="form-label me-2 mb-0">Points</label>
            <input 
              id="wd-ppoints" 
              type="number" 
              value={100}
              className="form-control" 
              style={{ maxWidth: '480px' }} 
            />
          </div>
        </div>

        {/* Assignment Group */}
        <div className="row mb-3">
          <div className="col-sm-12 d-flex justify-content-end align-items-center">
            <label htmlFor="wd-group" className="form-label me-2 mb-0">Assignment Group</label>
            <select id="wd-group" className="form-select" style={{ maxWidth: '480px' }}>
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </select>
          </div>
        </div>

        {/* Display Grade as */}
        <div className="row mb-3">
          <div className="col-sm-12 d-flex justify-content-end align-items-center">
            <label htmlFor="wd-group" className="form-label me-2 mb-0">Display Grade as</label>
            <select id="wd-display-grade-as" className="form-select" style={{ maxWidth: '480px' }}>
              <option>Percentage</option>
              <option>Points</option>
              <option>Letter Grade</option>
            </select>
          </div>
        </div>

        {/* Submission Type */}
        <div className="row mb-3">
        <div className="col-sm-12 d-flex justify-content-end align-items-start">
          <label htmlFor="wd-group" className="form-label me-2 mb-0">Submission Type</label>

          <div className="d-flex justify-content-end" style={{ width: '480px' }}>
            <div className="border p-3 rounded w-100">
              <select id="wd-submission-type" className="form-select mb-3" style={{ width: '100%' }}>
                <option>Online</option>
                <option>On Paper</option>
              </select>

              <div className="row">
                <label className="form-label fw-bold">Online Entry Options</label>
                <div className="form-check mb-2 ms-3">
                  <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                  <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <div className="form-check mb-2 ms-3">
                  <input className="form-check-input" type="checkbox" id="wd-website-url" defaultChecked />
                  <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                </div>
                <div className="form-check mb-2 ms-3">
                  <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                  <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                </div>
                <div className="form-check mb-2 ms-3">
                  <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                  <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                </div>
                <div className="form-check mb-2 ms-3">
                  <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                  <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
                </div>
              </div>
            </div>
          </div>
        </div></div>

        {/* Assign to */}
        <div className="row mb-3">
          {/* Assign */}
          <div className="col-sm-3 d-flex justify-content-end align-items-start pe-0">
            <label htmlFor="wd-assign-to" className="form-label mb-0">Assign</label>
          </div>

          <div className="col-sm-9">
            <div className="border p-3 rounded" style={{ maxWidth: '480px' }}>
              {/* Assign to */}
              <div className="mb-3">
                <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                <input id="wd-assign-to" value="Everyone" className="form-control" />
              </div>

              {/* Due Date */}
              <div className="mb-3">
                <label htmlFor="wd-due-date" className="form-label">Due</label>
                <input id="wd-due-date" type="datetime-local" value="2024-05-13T23:59" className="form-control" />
              </div>

              {/* Available From and Until */}
              <div className="row mb-3">
                <div className="col-sm-6">
                  <label htmlFor="wd-available-from" className="form-label">Available from</label>
                  <input id="wd-available-from" type="datetime-local" value="2024-05-06T00:00" className="form-control" />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="wd-available-until" className="form-label">Until</label>
                  <input id="wd-available-until" type="datetime-local" value="2024-05-20T00:00" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-secondary me-2">Cancel</button>
          <button className="btn custom-save-btn">Save</button>
        </div>

      </div>
    </div>
  );
}