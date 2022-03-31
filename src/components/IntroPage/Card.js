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
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 15.628c0-.713-.154-1.919-1.191-1.98-.493-.03-.89-.414-.936-.904-.055-.581-.186-1.184-.476-1.744h-10.793c-.29.56-.421 1.163-.476 1.743-.046.49-.443.874-.936.904-1.037.062-1.192 1.268-1.192 1.981 0 .316.333 1.613 1.331 1.963.284.1.508.322.61.605.966 2.694 3.628 4.804 6.059 4.804 2.552 0 5.195-2.499 6.063-4.834.108-.29.344-.515.641-.606 1.07-.332 1.296-1.68 1.296-1.932zm-13-7.229v1.601h3v-1.5c0-.276.224-.5.5-.5s.5.224.5.5v1.5h2v-1.5c0-.276.225-.5.5-.5s.5.224.5.5v1.5h3v-1.647c.244-.058 3-.439 3-3.068 0-1.994-1.753-3.58-3.875-3.58-.806 0-1.278.198-1.941.428-1.137-1.123-1.63-1.133-2.184-1.133-.482 0-1.038.002-2.184 1.133-.68-.235-1.134-.428-1.941-.428-2.122 0-3.875 1.586-3.875 3.58 0 2.456 2.662 3.013 3 3.114zm14 7.229c0 .67-.453 2.407-2 2.887-1.023 2.754-3.999 5.485-7 5.485s-5.957-2.557-7-5.466c-1.52-.532-2-2.301-2-2.906 0-1.509.603-2.888 2.132-2.979.098-1.038.412-1.855.868-2.528v-.977c-1.825-.546-3-2.239-3-3.859 0-2.528 2.185-4.58 4.875-4.58.591 0 1.157.099 1.681.28.615-.607 1.483-.985 2.444-.985.961 0 1.828.378 2.443.985.525-.181 1.091-.28 1.682-.28 2.69 0 4.875 2.052 4.875 4.58 0 1.62-1.229 3.442-3 3.859v.976c.456.675.771 1.492.868 2.529 1.527.091 2.132 1.462 2.132 2.979zm-9 1.688c-1.9-1.287-1.351 1.854-4 .566.4 1.78 2.805 2.082 4 1.009 1.195 1.073 3.6.771 4-1.009-2.648 1.289-2.1-1.852-4-.566zm3-4.316c-.552 0-1 .525-1 1.174 0 .647.448 1.174 1 1.174s1-.527 1-1.174c0-.649-.448-1.174-1-1.174zm-5 1.174c0 .647-.448 1.174-1 1.174s-1-.527-1-1.174c0-.649.448-1.174 1-1.174s1 .525 1 1.174z"/></svg>
            </span>
  
            <h6 class="mt-2 font-bold">Menu 3</h6>
  
            <p class="hidden sm:mt-1 sm:text-sm sm:text-white sm:block">
            A fresh and bright comtempory template.
            </p>
          </NavLink>
        </div>
  )
}

export default Card