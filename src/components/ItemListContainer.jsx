import React from 'react'
//Importe de ItemList
import ItemList from './ItemList.jsx'
//Importe de hook de react router 
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  //hook para leer parametro de la ruta y poder utilizar CategoryId
  const {categoryId} = useParams ()

  //array de productos
  const productos = [
    {id: 1, categoria: "asadera", titulo:"Asadera Grande", descripcion:"Asadera Rectangular para tortas cuadradas de 30cm x 40cm", precio: 100},
    {id: 2, categoria: "asadera", titulo:"Asadera pequeña", descripcion:"Asadera Rectangular para tortas cuadradas de 20cm x 30cm", precio: 200},
    {id: 3, categoria: "asadera", titulo:"Asadera Redonda", descripcion:"Asadera redonda desmontable de 24cm de diametro", precio: 300},
    {id: 4, categoria: "decoracion", titulo:"Perlas multicolor", descripcion:"Perlas de colores rojo, azul, amarillo y verde 4mm 100g", precio: 400},
    {id: 5, categoria: "decoracion", titulo:"Perlas Color Plata", descripcion:"Perlas de color Plata 6mm 50g", precio: 500},
    {id: 6, categoria: "cajas", titulo:"Caja cupcakes mediana", descripcion:"Caja blanca para dos cupcakes con cara transparente ", precio: 600},
    {id: 7, categoria: "cajas", titulo:"Caja blanca Cuadrada", descripcion:"Caja Blanca para tortas y tartas cuadradas 30cm(A) x 30cm(L) x 15cm(H)", precio: 700}
  ]

  //verificacion de si productos contiene elementos
  const mostrarProductos = new Promise((resolve, reject) => {
    //si productos tiene elemenos mostar los productos con una demora de 3 segundos
    if (productos.lenght > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 3000)
    } else {
      reject("No se obtuvieron productos")
    }
  })

  mostrarProductos
    .then((resultado) => {
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })

    //filtrado de productos segun la categoria deseada
  const productosFiltrados = productos.filter((productos) => productos.categoria == categoryId)

  //ternario que comprueba si se a seleccionado alguna categoria para mostrarlo. si ninguna categoria esta seleccionada muestra todos los productos de mi array
  return (
    <div>
      {
        categoryId ? <ItemList productos ={productosFiltrados}/> : <ItemList productos ={productos}/>
      }
    </div>
  )
}

export default ItemListContainer