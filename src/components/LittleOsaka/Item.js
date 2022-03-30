import React from 'react';

function Item({ food }) {
    return (

        <li>
            <h3 className="font-semibold">
                <span className="text-lg">
                    {food.name}
                </span>
                <span className="text-red-500"> {food.price} </span>
            </h3>
            <p className="text-base italic">{food.description}</p>

        </li>

    )
}

export default Item;