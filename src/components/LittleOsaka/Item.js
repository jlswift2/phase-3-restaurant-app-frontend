import React from 'react';
import { Link } from "react-router-dom";

function Item({food}){
    return (
        <Link to={`/FoodForm/${food.id}/Edit`}>
            <div>
                <li>
                    <h3>{food.name}</h3>
                    <p>{food.description}</p>
                    <p>{`$ ${food.price}`}</p>
                </li>
            </div>
        </Link>
    )
}

export default Item;