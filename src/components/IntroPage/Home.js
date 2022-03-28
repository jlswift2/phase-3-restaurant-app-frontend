import React from 'react'
import { NavLink, useHistory } from "react-router-dom";


function Home() {
  return (
    <div className="text-red-500">
     <NavLink to="/">Home</NavLink> 
    <NavLink to="/Menu"> Little Osaka</NavLink> 
    </div>
   
  )
}

export default Home