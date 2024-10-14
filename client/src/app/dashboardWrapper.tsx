"use client";

import React, { useEffect } from "react";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
import StoreProvider from "@/app/lib/redux/store-provider";
import { useAppSelector } from "@/app/lib/redux/store";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  return (
    <div
      className={`${isDarkMode ? "dark" : "light"}flex min-h-screen w-full bg-gray-50 text-gray-900 dark`}
    >
      <Sidebar />
      <main
        className={`flex h-full w-full flex-col bg-gray-50 px-9 py-7 ${isSidebarCollapsed ? "md:pl-42" : "md:pl-72"}`}
      >
        {children}
        <Navbar />
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
