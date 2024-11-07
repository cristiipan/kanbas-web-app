import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaTrash, FaPencilAlt } from "react-icons/fa"; // 使用 FaPencilAlt 替代 FaPencil
import GreenCheckmark from "./GreenCheckmark";

interface ModuleControlButtonsProps {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}

export default function ModuleControlButtons({ moduleId, deleteModule, editModule }: ModuleControlButtonsProps) {
  return (
    <div className="float-end">
      {/* 编辑图标 */}
      <FaPencilAlt onClick={() => editModule(moduleId)} className="text-primary me-3" />
      {/* 删除图标 */}
      <FaTrash onClick={() => deleteModule(moduleId)} className="text-danger me-2 mb-1" />
      <GreenCheckmark />
      <BsPlus className="fs-4 me-3" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
