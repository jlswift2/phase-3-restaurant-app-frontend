import React from 'react'
import NewForm from "./NewForm"
import { fadeIn } from "react-animations"
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";


function FoodForm() {
  const FadeIn = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;


  return (
    <div className="text-white custom-img6 w-screen h-full">
      <FadeIn>

        <NewForm />
        <div className="text-center font-light">
          <NavLink className="text-red-500" to="/Menu">Home</NavLink>

          <p> © Designed and Coded By:</p>
          <NavLink className="text-yellow-300" to="/">BITE | 2022 </NavLink>

        </div>


      </FadeIn>

    </div>

  )
}

export default FoodForm