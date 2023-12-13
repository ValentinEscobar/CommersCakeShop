import React from 'react'
// Importe del Componente Navbar
import NavBar from './components/Navbar'
//Importe de ItemListContainer
import ItemListContainer from './components/ItemListContainer'




const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a Reposteria Escoba"}/>
    </div>
  ) 
}

export default App