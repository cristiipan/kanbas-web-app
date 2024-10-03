import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import Assignments from "./Courses/Assignments";
import AssignmentEditor from "./Courses/Assignments/Editor";

export default function Kanbas() {
    return (
      <div id="wd-kanbas">
        <table>
          <tr>
            <td valign="top">
              <KanbasNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Courses/:cid/*" element={<Courses />} />
                <Route path="/Calendar" element={<h1>Calendar</h1>} />
                <Route path="/Inbox" element={<h1>Inbox</h1>} />
                <Route path="/Courses/:courseId/Assignments/:assignmentId" element={<AssignmentEditor />} />
                <Route path="/Courses/:courseId/Assignments" element={<Assignments />} />
              </Routes>
            </td>
          </tr>
        </table>
      </div>
  );}
  