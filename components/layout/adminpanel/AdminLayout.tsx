import React, { FC } from "react";
import { useSelector } from "react-redux";

import Header from "./Header";
import SideBar from "./SideBar";
import SideBarInfo from "./SideBarInfo";

interface UserSettings {}

interface AdminLayoutProps {
  children: React.ReactNode;
  userSettings: UserSettings;
}
const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="dark flex w-full h-full dark:bg-maindark">
      <SideBarInfo />
      <div className="flex flex-col w-full h-full">
        <Header />
        {children}
      </div>
      <SideBar />
    </div>
  );
};

export default AdminLayout;
