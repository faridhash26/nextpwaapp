import React from "react";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4 md:space-x-0">
        <button className="p-1 text-indigo-400 transition-colors duration-200 rounded-md bg-indigo-50 md:hidden hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:ring">
          <span className="sr-only">Open main manu</span>
          <span aria-hidden="true">
            <svg
              x-show="!isSidebarOpen"
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              x-show="isSidebarOpen"
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
        <h1 className="text-2xl font-medium">Home</h1>
      </div>
      <div className="space-x-2">

        <button className="p-1 text-indigo-400 transition-colors duration-200 rounded-md bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:ring">
          <span className="sr-only">Open search panel</span>
          <span aria-hidden="true">
            <BsSearch size={25} />
          </span>
        </button>

        <button className="p-1 text-indigo-400 transition-colors duration-200 rounded-md bg-indigo-50 xl:hidden hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:ring">
          <span className="sr-only">Open user panel</span>
          <span aria-hidden="true">
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
