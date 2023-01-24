import React, { FC } from "react";

import Header from "./Header";
import SideBar from "./SideBar";
import SideBarInfo from "./SideBarInfo";

interface AdminLayoutProps {
  children: React.ReactNode;
}
const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full h-full">
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
