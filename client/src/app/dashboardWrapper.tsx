import React from "react";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`flex min-h-screen w-full bg-gray-50 text-gray-900 dark`}>
      <Sidebar />
      <main
        className={`flex h-full w-full flex-col bg-gray-50 px-9 py-7 md:pl-72`}
      >
        {children}
        <Navbar />
      </main>
    </div>
  );
};

export default DashboardWrapper;
