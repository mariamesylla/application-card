import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import apiURL from '../api';

export const ItemContainer = () => {
    let { id } = useParams()
    const [item, setItem] = useState([])

    const fetchItem = async()=>{
        try {
            const res = await fetch(`${apiURL}/items/${id}`)
            const data = await res.json()
            setItem(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchItem()
    }, [])

  return (
    <>
       <h1>{item.name}</h1>
       <h4>{item.description}</h4>
    </>
  )
} 
	