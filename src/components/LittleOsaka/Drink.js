import React from 'react'

function Drink() {
  return (
    <div id="Drink">
      <section
        className="container flex items-center justify-center h-[400px] m-auto mb-5 bg-fixed bg-center bg-cover custom-img2"
      >
        <div className="p-5 text-white text-[64px] text-center font-light ">
        Drinks
        </div>
      </section>
      <div className=" w-9/12 grid lg:grid-cols-2 m-auto text-center text-white  ">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
          magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
          sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
          nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
          odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
          laoreet sem, semper molestie libero.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
          magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
          sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
          nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
          odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
          laoreet sem, semper molestie libero.
        </p>
      </div>
    </div>
  )
}

export default Drink