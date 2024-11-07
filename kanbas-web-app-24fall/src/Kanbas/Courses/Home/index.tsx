import React from "react";
import Modules from "../Modules";
import CourseStatus from "./Status";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  // 使用 useSelector 获取 modules 状态
  const modules = useSelector((state: any) => state.modulesReducer.modules);

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
