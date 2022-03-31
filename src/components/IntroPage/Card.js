import React from 'react'
import { NavLink, useHistory } from "react-router-dom";

function Card() {
  return (
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 text-center text-white">
          <NavLink
            class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-yellow-500/10 hover:border-pink-500/10"
            to="/Menu"
          >
            <span class="inline-block p-3 rounded-lg bg-gray-50 text-red-500">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M18 24h-12l-2.404-13.899c-.6 1.087-1.288 2.336-1.704 3.095-.496.907-1.892.551-1.892-.48 0-.162.054-.327.137-.48.828-1.514 2.737-4.963 2.88-5.221l-.002-.015h9.924l1.623-6.259c.12-.447.524-.741.965-.741.651 0 1.139.619.968 1.259l-1.485 5.741h.398l4.199-5.57c.317-.453.941-.563 1.393-.246.452.316.562.941.246 1.393l-3.397 4.423h3.166l-.007.036c.212.382 2.059 3.718 2.869 5.2.083.153.123.318.123.48 0 1.036-1.384 1.384-1.878.48-.413-.756-1.095-1.992-1.693-3.074l-2.429 13.878zm-2.47-8h-7.03l-2.391-3.347 1.565 9.347h8.681l1.565-9.347-2.39 3.347zm2.542-7h-12.114l3.571 5h4.971l3.572-5zm-4.057 2.5c0-.276-.224-.5-.5-.5h-3c-.276 0-.5.224-.5.5 0 .275.224.5.5.5h3c.276 0 .5-.225.5-.5"/></svg>
            </span>
  
            <h6 class="mt-2 font-bold">
             Menu 1
              </h6>
  
            <p class="hidden sm:mt-1 sm:text-sm sm:text-white sm:block">
              A modern yet sophisticated take on a traditional layout
            </p>
          </NavLink>
  
          <a
            class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-yellow-500/10 hover:border-pink-500/10"
            href="/"
          >
            <span class="inline-block p-3 rounded-lg bg-gray-50">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>
  
            <h6 class="mt-2 font-bold">Menu 2</h6>
  
            <p class="hidden sm:mt-1 sm:text-sm sm:text-white sm:block">
              A fresh and bright comtempory template.
            </p>
          </a>
  
          <NavLink
            class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-yellow-500/10 hover:border-pink-500/10"
            to="/Menu3"
          >
            <span class="inline-block p-3 rounded-lg bg-gray-50">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>
  
            <h6 class="mt-2 font-bold">Menu 3</h6>
  
            <p class="hidden sm:mt-1 sm:text-sm sm:text-white sm:block">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </NavLink>
        </div>
  )
}

export default Card