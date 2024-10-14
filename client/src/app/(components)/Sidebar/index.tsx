"use client";

import React from "react";

import {
  Archive,
  CircleDollarSign,
  Layout,
  Menu,
  SlidersHorizontal,
  User,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/store";
import { setIsSidebarCollapsed } from "@/app/lib/redux/state";
import SidebarLink from "@/app/(components)/Sidebar/side-bar-link";

const sidebarLink = [
  { href: "/dashboard", icon: Layout, label: "Dashboard" },
  { href: "/inventory", icon: Archive, label: "Inventory" },
  { href: "/users", icon: User, label: "Users" },
  { href: "/settings", icon: SlidersHorizontal, label: "Settings" },
  { href: "/expenses", icon: CircleDollarSign, label: "Expenses" },
];

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col  bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40
  ${isSidebarCollapsed ? "sidebar-collapsed" : "sidebar-expanded"}
  `;

  return (
    <div className={sidebarClassNames}>
      <div className="flex items-center justify-between gap-3 pt-8 md:justify-normal">
        <div>logo</div>
        <h1
          className={`${isSidebarCollapsed ? "hidden" : "block"} text-2xl font-extrabold`}
        >
          DASH BOARD
        </h1>
        <button
          className="rounded-full bg-gray-100 px-3 py-3 hover:bg-blue-100 md:hidden"
          onClick={toggleSidebar}
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-8 flex-grow">
        {sidebarLink.map((link) => (
          <SidebarLink
            key={link.href}
            href={link.href}
            icon={link.icon}
            label={link.label}
            isCollapsed={isSidebarCollapsed}
          />
        ))}
      </div>

      <div>
        <p className="text-center text-xs text-gray-500">&copy; roberto</p>
      </div>
    </div>
  );
};

export default Sidebar;
