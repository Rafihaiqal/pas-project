import React from 'react'
import ItemImage from './ItemImage'
import ItemBody from './ItemBody'
import DeleteButton from './DeleteButton'

const ItemData = ({ image, title, body, id, onDelete }) => {
  return (
    <li className='item-data'>
      <div className="content-data">
        <ItemImage image={image} />
        <ItemBody title={title} body={body} />
      </div>
      <DeleteButton id={id} onDelete={onDelete} />
    </li>
  )
}

export default ItemData