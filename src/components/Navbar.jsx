import React from 'react'
//Importe de CartWidget
import CartWidget from './CartWidget'
//Importe de componentes de la libreria de Chakra
import { Flex, Spacer, Box, Menu, MenuButton, MenuItem, MenuList, Button, } from '@chakra-ui/react'
// Importe el componentes de rutas y navegacion de React Router
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    //Navbar Con el logo, las categorias y el carrito
    <div> 
      <Flex bgGradient='linear(to-r, yellow.100, pink.200)' alignItems='center'>
        <Link to = '/'>
          <Box p='4'>
              <img src="src/components/LogoReposteriaEscoba.png" 
                    alt="Logo"
                    style={{
                      width: '80px'
                    }}
                    />
          </Box>
        </Link>
        <Spacer />
          <Menu>
            <MenuButton as={Button} colorScheme='pink' >
              Utensilios
            </MenuButton>
            <MenuList>
              <Link to={'/category/asadera'}>
                <MenuItem>Asaderas</MenuItem>
              </Link>
              <Link to={'/category/decoracion'}>
                <MenuItem>Decoración</MenuItem>
              </Link>
              <Link to={'/category/cajas'}>
                <MenuItem>Cajas</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        <Spacer />
        <Link to ="/cart">
          <Box p='5'>
            <CartWidget />
          </Box>
        </Link>
      </Flex> 
    </div>
  )
}

export default NavBar