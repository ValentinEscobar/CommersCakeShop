import React from 'react'
//Importe de Item
import Item from './Item'

const ItemList = ({products}) => {
  
  //map que recorre y muestra una card con su contenido por cada item que tenga en el array de productos
  return (
    <div>
      {
        products.map((p)=>{
            return(
                <Item 
                    key={p.id}
                    titulo ={p.titulo}
                    descripcion ={p.descripcion}
                    precio ={p.precio}
                    id={p.id}
                />
            )
        })
      }
    </div>
  )
}

export default ItemList