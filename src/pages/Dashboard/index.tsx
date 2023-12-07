import React from "react";
import {Outlet} from "react-router-dom";
import Sidebar from "../../components/dashboard/sidebar";

export default function Dashboard() {
  return (
    <div className="flex items-start justify-start">
      <Sidebar />
      <main className="p-14">
        <h1 className="font-bold text-xl">Projects</h1>
        <div className="mt-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
