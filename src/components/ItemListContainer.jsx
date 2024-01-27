import React, { useEffect, useState } from 'react'
//Importe de ItemList
import ItemList from './ItemList.jsx'
//Importe de hook de react router 
import { useParams } from 'react-router-dom'
//colecction aqui
import { collection, getDocs, getFirestore } from "firebase/firestore"

const ItemListContainer = () => {

  //hook para leer parametro de la ruta y poder utilizar CategoryId
  const {categoryId} = useParams ()

  
  const [products, setProducts] = useState([])
    
  useEffect(()=> {
      const db = getFirestore()

      const itemCollection = collection(db, "Pasteleria")

      getDocs(itemCollection).then((snapshot)=>{

          const docs = snapshot.docs.map ((doc)=> doc.data())

          setProducts(docs)
      })
  }, [])


    //filtrado de productos segun la categoria deseada
  const productosFiltrados = products.filter((products) => products.categoria == categoryId)

  //ternario que comprueba si se a seleccionado alguna categoria para mostrarlo. si ninguna categoria esta seleccionada muestra todos los productos de mi array 
  return (
    <div>
      {
        categoryId ? <ItemList products ={productosFiltrados}/> : <ItemList products ={products}/>
      }
    </div>
  )
}

export default ItemListContainer