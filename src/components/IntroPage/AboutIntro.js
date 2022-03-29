import React from 'react'
import Logo3 from "../Images/Logo3.png";
import Card  from "./Card"


function AboutIntro() {
  return (
    <section>
    <div class="max-w-screen-xl px-4 py-16 sm:px-6  m-auto h-full">
      <div
        class="items-center"
      >
        <div class="max-w-lg text-center m-auto mb-5">
          <img src={Logo3} alt="company logo"/>
          <p class=" text-white">
            Made by restaurant owners for restaurant owners.
            <br/>
            BITE aims to allows restaurant owners to update their
            menu items in a simple and quick manner. Choose from 
            a variety of options to bring your website 
            to the next level. With more styles to 
            come in the future to elevate your menu.
      
          </p>
        </div>
        <Card />

  
        
      </div>
    </div>
  </section>
  )
}

export default AboutIntro