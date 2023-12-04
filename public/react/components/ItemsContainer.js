import React, {useEffect, useState} from 'react';
import apiURL from '../api';


export const Items = () => {
  const [items, setItems] = useState([])
  const fetchItems = async()=>{
		try {
			const res = await fetch(`${apiURL}/items`)
			const data = await res.json()
			setItems(data)
      console.log("items", items)
		} catch (error) {
			console.log(error)
		}
	}
  useEffect(() => {
		fetchItems()
	}, []);
  return (
    <div className='items-card'>
     {items.map((item) => {
        <div>
					<h3 key={item.id}>{item.name}</h3>
          <h3 key={item.id}>{item.price}</h3>
          </div>
				})}
    </div>
  )
} 

	