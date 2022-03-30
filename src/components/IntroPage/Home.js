import React from 'react'
import { NavLink, useHistory } from "react-router-dom";
import FooterIntro from './FooterIntro';
import AboutIntro from './AboutIntro';
import NavbarIntro from './NavbarIntro';


function Home() {
  return (
    <div className=" flex flex-col justify-between h-full text-white  bg-gradient-to-bl from-gray-700 via-gray-900 to-black">
      <NavbarIntro />
      <AboutIntro />
      <FooterIntro />
    </div>

  )
}

export default Home