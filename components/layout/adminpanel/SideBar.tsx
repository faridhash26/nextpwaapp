import React, { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { AiOutlineHome, AiOutlineMenu, AiOutlineMessage } from "react-icons/ai";
import { RiDashboardLine, RiRoadMapLine } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";
import { HiOutlineLogout } from "react-icons/hi";

import { Localization } from "config/localization/localization";

interface SideBarProps {
  isSideOpen: boolean;
  setisSideOpen: (isOpen: boolean) => void;
}
const SideBar: FC<SideBarProps> = () => {
  const router = useRouter();
  const [isSideOpen, setisSideOpen] = useState<boolean>(false);

  return (
    <aside className="fixed  inset-y-0 z-10 flex flex-shrink-0 bg-white  border-x md:static dark:border-indigo-800 dark:bg-darker focus:outline-none">
      <nav className="flex flex-col flex-shrink-0 h-full px-2 py-4 border-r dark:border-indigo-800">
        <div className="flex-shrink-0">
          <button
            className="shadow-light-morfism dark:shadow-dark-morfism p-2 text-indigo-400 transition-colors duration-200 rounded-full bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800"
            onClick={() => setisSideOpen(!isSideOpen)}
          >
            <AiOutlineMenu size={25} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 space-y-4">
          <Link
            href="/adminPanel"
            className={`${
              router.pathname == "/adminPanel"
                ? "text-white"
                : "text-indigo-400"
            } shadow-light-morfism dark:shadow-dark-morfism p-2  transition-colors duration-200 bg-indigo-600 rounded-full hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800`}
          >
            <span className="sr-only">{Localization.Home}</span>
            <AiOutlineHome size={25} />
          </Link>

          <Link
            href="/adminPanel/navigation"
            className={`${
              router.pathname == "/adminPanel/navigation"
                ? "text-white"
                : "text-indigo-400"
            } shadow-light-morfism dark:shadow-dark-morfism p-2  transition-colors duration-200 bg-indigo-600 rounded-full hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800`}
          >
            <span className="sr-only">Messages</span>
            <RiRoadMapLine size={25} />
          </Link>

          <Link
            href="#"
            className="shadow-light-morfism dark:shadow-dark-morfism p-2 text-indigo-400 transition-colors duration-200 rounded-full bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800"
          >
            <span className="sr-only">Messages</span>
            <AiOutlineMessage size={25} />
          </Link>

          <Link
            href="#"
            className="shadow-light-morfism dark:shadow-dark-morfism p-2 text-indigo-400 transition-colors duration-200 rounded-full bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800"
          >
            <span className="sr-only">Another Link</span>
            <RiDashboardLine size={25} />
          </Link>

          <Link
            href="#"
            className="shadow-light-morfism dark:shadow-dark-morfism p-2 text-indigo-400 transition-colors duration-200 rounded-full bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800"
          >
            <span className="sr-only">Users</span>
            <TbUsers size={25} />
          </Link>
        </div>

        <form
          action="#"
          className="flex items-center justify-center flex-shrink-0"
        >
          <button className="shadow-light-morfism dark:shadow-dark-morfism p-2 text-indigo-400 transition-colors duration-200 rounded-full bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800">
            <span className="sr-only">Logout</span>
            <HiOutlineLogout size={25} />
          </button>
        </form>
      </nav>
    </aside>
  );
};

export default SideBar;
