import React from 'react'
//Importe de CartWidget
import CartWidget from './CartWidget'
//Importe de componentes de Libreria de estilos Chakra
import { Flex, Spacer, Box, Menu, MenuButton, MenuItem, MenuList, Button, } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div> 
      <Flex bgGradient='linear(to-r, yellow.100, pink.200)' alignItems='center'>
        <Box p='4'>
        <img src="src/components/LogoReposteriaEscoba.png" 
              alt="Logo"
              style={{
                width: '80px'
              }}
              />
        </Box>
        <Spacer />
          <Button colorScheme='pink'>
              Ingredientes
          </Button>
        <Spacer />
        <Button colorScheme='pink'>
              Colorantes
          </Button>
        <Spacer />
          <Menu>
            <MenuButton as={Button} colorScheme='pink' >
              Utensilios
            </MenuButton>
            <MenuList>
              <MenuItem>Cajas</MenuItem>
              <MenuItem>Moldes</MenuItem>
              <MenuItem>Bandejas</MenuItem>
            </MenuList>
          </Menu>
        <Spacer />
        <Box p='5'>
          <CartWidget />
        </Box>
      </Flex>
        
        
    </div>
  )
}

export default NavBar