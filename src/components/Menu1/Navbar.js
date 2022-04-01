import React, { useState } from 'react'
import styled, { keyframes } from "styled-components";
import { slideInRight } from "react-animations"
import { NavLink } from "react-router-dom";



function Navbar(props) {
  const [hidden, setHidden] = useState("true")
  const SlideInRight = styled.div`animation: 1s ${keyframes`${slideInRight}`}`;

  function handleClick() {
    setHidden((hidden) => !hidden)
  }

  return (
    <nav className="sticky top-0 z-50 text-white font-light backdrop-blur-lg bg-opacity-20 bg-white" >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#Title" className="text-2xl text-white">
            Little
            <span className="text-red-500"> Osaka</span>
          </a>
          <div className={"md:block " + (hidden ? "hidden" : "")} id="menu">
            <SlideInRight>
              <ul className="flex space-x-4 text-grey-900" id="navList">
                <li className="hover:underline hover:text-red-500">
                  <a href="#Drink" >Drinks</a>
                </li>
                <li className="hover:underline hover:text-red-500">
                  <a href="#Appitizer">Appitizers</a>
                </li>
                <li className="hover:underline hover:text-red-500">
                  <a href="#Entree">Entrees</a>
                </li>
                <li className="hover:underline hover:text-red-500">
                  <a href="#Dessert">Dessert</a>
                </li>
                <li className="hover:underline hover:text-red-500">
                  <NavLink to="/FoodForm">New</NavLink>
                </li>
                
              </ul>
            </SlideInRight>

          </div>
          <svg className=" text-red-500 hover:ease-in cursor-pointer md:hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" onClick={handleClick} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>

        </div>
      </div>
    </nav>
  )
}

export default Navbar