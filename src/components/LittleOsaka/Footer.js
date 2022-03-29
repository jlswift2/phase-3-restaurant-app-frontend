import React from 'react'
import { fadeInUp } from 'react-animations'
import styled, { keyframes } from "styled-components";
import PrintComponent from './PrintComponent';

function Footer() {
  const FadeInUp = styled.div`animation: 3s ${keyframes`${fadeInUp}`}`;

  return (
    <footer className="flex flex-col justify-center items-center absolute b-0 w-full bg-stone-900">
      <div className="text-center font-light">
        <FadeInUp>
          <p> © Designed and Coded By:</p>
          <p className="text-yellow-300"> BITE | 2022 </p>
        </FadeInUp>
        <PrintComponent />
      </div>
    </footer>
  )
}

export default Footer