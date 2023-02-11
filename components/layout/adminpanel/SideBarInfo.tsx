import React, { FC } from "react";
import { AiOutlineCloseCircle, AiOutlineSetting } from "react-icons/ai";
interface SideBarInfoProps {
  isInfoSideOpen: boolean;
  iseSettingOpen: boolean;
  setisInfoSideOpen: (isOpen: boolean) => void;
  setiseSettingOpen: (isOpen: boolean) => void;
}
const SideBarInfo: FC<SideBarInfoProps> = ({
  isInfoSideOpen,
  iseSettingOpen,
  setiseSettingOpen,
  setisInfoSideOpen,
}) => {
  return (
    <section
      className={`${
        isInfoSideOpen ? "sideOpen w-80" : "sideclose w-20"
      } fixed inset-y-0 top-0 right-0 z-10 flex-shrink-0 bg-white xl:z-0 xl:sticky  dark:bg-darker dark:text-light xl:border-x dark:border-indigo-800 focus:outline-none`}
    >
      <h2 className="sr-only">User panel</h2>

      {/* <div className="absolute right-0 p-2 transform -translate-x-full ">
        <button className="p-2 rounded-md text-dark dark:text-light focus:outline-none focus:ring">
          <AiOutlineCloseCircle />
        </button>
      </div> */}
      <div className="flex flex-col h-screen">
        <div className="flex-shrink-0 p-4">
          <button
            className="shadow-light-morfism dark:shadow-dark-morfism p-2 text-indigo-400 transition-colors duration-200 rounded-full bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800"
            onClick={() => setiseSettingOpen(!iseSettingOpen)}
          >
            <span className="sr-only">Open settings panel</span>
            <AiOutlineSetting size={25} />
          </button>
        </div>
        <div className="flex-1 p-4 space-y-8 overflow-y-hidden hover:overflow-y-auto">
          <div
            className={`${
              isInfoSideOpen ? "show-element " : "hidden-element"
            }  flex flex-col items-center space-y-2`}
          >
            <img
              className="w-20 h-20 rounded-full dark:opacity-70"
              src="https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
              alt="farid hash"
            />
            <h2 className="text-xl font-medium text-gray-600 dark:text-light">
              Farid Hash
            </h2>
          </div>
          <div className="space-y-6">
            <div
              className={`${
                isInfoSideOpen ? "show-element " : "hidden-element"
              }  flex items-center justify-between`}
            >
              <h3 className="text-lg font-normal text-gray-600 dark:text-light">
                Messages
              </h3>
              <a href="#" className="text-blue-500 hover:underline">
                View all
              </a>
            </div>

            {/* <div className="space-y-4">
              <a href="#" className="flex items-start space-x-2 group">
                <img
                  className="flex-shrink-0 object-cover w-12 h-12 rounded-full"
                  src="https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                  alt="John Doe"
                />
                <div className="overflow-hidden">
                  <h4 className="font-semibold text-gray-400 transition-colors dark:text-indigo-700 group-hover:text-gray-900 dark:group-hover:text-indigo-400">
                    John Doe
                  </h4>
                  <p className="text-sm text-gray-400 truncate">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis voluptas eaque nesciunt doloremque ullam
                  </p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap dark:text-indigo-500">
                  1h ago
                </span>
              </a>
              <a href="#" className="flex items-start space-x-2 group">
                <img
                  className="flex-shrink-0 object-cover w-12 h-12 rounded-full"
                  src="https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                  alt="John Doe"
                />
                <div className="overflow-hidden">
                  <h4 className="font-semibold text-gray-400 transition-colors dark:text-indigo-700 group-hover:text-gray-900 dark:group-hover:text-indigo-400">
                    Someone
                  </h4>
                  <p className="text-sm text-gray-400 truncate">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis voluptas eaque nesciunt doloremque ullam
                  </p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap dark:text-indigo-500">
                  1h ago
                </span>
              </a>
            </div> */}
          </div>
        </div>
        <footer
          className={`${
            isInfoSideOpen ? "show-element " : "hidden-element"
          } flex items-center justify-between flex-shrink-0 px-4 py-2 border-t dark:border-indigo-800`}
        >
          <div className="text-sm">
            View on
            <a
              href="https://github.com/Kamona-WD/kwd-dashboard"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              github
            </a>
          </div>
          <div className="text-sm">
            Made by
            <a
              href="https://github.com/Kamona-WD"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Farid Hash
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default SideBarInfo;
