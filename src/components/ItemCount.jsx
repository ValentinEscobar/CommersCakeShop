import React from 'react'
//Importe de Hook de React
import { useState } from 'react'
//Importe de componente de la libreria de Chakra
import {Button} from '@chakra-ui/react'


const ItemCount = () => {

    const [contador, setContador] = useState(0)
    
    //Declaro Suma Para agregar 1 cada vez que precione el boton "+"
    const suma=()=>{
        //si contador es menor al stock de productos (10) agrego 1
        if (contador < 10)
        setContador (contador + 1)
    }

    //Declaro Resta Para restar 1 cada vez que precione el boton "-"
    const resta=()=>{
        //si contador chekea que la cantidad de productos seleccionados es mayores a 0 resta 1 
        if (contador > 0)
        setContador (contador - 1)
    }

  return (
    <div>
        <Button colorScheme='teal' size='xs' onClick={suma}>
            +
        </Button>
        <Button>
            Agregar al Carrito {contador}
        </Button>
        <Button colorScheme='teal' size='xs' onClick={resta}>
            -
        </Button>
    </div>
  )
}

export default ItemCount