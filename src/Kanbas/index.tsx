import { Routes, Route, Navigate, Link } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import Assignments from "./Courses/Assignments";
import AssignmentEditor from "./Courses/Assignments/Editor";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Labs from "../Labs";
import { FaAlignJustify } from 'react-icons/fa';

export default function Kanbas() {
    return (
      <div id="wd-kanbas" className="d-flex">
              <KanbasNavigation />
            <div className="wd-main-content-offset p-3">
              <Routes>
                <Route path="/" element={<Navigate to="/Kanbas/Dashboard" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Courses/:cid/*" element={<Courses />} />
                <Route path="/Calendar" element={<h1>Calendar</h1>} />
                <Route path="/Inbox" element={<h1>Inbox</h1>} />
                <Route path="/Courses/:courseId/Assignments/:assignmentId" element={<AssignmentEditor />} />
                <Route path="/Courses/:courseId/Assignments" element={<Assignments />} />
                <Route path="/Labs" element={<Labs />} />
              </Routes>

              <div className="text-center mt-5">
                <Link to="/Labs" className="btn btn-primary mb-3">Go to Labs</Link>
              </div>
            </div>
      </div>
  );}
  
