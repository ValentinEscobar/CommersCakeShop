import React, {useEffect, useState} from 'react'
//Importe de ItemDetail
import ItemDetail from './ItemDetail.jsx'
//Importe de hook de react router 
import { useParams } from 'react-router-dom'
//document aqui
import {doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [product, setProduct] = useState([])

  useEffect(()=>{
    const db = getFirestore()

    const oneItem= doc(db, "Pasteleria", `${id}`)

    getDoc(oneItem).then((snapshot)=> {

      if (snapshot.exists()){
        const doc = snapshot.data()
        setProduct(doc)

      }
    })
  })

  //funcion que busca el producto seleccionado en la ruta
  const productoFlitrado = product.find((product) => product.id == id )

    //return de de la card detallada del producto seleccionando
  return (
    <div>
      <ItemDetail products={productoFlitrado}/>
    </div>
  )
}

export default ItemDetailContainer