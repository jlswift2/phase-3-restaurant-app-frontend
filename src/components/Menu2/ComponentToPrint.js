import React, { useEffect, useState } from 'react';
import Drink from './Drink';
import Appetizer from './Appetizer';
import Entree from './Entree';
import Dessert from './Dessert';


const ComponentToPrint = React.forwardRef((props, ref) => { 
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

    return (
        <div ref={ref}>
            <div className="p-5 text-2xl text-black text-[64px] text-center font-light">
                Little
                <span className="text-red-500"> Osaka</span>
            </div>
            <div className="p-5 text-2xl text-black text-[24px] text-center font-light">
                Drinks
            </div>
            <ul>
                {drinks.map((drink) => (
                    <li key={drink.id}>{drink.name}</li>
                ))}
            </ul>
            {/* <Drink />
            <Appetizer />
            <Entree />
            <Dessert /> */}
        </div>
    );
})

// class ComponentToPrint extends React.Component {

//     state = {
//         drinks: []
//     }

//     componentDidMount() {
//         fetch('http://localhost:4008/categories/1')
//         .then((response) => response.json())
//         .then(drinksList => {
//             this.setState({ drinks: drinksList });
//         });
//     }

//     render() {
//         return (
//         <div>
//             <div className="p-5 text-2xl text-black text-[64px] text-center font-light">
//                 Little
//                 <span className="text-red-500"> Osaka</span>
//             </div>
//             <ul>
//                 {this.state.drinks.map((drink) => (
//                     <li key={drink.id}>{drink.name}</li>
//                 ))}
//             </ul>
            {/* <Drink />
            <Appetizer />
            <Entree />
            <Dessert /> */}
        {/* </div>
        );
    }
} */}

export default ComponentToPrint

// original text copied from online example
            {/* <h2 style={{color: "green"}}>Attendance</h2>
            <table>
            <thead>
                <th>S/N</th>
                <th>Name</th>
                <th>Email</th>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Njoku Samson</td>
                <td>samson@yahoo.com</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Ebere Plenty</td>
                <td>ebere@gmail.com</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Undefined</td>
                <td>No Email</td>
                </tr>
            </tbody>
            </table> */}