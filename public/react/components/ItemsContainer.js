import React, {useEffect, useState} from 'react';
import apiURL from '../api';
import { Link } from 'react-router-dom'
import apiURL from '../api';
import { SearchBar } from './SearchBar';


export const Items = () => {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')

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

  let itemsRegex = new RegExp(query, "i")

  const filterItems = () => {
    if(query.length > 2) {
      let itemsSearched = [...items].filter(item =>
        itemsRegex.test(item.name))
        setItems(itemsSearched)
    } else if (query.length < 2) {
      fetchItems()
    }
  }

  useEffect(() => {
    filterItems()
  }, [query])

  const DeleteItem = async (itemId) => {
    try {
      const res = await fetch(`${'../api'}/items/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {

        setItems(items.filter((item) => item.id !== id));
        console.log('Item deleted !');
      } else {
        console.log('Unable to delete item');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full lg:px-20'>
        <h2 className='flex flex-col text-2xl font-bold tracking-tight text-blue-500 mb-10 ml-5'>Items Available 
          <span>
              {/* Seatch Input */}
              <SearchBar
                query={query}
                setQuery={setQuery}
              />
            </span>
          </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-20 gap-y-8 lg:gap-y-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map((item) => (
            <div key={item.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={item.image} alt="Item Image" 
                  className="h-[20em] w-full object-cover object-center lg:h-full lg:w-full" />
              </div>

              <div className='mt-4 flex justify-between'>
                <div>
                  <Link to={`${item.id}`}>
                    <h3 className='text-sm text-gray-700'>
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        {item.name}
                    </h3>
                  </Link>
                </div>
                <p className='text-sm font-medium text-gray-900'>${item.price}</p>
              </div>

              <button
                onClick={() => DeleteItem(item.id)}
                className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-red-600'>
                Delete
              </button>
            </div>
				))}
        </div>
      </div>
    </div>
  )
} 
