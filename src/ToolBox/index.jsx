import "./ToolBox.css";
import { FaPencilAlt } from "react-icons/fa";
import { RiText } from "react-icons/ri";
import { TbSlash } from "react-icons/tb";
import { RiRectangleLine as RiRectangleline } from "react-icons/ri";
import { IoEllipseOutline } from "react-icons/io5";
import { GrSelect } from "react-icons/gr";
import { CiEraser } from "react-icons/ci";
import { GiLaserBurst as GilaserBurst } from "react-icons/gi";
import { HiOutlineCursorClick } from "react-icons/hi";

const tools = [
  {
    name: "Pen",
    icon: FaPencilAlt,
    type: 1,
  },
  {
    name: "Text",
    icon: RiText,
    type: 2,
  },
  {
    name: "Line",
    icon: TbSlash,
    type: 4,
  },
  {
    name: "Rectangle",
    icon: RiRectangleline,
    type: 8,
  },
  {
    name: "Ellipse",
    icon: IoEllipseOutline,
    type: 16,
  },
  {
    name: "Select",
    icon: GrSelect,
    type: 32,
  },
  {
    name: "Eraser",
    icon: CiEraser,
    type: 64,
  },
  {
    name: "Laser",
    icon: GilaserBurst,
    type: 128,
  },
  {
    name: "Click",
    icon: HiOutlineCursorClick,
    type: 256,
  },
];

const ToolBox = ({onClick,currentTool}) => {
  return (
    <div id="tool-box">
      <ul className="tools-container">
        {tools.map((tool, index) => (
          <li title={tool.name}  className={`size-40 tool ${currentTool === tool.type && "active" }`}
          onClick={() => onClick(tool)}
          key={index}
          >
            <tool.icon />
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolBox;