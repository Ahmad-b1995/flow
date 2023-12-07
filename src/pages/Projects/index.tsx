import React from "react";
import { FaPlus } from "react-icons/fa6";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
      <div className="card bg-gray-100 h-36 w-64 rounded-md flex items-center justify-center">
      <FaPlus size={25} />
      </div>
    </div>
  );
}
