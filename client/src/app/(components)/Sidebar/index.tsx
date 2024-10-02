"use client";

import React from "react";

import { Menu } from "lucide-react";

const Sidebar = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-3 pt-8 md:justify-normal">
        <div>logo</div>
        <h1 className="text-2xl font-extrabold">DASH BOARD</h1>
        <button
          className="rounded-full bg-gray-100 px-3 py-3 hover:bg-blue-100 md:hidden"
          onClick={() => {}}
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-8 flex-grow"></div>

      <div>
        <p className="text-center text-xs text-gray-500">&copy; roberto</p>
      </div>
    </div>
  );
};

export default Sidebar;
