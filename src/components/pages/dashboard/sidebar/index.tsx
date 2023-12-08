import React from "react";
import {useLocation} from "react-router-dom";
const menuItems = ["Projects"];

export default function Sidebar() {
  const location = useLocation();
  console.log(location.pathname.slice());

  return (
    <div className="bg-gray-100 border-r-2 h-screen w-64 py-11 px-5">
      <ul>
        {menuItems.map((item) => (
          <li
            className={`
            hover:bg-gray-200 cursor-pointer p-3 rounded-sm
              ${location.pathname.includes(item.toLowerCase()) && "bg-gray-200"}
            `}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
}
