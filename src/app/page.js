"use client";

import { initFlowbite } from "flowbite";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BuildRequest from "../components/BuildRequest";
import Feedback from "../components/Feeback";
import SecretCode from "@/components/SecretCode";
import MetaData from "@/components/MetaData";
import UserList from "@/components/UserList";
import ReviewRequest from "@/components/ReviewRequest";
import Promotion from "@/components/Promotion";

const Account = () => {
  const [activeTab, setActiveTab] = useState("info");

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <main>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full xl:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-6 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-4 font-medium pt-6 text-xl">
            <li>
              <div
                className={`${
                  activeTab === "info" ? "bg-blue-500" : "hover:bg-gray-100"
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                onClick={() => setActiveTab("info")}
              >
                <svg
                  className={`${
                    activeTab === "info" ? "text-gray-900" : "text-gray-500"
                  } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Build Request</span>
              </div>
            </li>
            <li>
              <div
                className={`${
                  activeTab === "design" ? "bg-blue-500" : "hover:bg-gray-100"
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                onClick={() => setActiveTab("design")}
              >
                <svg
                  className={`${
                    activeTab === "design" ? "text-gray-900" : "text-gray-500"
                  } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Feedback</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </div>
            </li>
            <li>
              <div
                className={`${
                  activeTab === "setting" ? "bg-blue-500" : "hover:bg-gray-100"
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                onClick={() => setActiveTab("setting")}
              >
                <svg
                  className={`${
                    activeTab === "setting" ? "text-gray-900" : "text-gray-500"
                  } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Secret Code
                </span>
              </div>
            </li>
            <li>
              <div
                className={`${
                  activeTab === "push" ? "bg-blue-500" : "hover:bg-gray-100"
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                onClick={() => setActiveTab("push")}
              >
                <svg
                  className={`${
                    activeTab === "push" ? "text-gray-900" : "text-gray-500"
                  } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Meta Data</span>
              </div>
            </li>
            <li>
              <div
                className={`${
                  activeTab === "ads" ? "bg-blue-500" : "hover:bg-gray-100"
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                onClick={() => setActiveTab("ads")}
              >
                <svg
                  className={`${
                    activeTab === "ads" ? "text-gray-900" : "text-gray-500"
                  } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">User List</span>
              </div>
            </li>
            <li>
              <div
                className={`${
                  activeTab === "download" ? "bg-blue-500" : "hover:bg-gray-100"
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                onClick={() => setActiveTab("download")}
              >
                <svg
                  className={`${
                    activeTab === "download" ? "text-gray-900" : "text-gray-500"
                  } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Reviews
                </span>
              </div>
            </li>
            <li>
              <div
                className={`${
                  activeTab === "promotion"
                    ? "bg-blue-500"
                    : "hover:bg-gray-100"
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white cursor-pointer dark:hover:bg-gray-700 group`}
                onClick={() => setActiveTab("promotion")}
              >
                <svg
                  className={`${
                    activeTab === "promote" ? "text-gray-900" : "text-gray-500"
                  } w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                  <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Promotion</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <div className="sm:p-8 xl:ml-64">
        {activeTab === "info" ? (
          <div>
            <BuildRequest />
          </div>
        ) : activeTab === "design" ? (
          <div>
            <Feedback />
          </div>
        ) : activeTab === "setting" ? (
          <div>
            <SecretCode />
          </div>
        ) : activeTab === "push" ? (
          <div>
            <MetaData />
          </div>
        ) : activeTab === "ads" ? (
          <div>
            <UserList />
          </div>
        ) : activeTab === "download" ? (
          <div>
            <ReviewRequest />
          </div>
        ) : activeTab === "promotion" ? (
          <div>
            <Promotion />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Account;
