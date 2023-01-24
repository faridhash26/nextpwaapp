import React from "react";
import Link from "next/link";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";
import { HiOutlineLogout } from "react-icons/hi";

const SideBar = () => {
  return (
    <aside className="fixed inset-y-0 z-10 flex flex-shrink-0 bg-white  border-l md:static dark:border-indigo-800 dark:bg-darker focus:outline-none">
      <nav className="flex flex-col flex-shrink-0 h-full px-2 py-4 border-l dark:border-indigo-800">
        <div className="flex-shrink-0">
          <Link
            href="https://kamona-wd.github.io/kwd-dashboard/"
            className="inline-block text-xl font-bold tracking-wider text-indigo-700 uppercase dark:text-light"
          >
            K-WD
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 space-y-4">
          <Link
            href="#"
            className="p-2 text-white transition-colors duration-200 bg-indigo-600 rounded-full hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800"
          >
            <span className="sr-only">Home</span>
            <AiOutlineHome size={25} />
          </Link>

          <Link
            href="#"
            className="p-2 text-indigo-400 transition-colors duration-200 rounded-full bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800"
          >
            <span className="sr-only">Messages</span>
            <AiOutlineMessage size={25} />
          </Link>

          <Link
            href="#"
            className="p-2 text-indigo-400 transition-colors duration-200 rounded-full bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800"
          >
            <span className="sr-only">Another Link</span>
            <RiDashboardLine size={25} />
          </Link>

          <Link
            href="#"
            className="p-2 text-indigo-400 transition-colors duration-200 rounded-full bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800"
          >
            <span className="sr-only">Users</span>
            <TbUsers size={25} />
          </Link>
        </div>

        <form
          action="#"
          className="flex items-center justify-center flex-shrink-0"
        >
          <button className="p-2 text-indigo-400 transition-colors duration-200 rounded-full bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800">
            <span className="sr-only">Logout</span>
            <HiOutlineLogout size={25} />
          </button>
        </form>
      </nav>
    </aside>
  );
};

export default SideBar;
