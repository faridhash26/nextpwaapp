import React, { FC } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CiLight, CiDark } from "react-icons/ci";
import { GoSettings } from "react-icons/go";

interface SettingsProps {
  iseSettingOpen: boolean;
  setiseSettingOpen: (isOpen: boolean) => void;
}
const Settings: FC<SettingsProps> = ({ iseSettingOpen, setiseSettingOpen }) => {
  return (
    <section
      className={`${
        iseSettingOpen ? "sideOpen " : "sideClose"
      } fixed  inset-y-0 right-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none`}
    >
      <div className="absolute left-0 p-2 transform -translate-x-full">
        <button
          className="p-2 text-white rounded-md focus:outline-none focus:ring"
          onClick={() => setiseSettingOpen(false)}
        >
          <AiOutlineCloseCircle />
        </button>
      </div>

      <div className="flex flex-col h-screen">
        <div className="flex flex-col items-center justify-center flex-shrink-0 px-4 py-8 space-y-4 border-b dark:border-indigo-700">
          <span
            aria-hidden="true"
            className="text-gray-500 dark:text-indigo-600"
          >
            <GoSettings size={30} />
          </span>
          <h2
            id="settinsPanelLabel"
            className="text-xl font-medium text-gray-500 dark:text-light"
          >
            Settings
          </h2>
        </div>

        <div className="flex-1 overflow-hidden hover:overflow-y-auto">
          <div className="p-4 space-y-4 md:p-8">
            <h6 className="text-lg font-medium text-gray-400 dark:text-light">
              Mode
            </h6>
            <div className="flex items-center space-x-8">
              <button
                className="flex items-center justify-center px-4 py-2 space-x-4 transition-colors border rounded-md hover:text-gray-900 hover:border-gray-900 dark:border-indigo-600 dark:hover:text-indigo-100 dark:hover:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400 dark:focus:ring-indigo-700"
                // :className="{ 'border-gray-900 text-gray-900 dark:border-indigo-500 dark:text-indigo-100': !isDark, 'text-gray-500 dark:text-indigo-500': isDark }"
              >
                <span>
                  <CiLight size={25} />
                </span>
                <span>Light</span>
              </button>

              <button
                className="flex items-center justify-center px-4 py-2 space-x-4 transition-colors border rounded-md hover:text-gray-900 hover:border-gray-900 dark:border-indigo-600 dark:hover:text-indigo-100 dark:hover:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400 dark:focus:ring-indigo-700"
                // :className="{ 'border-gray-900 text-gray-900 dark:border-indigo-500 dark:text-indigo-100': isDark, 'text-gray-500 dark:text-indigo-500': !isDark }"
              >
                <span>
                  <CiLight size={25} />
                </span>
                <span>Dark</span>
              </button>
            </div>
          </div>

          <div className="p-4 space-y-4 md:p-8"></div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
