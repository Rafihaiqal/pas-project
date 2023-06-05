import React from 'react'
import ItemData from './ItemData'

const ListData = ({ dataList, onDelete }) => {
  return (
    <ul className='container-data'>
      {
        dataList.map((item) => {
          return <ItemData {...item} key={item.id} id={item.id} onDelete={onDelete} />
        })
      }
    </ul>
  )
}

export default ListData