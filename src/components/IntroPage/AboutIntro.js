import React from 'react'
import Logo3 from "../Images/Logo3.png";
import Card  from "./Card"


function AboutIntro() {
  return (
    <section>
    <div class="max-w-screen-xl px-4 py-20 sm:px-6  m-auto h-full">
      <div
        class="items-center"
      >
        <div class="max-w-lg text-center m-auto mb-5">
          <img src={Logo3} alt="company logo"/>
          <p class=" p-5 text-white">
            Made by restaurant owners for restaurant owners.
            <br/>
            BITE aims to allow restaurant owners to update their
            menu items in a simple and quick manner. Choose from 
            a variety of options to bring your website 
            to the next level with more styles to 
            come in the future.
      
          </p>
        </div>
        <Card />

  
        
      </div>
    </div>
  </section>
  )
}

export default AboutIntro