import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import apiURL from '../api';


export const Items = () => {
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

  return (
    <div className='items-card'>
     {items.map((item) => (
        <div key={item.id}>
					<Link to={`${item.id}`}><h3>{item.name}</h3></Link>
          <h3>{item.price}</h3>
          </div>
				))}
    </div>
  )
} 

	