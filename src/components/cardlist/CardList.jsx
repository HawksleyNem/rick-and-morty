import React from 'react'
import Card from '../../components/card'

export default function CardList({data = []}) {
  return (
    <div className='cardlist'>
      {data.map(item => <Card key={item.id} character={item}/>)}
    </div>
  )
}