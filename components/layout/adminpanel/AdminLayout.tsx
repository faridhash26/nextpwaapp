import React, { FC } from "react";

import Header from "./Header";
import SideBar from "./SideBar";

interface AdminLayoutProps {
  children: React.ReactNode;
}
const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar />
      {children}
    </>
  );
};

export default AdminLayout;
