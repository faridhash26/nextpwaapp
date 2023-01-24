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
  const { isDarkMode } = useSelector((state: any) => state.userSettings);

  return (
    // <div className={`${isDarkMode? "light": "dark"} flex w-full h-full dark:bg-maindark`}>
    <div className={`$ dark flex w-full h-full dark:bg-maindark`}>
      <SideBar />
      <div className="flex flex-col w-full h-full">
        <Header />
        {children}
      </div>
      <SideBarInfo />
    </div>
  );
};

export default AdminLayout;
