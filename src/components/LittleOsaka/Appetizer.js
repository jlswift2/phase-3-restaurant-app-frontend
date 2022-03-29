import React, {useState, useEffect} from 'react'
import Item from './Item'



function Appetizer() {

  const [apps, setApps] = useState([])
  const [issueRequest] = useState(false)


  function loadsApps(){
    fetch("http://localhost:4008/categories/2")
      .then(r => r.json())
      .then(data => {
        setApps(data.foods)
      })
  }

  useEffect(() => {
    loadsApps()
  }, [issueRequest])

  const app_elements = apps.map(app => {
    return (<Item key={app.id} food={app}/>)
  })

  
  return (
    <div id="Appitizer">
      <section
        className="container flex items-center justify-center h-[400px] m-auto mb-5 bg-fixed bg-center bg-cover custom-img3"
      >
        <div className="p-5 text-white text-[64px] text-center font-light ">
          Appetizers
        </div>
      </section>
      <div className="w-9/12 grid lg:grid-cols-3 m-auto gap-5 text-white ">
      <ul className="mb-4 ">
          {app_elements}
      </ul>
      </div>
    </div>
  )
}

export default Appetizer