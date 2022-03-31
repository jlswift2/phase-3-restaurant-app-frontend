import React from 'react'
import { NavLink, useHistory } from "react-router-dom";
import FooterIntro from './FooterIntro';
import AboutIntro from './AboutIntro';
import NavbarIntro from './NavbarIntro';


function Home() {
  return (
    <div className=" flex flex-col min-h-screen text-white  bg-gradient-to-bl from-gray-700 via-gray-900 to-black">
      <NavbarIntro />
      <AboutIntro className=""/>
      <FooterIntro />
    </div>

  )
}

export default Home