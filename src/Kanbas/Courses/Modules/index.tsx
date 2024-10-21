import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
    const { cid } = useParams();
    const modules = db.modules;

    return (
      <div>
        <ModulesControls /><br /><br /><br /><br />

        {/* Dynamically rendered Modules */}
        <ul id="wd-modules" className="list-group rounded-0">
          {modules
            .filter((module: any) => module.course === cid) // 根据课程 ID 筛选模块
            .map((module: any) => (
              <li key={module.name} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical className="me-2 fs-3" />
                  {module.name} {/* 动态渲染模块名称 */}
                  <ModuleControlButtons />
                </div>
                {/* 动态渲染课程列表 */}
                {module.lessons && (
                  <ul className="wd-lessons list-group rounded-0">
                    {module.lessons.map((lesson: any) => (
                      <li key={lesson.name} className="wd-lesson list-group-item p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        {lesson.name} {/* 动态渲染课程名称 */}
                        <LessonControlButtons />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
          ))}
        </ul>
      </div>
  );
}
  //       <ul id="wd-modules" className="list-group rounded-0">
  //         {/* Week 1 module */}
  //         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
  //           <div className="wd-title p-3 ps-2 bg-secondary">
  //           <BsGripVertical className="me-2 fs-3" />
  //           Week 1
  //           <ModuleControlButtons />
  //           </div>
  //           <ul className="wd-lessons list-group rounded-0">
  //             <li className="wd-lesson list-group-item p-3 ps-1">
  //               <BsGripVertical className="me-2 fs-3" />
  //               LEARNING OBJECTIVES
  //               <LessonControlButtons />
  //             </li>
  //             <li className="wd-lesson list-group-item p-3 ps-1">
  //               <BsGripVertical className="me-2 fs-3" />
  //               Introduction to the course
  //               <LessonControlButtons />
  //             </li>
  //             <li className="wd-lesson list-group-item p-3 ps-1">
  //               <BsGripVertical className="me-2 fs-3" />
  //               Learn what is Web Development
  //               <LessonControlButtons />
  //             </li>
  //             <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
  //             <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
  //           </ul>
  //         </li>

  //         {/* Week 2 module */}
  //         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
  //           <div className="wd-title p-3 ps-2 bg-secondary"> 
  //           <BsGripVertical className="me-2 fs-3" />
  //           Week 2 
  //           <ModuleControlButtons />
  //           </div>
  //           <ul className="wd-lessons list-group rounded-0">
  //             <li className="wd-lesson list-group-item p-3 ps-1">
  //               <BsGripVertical className="me-2 fs-3" />
  //               LEARNING OBJECTIVES
  //               <LessonControlButtons />
  //             </li>
  //             <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
  //             <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
  //           </ul>
  //         </li>
  //       </ul>
  //     </div>
  // );}
  