import React, { useEffect, useState } from 'react';

const ComponentToPrint = React.forwardRef((props, ref) => { 
    const [drinks, setDrinks] = useState([])
    const [apps, setApps] = useState([])
    const [entrees, setEntrees] = useState([])
    const [desserts, setDesserts] = useState([])
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

    return (
        <div className="p-10 text-center"ref={ref}>
            <div className="a4-screen-sized">
                <div className="aspect-ratio-box shadow-lg rounded-lg overflow-hidden">
                    <div className="aspect-ratio-box-inside border border-gray-300 rounded-lg p-6 overflow-hidden">
                        {/* <div className="w-full object-cover object-center rounded-lg p-8 bg-slate-50"> */}
                            <div className="p-10 text-2xl text-black text-[64px] text-center font-light">
                                Little
                                <span className="text-red-500"> Osaka</span>
                            </div>
                            <div className="p-2 text-2xl text-black text-[24px] text-center font-light">
                                Drinks
                            </div>
                            <ul>
                                {drinks.map((drink) => (
                                    <li key={drink.id}>
                                        <span className="p-5 font-light"><span className="text-[18px] font-medium">{drink.name}</span> |  {drink.description} |  {drink.price}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="p-2 text-2xl text-black text-[24px] text-center font-light">
                                Appetizers
                            </div>
                            <ul>
                                {apps.map((app) => (
                                    <li key={app.id}>
                                        <span className="p-5 font-light"><span className="text-[18px] font-medium">{app.name}</span> |  {app.description}|  {app.price}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="p-2 text-2xl text-black text-[24px] text-center font-light">
                                Entrees
                            </div>
                            <ul>
                                {entrees.map((entree) => (
                                    <li key={entree.id}>
                                        <span className="p-5 font-light"><span className="text-[18px] font-medium">{entree.name}</span>|  {entree.description}  |  {entree.price}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="p-2 text-2xl text-black text-[24px] text-center font-light">
                                Desserts
                            </div>
                            <ul>
                            {desserts.map((dessert) => (
                                    <li key={dessert.id}>
                                        <span className="p-5 font-light"><span className="text-[18px] font-medium">{dessert.name}</span> |  {dessert.description} |  {dessert.price}  </span>
                                    </li>
                                ))}
                            </ul>
                            <span className="inline-block p-6 text-black flex flex-col justify-center items-center">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M18 24h-12l-2.404-13.899c-.6 1.087-1.288 2.336-1.704 3.095-.496.907-1.892.551-1.892-.48 0-.162.054-.327.137-.48.828-1.514 2.737-4.963 2.88-5.221l-.002-.015h9.924l1.623-6.259c.12-.447.524-.741.965-.741.651 0 1.139.619.968 1.259l-1.485 5.741h.398l4.199-5.57c.317-.453.941-.563 1.393-.246.452.316.562.941.246 1.393l-3.397 4.423h3.166l-.007.036c.212.382 2.059 3.718 2.869 5.2.083.153.123.318.123.48 0 1.036-1.384 1.384-1.878.48-.413-.756-1.095-1.992-1.693-3.074l-2.429 13.878zm-2.47-8h-7.03l-2.391-3.347 1.565 9.347h8.681l1.565-9.347-2.39 3.347zm2.542-7h-12.114l3.571 5h4.971l3.572-5zm-4.057 2.5c0-.276-.224-.5-.5-.5h-3c-.276 0-.5.224-.5.5 0 .275.224.5.5.5h3c.276 0 .5-.225.5-.5"/></svg>
                            </span>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
})
