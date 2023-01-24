import { LangDirection } from "enums/langDirection";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { UserSettingModel } from "redux/reducers/userSettings/userSetting.model";

import Header from "./Header";
import SideBar from "./SideBar";
import SideBarInfo from "./SideBarInfo";

interface UseSelectorInterface {
  userSettings: UserSettingModel;
}
interface AdminLayoutProps {
  children: React.ReactNode;
}
const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  const { isDarkMode, lang } = useSelector(
    (state: UseSelectorInterface) => state.userSettings
  );

  return (
    <div
      className={`${
        isDarkMode ? "light" : "dark"
      } flex w-full h-full dark:bg-maindark`}
      dir={LangDirection[lang]}
    >
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
