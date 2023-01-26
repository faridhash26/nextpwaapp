import React from "react";

const SearchPanel = () => {
  return (
    <section className="fixed inset-y-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none">
      <div className="absolute right-0 p-2 transform translate-x-full">
        <button className="p-2 text-white rounded-md focus:outline-none focus:ring">
          sdfsd
          {/* <svg
            className="w-5 h-5"
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
          </svg> */}
        </button>
      </div>

      <h2 className="sr-only">Search panel</h2>

      <div className="flex flex-col h-screen">
        <div className="relative flex-shrink-0 px-4 py-8 text-gray-400 border-b dark:border-indigo-800 dark:focus-within:text-light focus-within:text-gray-700">
          <span className="absolute inset-y-0 inline-flex items-center px-4">
      
          </span>
          <input
            x-ref="searchInput"
            type="text"
            className="w-full py-2 pl-10 pr-4 border rounded-full dark:bg-maindark dark:border-transparent dark:text-light focus:outline-none focus:ring"
            placeholder="Search..."
          />
        </div>

        <div className="flex-1 px-4 pb-4 space-y-4 overflow-y-hidden h hover:overflow-y-auto">
          <h3 className="py-2 text-sm font-semibold text-gray-600 dark:text-light">
            History
          </h3>
          <p className="px=4">Search resault</p>
        </div>
      </div>
    </section>
  );
};

export default SearchPanel;
