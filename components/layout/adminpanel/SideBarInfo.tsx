import React from 'react'

const SideBarInfo = () => {
  return (
    <section    className="fixed inset-y-0 top-0 right-0 z-10 flex-shrink-0 bg-white xl:z-0 xl:sticky w-80 dark:bg-darker dark:text-light xl:border-l dark:border-indigo-800 focus:outline-none">
    <h2 className="sr-only">User panel</h2>
   
    <div className="absolute left-0 p-2 transform -translate-x-full xl:hidden">
        <button
        className="p-2 rounded-md text-dark dark:text-light focus:outline-none focus:ring"
        >
        <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        </button>
    </div>
    <div className="flex flex-col h-screen">
        <div className="flex-shrink-0 p-4">
        <button
            className="p-2 text-indigo-400 transition-colors duration-200 rounded-full bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-dark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800"
        >
            <span className="sr-only">Open settings panel</span>
            <svg
            className="w-7 h-7"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            </svg>
        </button>
        </div>
        <div className="flex-1 p-4 space-y-8 overflow-y-hidden hover:overflow-y-auto">
        <div className="flex flex-col items-center space-y-2">
            <img
            className="w-20 h-20 rounded-full dark:opacity-70"
            src="https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
            alt="Ahmed Kamel"
            />
            <h2 className="text-xl font-medium text-gray-600 dark:text-light">Ahmed Kamel</h2>
        </div>
        <div className="space-y-6">
            <div className="flex items-center justify-between">
            <h3 className="text-lg font-normal text-gray-600 dark:text-light">Messages</h3>
            <a href="#" className="text-blue-500 hover:underline">View all</a>
            </div>

            <div className="space-y-4">
            <a href="#" className="flex items-start space-x-2 group">
                <img
                className="flex-shrink-0 object-cover w-12 h-12 rounded-full"
                src="https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/82125466_110587420467089_5876443407655632896_n.jpg?_nc_cat=102&ccb=3&_nc_sid=09cbfe&_nc_ohc=GrzMqB3w0WMAX_PK3hf&_nc_ht=scontent-hbe1-1.xx&oh=a51c1ffff60c83e73c3ef0c9c70afafa&oe=6056CFF5"
                alt="John Doe"
                />
                <div className="overflow-hidden">
                <h4
                    className="font-semibold text-gray-400 transition-colors dark:text-indigo-700 group-hover:text-gray-900 dark:group-hover:text-indigo-400"
                >
                    John Doe
                </h4>
                <p className="text-sm text-gray-400 truncate">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas eaque nesciunt
                    doloremque ullam
                </p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap dark:text-indigo-500">1h ago</span>
            </a>
            <a href="#" className="flex items-start space-x-2 group">
                <img
                className="flex-shrink-0 object-cover w-12 h-12 rounded-full"
                src="https://pbs.twimg.com/profile_banners/1320412502195306496/1603647296/1500x500"
                alt="John Doe"
                />
                <div className="overflow-hidden">
                <h4
                    className="font-semibold text-gray-400 transition-colors dark:text-indigo-700 group-hover:text-gray-900 dark:group-hover:text-indigo-400"
                >
                    Someone
                </h4>
                <p className="text-sm text-gray-400 truncate">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas eaque nesciunt
                    doloremque ullam
                </p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap dark:text-indigo-500">1h ago</span>
            </a>
            </div>
        </div>
        </div>
        <footer className="flex items-center justify-between flex-shrink-0 px-4 py-2 border-t dark:border-indigo-800">
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
            <a href="https://github.com/Kamona-WD" target="_blank" className="text-blue-500 hover:underline">
            Ahmed Kamel
            </a>
        </div>
        </footer>
    </div>
    </section>
  )
}

export default SideBarInfo