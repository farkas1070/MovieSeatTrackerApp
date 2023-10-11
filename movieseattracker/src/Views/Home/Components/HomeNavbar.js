import React from "react";

const HomeNavbar =({title})=>{

    return (
        <nav class="w-full">
        <div class=" flex flex-wrap items-center justify-between mx-auto p-4 ">
          <a href="https://flowbite.com/" class="flex items-center">
            
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
              {title}
            </span>
          </a>
          
        </div>
      </nav>
    )
}
export default HomeNavbar