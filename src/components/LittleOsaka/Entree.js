import React, {useState, useEffect} from 'react'
import Item from './Item'

function Entree() {
  const [Entrees, setEntrees] = useState([])
  const [issueRequest] = useState(false)

  function loadsEntrees(){
    fetch("http://localhost:4008/categories/3")
      .then(r => r.json())
      .then(data => {
        setEntrees(data.foods)
      })
  }

  useEffect(() => {
    loadsEntrees()
  }, [issueRequest])

  
  

  const entree_elements = Entrees.map(entree => {
    return (<Item key={entree.id} food={entree}/>)
  })

  return (
    <div id="Entree">
    <section
      className="container flex items-center justify-center h-[400px] m-auto mb-5 bg-fixed bg-center bg-cover custom-img4"
    >
      <div className="p-5 text-white text-[64px] text-center font-light ">
        Entrees
      </div>
    </section>
    <div className="w-9/12 grid lg:grid-cols-3 m-auto gap-5 ">
        
    <ul className="mb-4 ">
          {entree_elements}
        </ul>
      
    </div>
  </div>
  )
}

export default Entree