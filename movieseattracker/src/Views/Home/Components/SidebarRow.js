import React from "react";
const SidebarRow = ({onSelect }) => {
  return (
    <li>
      <button
        onClick={() => {
          onSelect("HomeCinemas");
        }}
        class="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <svg
          class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21,5h-2V3c0-1.654-1.346-3-3-3H8c-1.654,0-3,1.346-3,3v6H3c-1.654,0-3,1.346-3,3v12H24V8c0-1.654-1.346-3-3-3ZM6,19h-2v-2h2v2Zm0-4h-2v-2h2v2Zm5,4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm4,12h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm5,12h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Z" />
        </svg>
        <span class="flex-1 ml-3 whitespace-nowrap">Cinemas</span>
        <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
          3
        </span>
      </button>
    </li>
  );
};
export default SidebarRow;
