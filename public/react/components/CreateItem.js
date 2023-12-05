import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import apiURL from '../api';

export const CreateItem = () => {
const [name, setName] = useState('')
const [description, setDescription]= useState('')
const [price, setPrice] = useState (0)
const [category, setCategory] = useState('')
const [image, setImage] = useState ('')

  const handleSubmit = async (e) => {
		e.preventDefault()
        try {
		    const res = await fetch(`${apiURL}/items`,{
             method: "POST",
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
			const responseData = await res.json()
            if(responseData.ok){
                setName('')
                setDescription('')
                setPrice(0)
                setCategory('')
                setImage('')
            }
		} catch (error) {
			console.log(error)
		}
	}

  return (
   <>
   <div>
    <h2>Add Items</h2>
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