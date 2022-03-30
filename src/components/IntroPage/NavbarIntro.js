import React from 'react'

function Navbar() {
  return (
    <nav id="header" class="fixed w-full z-30 top-0 text-white">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div class="pl-4 flex items-center">
          <div class=" text-yellow-300 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            BITE
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar