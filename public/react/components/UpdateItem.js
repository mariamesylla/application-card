import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import apiURL from '../api';

export const UpdateItem = () => {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [category, setCategory] = useState()
    const [image, setImage] = useState()
    let { id } = useParams()
    const navigate = useNavigate() 

    const fetchItem = async () => {
        try {
            const res = await fetch(`${apiURL}/items/${id}`)
            const data = await res.json()
            setName(data.name)
            setDescription(data.description)
            setPrice(data.price)
            setCategory(data.category)
            setImage(data.image)
            // navigate('/items')

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchItem()
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`${apiURL}/items/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    description,
                    price,
                    category,
                    image,
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div>
                <h2>Update Item</h2>
                <form onSubmit={handleSubmit}>
                    <label className="name">Name:
                        <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label className="description">Description:
                        <textarea type="text" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </label>
                    <label className="price">Price:
                        <input type="number" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </label>
                    <label className="category">Category:
                        <input type="text" placeholder='category' value={category} onChange={(e) => setCategory(e.target.value)} />
                    </label>
                    <label className="image">Image:
                        <input type="text" placeholder='image' value={image} onChange={(e) => setImage(e.target.value)} />
                    </label>
                    <button type="submit"> Submit </button>

                </form>
            </div>
        </>
    )
} 