import React, { useEffect, useState } from "react";


function NewForm() {
    const [categories, setCategories] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        price: 0,
        category_id: 1,
        description: ""
    })

    useEffect(() => {
        fetch("http://localhost:4000/categories")
        .then(r => r.json())
        .then(data => setCategories(data))
    },[])



    const categoryList = categories.map(category => {
        return <option key={category.id} value={category.name}>{category.name}</option>
    })

    function handleChange(e){
        if(e.target.name === "category_id" ) {
            const result = categories.find( ({name}) => name === e.target.value)
            setFormData({
                ...formData,
                [e.target.name]: result.id
            })
        } 
        else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:4000/foods/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => console.log(data))
    }

    return(
        <div id="entry-form">
            <h1>New Menu Item</h1>
            <br />
            <form id="new-entry-form" onSubmit={handleSubmit}>
                <input
                    className="text-black"
                    type="text"
                    name="name"
                    placeholder="Enter new item's name..."
                    value = {formData.name}
                    maxLength = "30"
                    required
                    onChange={handleChange}
                /> 
                <input
                    className="text-black"
                    type="number"
                    name="price"
                    placeholder="Enter new item's price..."
                    value = {formData.price}
                    maxLength = "3" 
                    required
                    onChange={handleChange}
                />
                <label>
                    <select className="text-black" id="drop-down" name="category_id" onChange={handleChange} >
                        <option value="">Select a Category</option>
                        {categoryList}
                    </select>
                </label>
                <input
                    className="text-black"
                    type="text"
                    name="description"
                    placeholder="Enter a decription"
                    value = {formData.description}
                    maxLength = "200"
                    required
                    onChange={handleChange}
                />
                <button type="submit">Submit Item</button>
            </form> 
        </div>
    )
}

export default NewForm