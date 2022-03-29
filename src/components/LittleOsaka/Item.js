import React from 'react';

function Item({food}){
    return (
    <div>
<li>
    <h3>{food.name}</h3>
    <p>{food.description}</p>
    <p>{`$ ${food.price}`}</p>
</li>
    </div>
    )}

export default Item;