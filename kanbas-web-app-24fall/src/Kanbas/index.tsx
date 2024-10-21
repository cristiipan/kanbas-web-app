import { HashRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import Assignments from "./Courses/Assignments";
import AssignmentEditor from "./Courses/Assignments/Editor";
import Home from "./Courses/Home";
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
                <Route path="/" element={<Navigate to="Account" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Courses/:cid/*" element={<Courses />} />
                <Route path="/Calendar" element={<h1>Calendar</h1>} />
                <Route path="/Inbox" element={<h1>Inbox</h1>} />
                <Route path="/Kanbas/Courses/:cid/Home" element={<Home />} />
                <Route path="/Kanbas/Courses/:cid/Assignments" element={<Assignments />} />
                <Route path="/Kanbas/Courses/:cid/Assignments/:assignmentId" element={<AssignmentEditor />} />
                <Route path="/Labs" element={<Labs />} />
              </Routes>
            </div>
      </div>
  );}
  