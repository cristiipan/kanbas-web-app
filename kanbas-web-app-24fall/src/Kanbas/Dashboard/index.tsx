import { Link } from "react-router-dom";
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
          {/* Course1234 */}
          <div className="wd-dashboard-course col" style={{ width: "300px"}}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link  text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg"  width="100%" height={160} alt="React JS"/>
                <div  className="card-body">
                  <h5  className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course1235 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1235/Home">
                <img src="/images/javascript.jpg" className="card-img-top" alt="JavaScript" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1235 JavaScript</h5>
                  <p className="wd-dashboard-course-title card-text">Frontend Development</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
          </div>
          </div>

          {/* Course1236 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1236/Home">
                <img src="/images/python.jpg" className="card-img-top" alt="Python" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1236 Python Programming</h5>
                  <p className="wd-dashboard-course-title card-text">Introduction to Programming</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 1237 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1237/Home">
                <img src="/images/nodejs.jpg" className="card-img-top" alt="Node.js" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1237 Node.js</h5>
                  <p className="wd-dashboard-course-title card-text">Backend Development</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 1238 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1238/Home">
                <img src="/images/css.jpg" className="card-img-top" alt="CSS" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1238 CSS Design</h5>
                  <p className="wd-dashboard-course-title card-text">Web Styling</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 1239 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1239/Home">
                <img src="/images/angular.jpg" className="card-img-top" alt="Angular" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1239 Angular</h5>
                  <p className="wd-dashboard-course-title card-text">Frontend Framework</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 1240 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1240/Home">
                <img src="/images/database.jpg" className="card-img-top" alt="Database Systems" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1240 Database Systems</h5>
                  <p className="wd-dashboard-course-title card-text">Data Storage & Management</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

      </div>
    </div>
  );
}