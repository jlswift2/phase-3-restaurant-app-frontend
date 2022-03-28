import React from 'react'
import { fadeInUp } from 'react-animations'
import styled, { keyframes } from "styled-components";

function Footer() {
  const FadeInUp = styled.div`animation: 3s ${keyframes`${fadeInUp}`}`;

  return (
    <footer className="flex flex-col justify-center items-center absolute b-0 w-full bg-stone-900">
      <div className="text-center font-light">
        <FadeInUp>
          <p> © Designed and Coded By:</p>
          <p className="text-yellow-300"> BITE | 2022 </p>
          {/* <a href="https://www.linkedin.com/in/v12v0/" className="hover:text-red-500"> Vi V. | </a>
          <a href="https://www.linkedin.com/in/justin-swift-4124b4166/" className="hover:text-red-500" > Justin S. | </a>
          <a href="https://www.linkedin.com/in/elizabethporporato/" className="hover:text-red-500"> Elizibeth P. | </a>
          <a href="https://www.linkedin.com/in/eve-guerrero-592718200/" className="hover:text-red-500"> Eve G.</a> */}
        </FadeInUp>

      </div>

    </footer>
  )
}

export default Footer