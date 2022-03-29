import React, {useState, useEffect} from 'react'
import Item from './Item'

function Dessert() {
  const [desserts, setDesserts] = useState([])
  const [issueRequest] = useState(false)

  function loadsDesserts(){
    fetch("http://localhost:4008/categories/4")
      .then(r => r.json())
      .then(data => {
        setDesserts(data.foods)
      })
  }

  useEffect(() => {
    loadsDesserts()
  }, [issueRequest])

  

  const dessert_elements = desserts.map(dessert => {
    return (<Item key={dessert.id} food={dessert}/>)
  })

  return (
    <div id="Dessert">
    <section
      className="container flex items-center justify-center h-[400px] m-auto mb-5 bg-fixed bg-center bg-cover custom-img5"
    >
      <div className="p-5 text-white text-[64px] text-center font-light ">
        Desserts
      </div>
    </section>
    <div className="w-9/12 grid lg:grid-cols-2 m-auto gap-5 ">
        
    <ul className="mb-4 ">
          {dessert_elements}
        </ul>
        
    </div>
  </div>
  )
}

export default Dessert