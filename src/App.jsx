import React from 'react'
import NavBar from './NavBar'
import { CartWidget } from './CartWidget'
import { ItemListContainer } from '../ItemListContainer'


const App = () => {
  return (
    <div>
      App
      <NavBar/>
      <CartWidget/>
      <ItemListContainer/>
    </div>
  ) 
}

export default App