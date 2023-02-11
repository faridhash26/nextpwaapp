import { LangDirection } from "enums/langDirection";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { UserSettingModel } from "redux/reducers/userSettings/userSetting.model";

import Header from "./Header";
import Settings from "./Settings";
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

  const [isSideOpen, setisSideOpen] = useState<boolean>(false);
  const [isInfoSideOpen, setisInfoSideOpen] = useState<boolean>(false);
  const [iseSettingOpen, setiseSettingOpen] = useState<boolean>(false);

  return (
    <div
      className={`${
        isDarkMode ? "light" : "dark"
      } flex w-full h-full dark:bg-maindark transition duration-300 ease-in-out transform sm:duration-500`}
      dir={LangDirection[lang]}
    >
      <SideBar isSideOpen={isSideOpen} setisSideOpen={setisSideOpen} />
      <div className="flex flex-col w-full h-full">
        <Header
          isInfoSideOpen={isInfoSideOpen}
          setisInfoSideOpen={setisInfoSideOpen}
        />
        {children}
      </div>
      <SideBarInfo
        isInfoSideOpen={isInfoSideOpen}
        setisInfoSideOpen={setisInfoSideOpen}
        iseSettingOpen={iseSettingOpen}
        setiseSettingOpen={setiseSettingOpen}
      />
      <Settings
        iseSettingOpen={iseSettingOpen}
        setiseSettingOpen={setiseSettingOpen}
      />
    </div>
  );
};

export default AdminLayout;
