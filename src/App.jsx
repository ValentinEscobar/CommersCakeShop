import React from 'react'
// Importe los componentes de rutas y navegacion de react Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Importe del Componente Navbar
import NavBar from './components/Navbar'
//Importe de ItemListContainer
import ItemListContainer from './components/ItemListContainer'
//Importe de ItemDetailContainer
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
//Importe de CartContext
import CartContext from './context/CartContext.jsx'
import Cart from './components/Cart.jsx'




const App = () => {
  //todas las rutas de mi aplicacion web y el llamado para mostrar el respectivo componente 
  return (
    
 <BrowserRouter>
      <CartContext>
      <NavBar />
      <Routes>
        <Route exact path = '/' element = {<ItemListContainer />}/>
        <Route exact path = '/cart' element = {<Cart />}/>
        <Route exact path = '/item/:id' element = {<ItemDetailContainer />}/>
        <Route exact path = '/category/:categoryId' element = {<ItemListContainer />}/>
      </Routes>
      </CartContext>
  </BrowserRouter>
    
  ) 
}

export default App 
