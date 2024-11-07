import React, { useState } from "react";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule } from "./reducer";
import * as db from "../../Database";

export default function Modules() {
    const { cid } = useParams();
    const dispatch = useDispatch();

    // 获取当前模块信息
    const modules = useSelector((state: any) =>
        state.modulesReducer.modules.filter((module: any) => module.course === cid)
    );

    // 获取当前用户信息
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    
    // 模块名称的状态，用于新增或编辑模块
    const [moduleName, setModuleName] = useState<string>("");

    // 添加模块的函数
    const handleAddModule = () => {
        if (!moduleName.trim()) return;
        const newModule = {
            _id: new Date().getTime().toString(),
            name: moduleName,
            course: cid,
            lessons: [],
            editing: false
        };
        dispatch(addModule(newModule));
        setModuleName("");
    };

    // 删除模块的函数
    const handleDeleteModule = (moduleId: string) => {
        dispatch(deleteModule(moduleId));
    };

    // 编辑模块的函数
    const handleEditModule = (moduleId: string) => {
        const module = modules.find((m: any) => m._id === moduleId);
        if (module) {
            dispatch(updateModule({ ...module, editing: true }));
        }
    };

    // 更新模块的函数
    const handleUpdateModule = (module: any) => {
        dispatch(updateModule(module));
    };

    return (
        <div>
            {/* 只有 "FACULTY" 角色的用户可以看到的内容 */}
            {currentUser?.role === "FACULTY" && (
                <>
                    <ModulesControls
                        moduleName={moduleName}
                        setModuleName={setModuleName}
                        addModule={handleAddModule}
                    />
                    <br /><br /><br /><br />
                </>
            )}

            <ul id="wd-modules" className="list-group rounded-0">
                {modules.map((module: any) => (
                    <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                            <div>
                                <BsGripVertical className="me-2 fs-3" />
                                {!module.editing && module.name}
                                {module.editing && (
                                    <input
                                        className="form-control w-50 d-inline-block"
                                        onChange={(e) => handleUpdateModule({ ...module, name: e.target.value })}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                handleUpdateModule({ ...module, editing: false });
                                            }
                                        }}
                                        defaultValue={module.name}
                                    />
                                )}
                            </div>
                            {/* 只有 "FACULTY" 角色的用户可以看到的模块控制按钮 */}
                            {currentUser?.role === "FACULTY" && (
                                <ModuleControlButtons
                                    moduleId={module._id}
                                    deleteModule={handleDeleteModule}
                                    editModule={handleEditModule}
                                />
                            )}
                        </div>
                        {module.lessons && (
                            <ul className="wd-lessons list-group rounded-0">
                                {module.lessons.map((lesson: any) => (
                                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                                        <div>
                                            <BsGripVertical className="me-2 fs-3" />
                                            {lesson.name}
                                        </div>
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
