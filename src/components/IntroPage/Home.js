import React from 'react'
import { NavLink, useHistory } from "react-router-dom";
import FooterIntro from './FooterIntro';
import AboutIntro from './AboutIntro';


function Home() {
  return (
    <div className=" flex flex-col justify-between h-full text-white  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">

      <AboutIntro />

      <FooterIntro />
    </div>

  )
}

export default Home