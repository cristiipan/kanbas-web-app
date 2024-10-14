import Modules from "../Modules";
import CourseStatus from "./Status";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAlignJustify } from 'react-icons/fa';
export default function Home() {
  return (
      <div className="d-flex" id="wd-home">
        <div className="flex-fill">
          <Modules />
        </div>
        <div className="d-none d-md-block">
          <CourseStatus />
        </div>
      </div>
  );
}
