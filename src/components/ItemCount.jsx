import React from 'react'
//Importe de uso de context
import { useContext } from 'react'
//importe del context de mi proyecto
import { CartContext } from '../context/CartContext'
//Importe de componente de la libreria de Chakra
import {Button} from '@chakra-ui/react'


const ItemCount = () => {

    const {sumar, restar, contador } = useContext(CartContext)


    //funcion que recibe la cantidad y el item para enviar al carrito
    

    //boton para sumar y restar cantidad de un mismo producto y el boton que controla el evento para hacer el push al carrito
  return (
    <div>
        <Button colorScheme='teal' size='xs' onClick={sumar}>
            +
        </Button>
        <Button onClick={""}>
            Agregar al Carrito {contador}
        </Button>
        <Button colorScheme='teal' size='xs' onClick={restar}>
            -
        </Button>
    </div>
  )
}

export default ItemCount