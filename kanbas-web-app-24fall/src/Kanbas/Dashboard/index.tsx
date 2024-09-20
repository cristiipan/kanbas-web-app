import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1235/Home">
            <img src="/images/javascript.jpg" width={200} />
            <div>
              <h5>CS1235 JavaScript</h5>
              <p className="wd-dashboard-course-title">Frontend Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1236/Home">
            <img src="/images/python.jpg" width={200} />
            <div>
              <h5>CS1236 Python Programming</h5>
              <p className="wd-dashboard-course-title">Introduction to Programming</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1237/Home">
            <img src="/images/nodejs.jpg" width={200} />
            <div>
              <h5>CS1237 Node.js</h5>
              <p className="wd-dashboard-course-title">Backend Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1238/Home">
            <img src="/images/css.jpg" width={200} />
            <div>
              <h5>CS1238 CSS Design</h5>
              <p className="wd-dashboard-course-title">Web Styling</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1239/Home">
            <img src="/images/angular.jpg" width={200} />
            <div>
              <h5>CS1239 Angular</h5>
              <p className="wd-dashboard-course-title">Frontend Framework</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1240/Home">
            <img src="/images/database.jpg" width={200} />
            <div>
              <h5>CS1240 Database Systems</h5>
              <p className="wd-dashboard-course-title">Data Storage & Management</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}