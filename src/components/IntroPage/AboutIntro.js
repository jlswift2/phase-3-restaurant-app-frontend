import React from 'react'
import Logo2 from "../Images/Logo2.png";
import Card  from "./Card"


function AboutIntro() {
  return (
    <section>
    <div class="max-w-screen-xl px-4 py-16 sm:px-6  m-auto h-full">
      <div
        class="items-center"
      >
        <div class="max-w-lg text-center m-auto mb-5">
          <img src={Logo2} alt="company logo"/>
          <p class="mt-4 text-stone-900">
            Made by small business owners for small business owners.
            <br/>
            BITE aims to allows business owners to update their
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