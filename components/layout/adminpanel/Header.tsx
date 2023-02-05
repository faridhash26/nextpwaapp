import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import CustomSwitch from "components/pureElement/CustomSwitch";

const Header = () => {
  const [first, setfirst] = useState(false);
  return (
    <header className="flex bg-white items-center justify-between p-4 dark:bg-darker">
      <div className="flex items-center space-x-4 md:space-x-0">
        <button className="p-1 text-indigo-400 transition-colors duration-200 rounded-md bg-indigo-50  hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:ring">
          <span className="sr-only">Open main manu</span>
          {/* <span aria-hidden="true"> */}
          <span>
            <FiMoreHorizontal size={25} />
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
        <CustomSwitch isChecked={first} setIsChecked={setfirst} />

        <button className="p-1 text-indigo-400 transition-colors duration-200 rounded-md bg-indigo-50 xl:hidden hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:ring">
          <span className="sr-only">Open user panel</span>
          <span aria-hidden="true">
            <AiOutlineMenu size={25} />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
