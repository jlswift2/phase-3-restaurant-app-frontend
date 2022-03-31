import React from 'react'
import { fadeInUp } from 'react-animations'
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";


function Footer() {
  const FadeInUp = styled.div`animation: 3s ${keyframes`${fadeInUp}`}`;

  return (
    <footer className="flex flex-col justify-center items-center absolute b-0 w-full bg-stone-900">
      <div className="text-center font-light">
        <FadeInUp>
          <p> © Designed and Coded By:</p>
          <NavLink className="text-yellow-300"to="/">BITE | 2022 </NavLink>
        </FadeInUp>
       
        <NavLink className="text-red-500"to="/PrintMenu">Print Menu</NavLink>
      </div>
    </footer>
  )
}

export default Footer