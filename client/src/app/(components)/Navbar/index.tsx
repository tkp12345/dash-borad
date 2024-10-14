"use client";

import { Bell, Menu, Sun } from "lucide-react";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/store";
import { setIsSidebarCollapsed } from "@/app/lib/redux/state";
const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const toggleNavbar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  return (
    <div className="mb-7 flex w-full items-center justify-between">
      <div className="flex items-center justify-between gap-5">
        <button
          className="bg-grey-100 rounded-full px-3 py-3 hover:bg-blue-100"
          onClick={toggleNavbar}
        >
          <Menu className="h-4 w-4" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="search"
            className="w-50 focus:outline-non rounded-lg border-2 border-gray-300 bg-white py-2 pl-10 pr-4 focus:border-blue-500 md:w-80"
          />

          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5">
        <div className="hidden items-center justify-between gap-5 md:flex">
          <button onClick={() => {}}>
            <Sun className="cursor-pointer text-gray-500" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
