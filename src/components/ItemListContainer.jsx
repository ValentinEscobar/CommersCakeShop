import React from 'react'
import { Center } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <Center>
        <p>{greeting}</p>
      </Center>
    </div>
  )
}

export default ItemListContainer