import React, { useState, useEffect } from 'react'
import apiURL from '../api'

export const SameCategory = ({categoryCheck}) => { 
    const [items, setItems] = useState([])

    const fetchItems = async()=>{
        try {
            const res = await fetch(`${apiURL}/items`)
            const data = await res.json()
            setItems(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchItems()
    }, []);

    return(
       <>
        {items.map((item) => {
            // if(item.id === idCheck) 0 
            if(item.category === categoryCheck){
                return (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <hr />
                    </div>
                )
            }
        })}
       </> 
    )
}
