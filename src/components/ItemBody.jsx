import React from 'react'

const ItemBody = ({ title, body }) => {
  return (
    <div>
        <h1 className='title'>{title}</h1>
        <p className='desc'>{body}</p>
    </div>
  )
}

export default ItemBody