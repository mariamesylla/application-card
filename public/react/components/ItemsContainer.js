import React from 'react';


export const Items = ({items}) => {

  return (
    <div className='items-card'>
      <h3>{items.name}</h3>
      <h4>{items.price}</h4>
    </div>
  )
} 

	