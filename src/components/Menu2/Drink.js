import React, {useState, useEffect} from 'react'
import Item from './Item'

function Drink() {
  const [drinks, setDrinks] = useState([])
  const [issueRequest] = useState(false)


  function loadsDrinks(){
    fetch("http://localhost:4008/categories/1")
      .then(r => r.json())
      .then(data => {
        setDrinks(data.foods)
      })
  }

  useEffect(() => {
    loadsDrinks()
  }, [issueRequest])

  
  

  const drink_elements = drinks.map(drink => {
    return (<Item key={drink.id} food={drink}/>)
  })
  
  return (
    <div id="Drink">
      <section
        className="container flex items-center justify-center h-[400px] m-auto mb-5 bg-fixed bg-center bg-cover custom-img2"
      >
        <div className="p-5 text-white text-[64px] text-center font-light ">
        Drinks
        </div>
      </section>
      <div className=" w-9/12 grid lg:grid-cols-1 m-auto text-center text-white  ">
        <ul className="mb-4 lg:flex justify-around">
          {drink_elements}
        </ul>
      </div>
    </div>
  )
}

export default Drink