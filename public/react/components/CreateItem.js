
import React, {useState,useEffect} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'
import apiURL from '../api';

<link rel="stylesheet" href="../../style.css" />

export const CreateItem = () => {
const [name, setName] = useState('')
const [description, setDescription]= useState('')
const [price, setPrice] = useState (0)
const [category, setCategory] = useState('')
const [image, setImage] = useState ('')

const navigate = useNavigate();


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
            navigate('/items')
		} catch (error) {
			console.log(error)
		}
        navigate("/items");
	}


  return (
   <>
   
    <h2>Add Items</h2>
    <div  className="form-container">
   
    <form onSubmit={handleSubmit}>
    <label className="input-label">Name:
    <br/>
        <input className="input field" type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
    </label>
    <label className="input-label">Description:
    <br/>
        <textarea type="" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} />
    </label>
    <label className="input-label">Price:
    <br/>
        <input className="input field" type="number" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
    </label>
    <label className="input-label">Category:
    <br/>
        <input className="input field" type="text" placeholder='category' value={category} onChange={(e) => setCategory(e.target.value)} />
    </label>
    <label className="input-label">Image:
    <br/>
        <input className="input field" type="text" placeholder='image' value={image} onChange={(e) => setImage(e.target.value)} />
    </label>
    <button  className="submit-button" type="submit"> Submit </button>
    </form>
   </div>
   </>
  )
} 