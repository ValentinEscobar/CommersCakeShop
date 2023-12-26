import React from 'react'
//Importe de componentes de Libreria React Icons
import { AiOutlineShoppingCart } from "react-icons/ai"
//Importe de componentes de la libreria de Chakra
import { Flex, Box, Spacer, } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <div>
      <Flex color='white'>
      <Box flex='1'>
          <AiOutlineShoppingCart />
        </Box>
        <Spacer />
        <Box flex='1' bg='red'>
          0
        </Box>
      </Flex>
    </div>
  )
}

export default CartWidget