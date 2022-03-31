import React from 'react'
import { fadeIn } from 'react-animations'
import styled, { keyframes } from "styled-components";

function Header() {
    const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;


    return (
        <div id="Header">
            <header className="flex items-center justify-center h-screen mb-5 bg-fixed bg-center bg-cover custom-img1">
               
                <div className="p-5 text-2xl text-white text-[64px] text-center font-light">
                    <FadeIn>
                    <h1>Discover</h1>
                    <br />
                    <h2>
                        Little
                        <span className="text-red-500"> Osaka</span>
                    </h2>
                    </FadeIn>
                </div>
            </header>

        </div>
    )
}

export default Header