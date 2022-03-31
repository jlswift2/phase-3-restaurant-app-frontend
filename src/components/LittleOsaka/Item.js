import React from 'react';
import { Link } from "react-router-dom";

function Item({ food }) {
    return (
        <Link to={`/FoodForm/${food.id}/Edit`}>
              <li>
                  <h3 className="font-semibold">
                      <span className="text-lg">
                          {food.name}
                      </span>
                      <span className="text-red-500"> {food.price} </span>
                  </h3>
                  <p className="text-base italic">{food.description}</p>
              </li>
        </Link>
    )
}

export default Item;