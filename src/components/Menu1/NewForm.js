import React, { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import Navbar from "./Navbar"


function NewForm() {
    const [isEdit, setIsEdit] = useState(false);
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        price: 0,
        category_id: 1,
        description: ""
    });

    const history = useHistory();
    const match = useRouteMatch();
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:4008/categories")
            .then(r => r.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        if (match.path === "/FoodForm/:id/Edit") {
            fetch(`http://localhost:4008/foods/${id}`)
                .then(res => res.json())
                .then(data => {
                    setFormData(data)
                    setIsEdit(true);
                })
        }
    }, [categories])

    const categoryList = categories.map(category => {
        return <option key={category.id} value={category.id}>{category.name}</option>
    })

    //Create conditional delete button
    const deleteButton = isEdit ? <button className="text-black" type="button" onClick={handleDelete}>Delete</button> : null

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (match.path === "/FoodForm/:id/Edit") {
            fetch(`http://localhost:4008/foods/${id}/edit`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then((r) => r.json())
                .then(data => history.push("/menu"));
        } else {
            fetch("http://localhost:4008/foods/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })
                .then((r) => r.json())
                .then(data => history.push("/menu"));
        }
    }

    function handleDelete(e) {
        fetch(`http://localhost:4008/foods/${id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then((deletedFood) => history.push("/menu"));
    }


    return (
        <div id="entry-form" className="mx-auto max-w-6xl lg:px-24 bg-opacity-50 flex flex-col">
            <h1 className='text-[30px] text-center'>
                New Menu Item</h1>
            <br />
            <form id="new-entry-form" onSubmit={handleSubmit}>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm ">
                    <div className="-mx-3 mb-2 flex-wrap place-content-center">
                        <div className="px-3 mb-6 md:mb-0">
                            <label className="uppercase tracking-wide text-black text-sm font-bold mb-2" for="company">
                                New Item Name:
                            </label>
                            <input
                                className="w-full bg-gray-50 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company"
                                type="text"
                                name="name"
                                placeholder="Enter new item's name..."
                                value={formData.name}
                                maxLength="30"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="px-3">
                            <label className="uppercase tracking-wide text-black text-sm font-bold mb-2" for="title">
                                Enter price:
                            </label>
                            <input
                                className="w-full bg-gray-50 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                type="number"
                                name="price"
                                placeholder="Enter new item's price..."
                                value={formData.price}
                                maxLength="3"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <label className="uppercase tracking-wide text-black text-sm font-bold mb-2">
                         Select A Category:
                        <select className="w-full bg-gray-50 border border-gray-200 text-black text-sm py-3 px-4 pr-8 mb-3 rounded" id="drop-down" name="category_id" value={formData.category_id} onChange={handleChange} >
                            <option value=''>Select a Category</option>
                            {categoryList}
                        </select>
                    </label>
                    <div className="-mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="tracking-wide text-black text-sm font-bold mb-2" for="application-link">
                                    Message:
                                </label>
                                <input
                        className="text-black"
                        type="text"
                        name="description"
                        placeholder="Enter a decription"
                        value={formData.description}
                        maxLength="200"
                        required
                        onChange={handleChange}
                    />
                                <textarea 
                                 value={formData.description}
                                 maxLength="200"
                                 className=" h-32 w-full bg-gray-50 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="Enter a decription" />
                            </div>
                        </div>
                    
                    <button className="text-black mx-auto" type="submit">Add to Menu</button>
                    <br/>
                    {deleteButton}
                </div>
            </form>
        </div>
    )
}

export default NewForm