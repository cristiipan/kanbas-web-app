import { FaSearch, FaPlus } from "react-icons/fa";
import { BsThreeDotsVertical, BsCheckCircle, BsStack } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton, Badge } from 'react-bootstrap';
import './Assignments.css';
import CoursesNavigation from "../Navigation";

export default function Assignments() {
  return (
    <div className="d-flex">
      <div style={{ width: '200px' }}>
        <CoursesNavigation />
      </div>

    <div id="wd-assignments" className="container mt-4 p-3 bg-light rounded shadow-sm">
      {/* Assignments header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <FaSearch className="me-2" />
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
            style={{ width: '300px' }}
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

      {/* Assignment list header */}
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
        {/* ASSIGNMENTS Dropdown */}
          <Dropdown>
            <Dropdown.Toggle id="wd-assignments-dropdown" className="custom-dropdown-toggle fw-bold fs-4 border-0">
              ASSIGNMENTS
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="custom-dropdown-item" href="#/Kanbas/Courses/1234/Assignments/123">A1 - ENV + HTML</Dropdown.Item>
              <Dropdown.Item className="custom-dropdown-item" href="#/Kanbas/Courses/1234/Assignments/124">A2 - CSS + BOOTSTRAP</Dropdown.Item>
              <Dropdown.Item className="custom-dropdown-item" href="#/Kanbas/Courses/1234/Assignments/125">A3 - JavaScript + REACT</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        
        {/* Right side with 40% of Total and more options */}
        <div className="d-flex align-items-center">
          {/* Badge to encapsulate 40% of Total */}
          <Badge pill bg="light" text="dark" className="me-2 border fs-5">
            40% of Total
          </Badge>

          {/* Plus icon */}
          <FaPlus className="fs-6 me-2" />

          {/* Three dots for more options */}
          <BsThreeDotsVertical />
        </div>
      </div>

      {/* Assignment list */}
      <ul id="wd-assignment-list" className="list-group mt-4">
        {/* Assignment 1 */}
        <li className="list-group-item d-flex align-items-center border-0 p-3 mb-3 shadow-sm bg-white">
          <div className="border-start border-success border-4 me-3" style={{ height: "80px" }}></div>
          <div className="me-3">
            <BsStack className="text-success fs-3" />
          </div>
          <div>
            <a
              className="wd-assignment-link text-decoration-none text-dark fw-bold fs-5"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
              A1
            </a>
            <p className="mb-0 text-muted">
              Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100pts
            </p>
          </div>
          <div className="ms-auto">
            <BsCheckCircle className="text-success fs-4" />
          </div>
          <div className="ms-3">
            <BsThreeDotsVertical />
          </div>
        </li>

        {/* Assignment 2 */}
        <li className="list-group-item d-flex align-items-center border-0 p-3 mb-3 shadow-sm bg-white">
          <div className="border-start border-success border-4 me-3" style={{ height: "80px" }}></div>
          <div className="me-3">
            <BsStack className="text-success fs-3" />
          </div>
          <div>
            <a
              className="wd-assignment-link text-decoration-none text-dark fw-bold fs-5"
              href="#/Kanbas/Courses/1234/Assignments/124"
            >
              A2
            </a>
            <p className="mb-0 text-muted">
              Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100pts
            </p>
          </div>
          <div className="ms-auto">
            <BsCheckCircle className="text-success fs-4" />
          </div>
          <div className="ms-3">
            <BsThreeDotsVertical />
          </div>
        </li>

        {/* Assignment 3 */}
        <li className="list-group-item d-flex align-items-center border-0 p-3 mb-3 shadow-sm bg-white">
          <div className="border-start border-success border-4 me-3" style={{ height: "80px" }}></div>
          <div className="me-3">
            <BsStack className="text-success fs-3" />
          </div>
          <div>
            <a
              className="wd-assignment-link text-decoration-none text-dark fw-bold fs-5"
              href="#/Kanbas/Courses/1234/Assignments/125"
            >
              A3
            </a>
            <p className="mb-0 text-muted">
              Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 100pts
            </p>
          </div>
          <div className="ms-auto">
            <BsCheckCircle className="text-success fs-4" />
          </div>
          <div className="ms-3">
            <BsThreeDotsVertical />
          </div>
        </li>
      </ul>
    </div></div>
  );
}