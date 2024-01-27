import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

const Form = () => {

    const[nombre, setNombre] = useState("")
    const[email, setEmail] = useState("")
    const[orderId, setOrderId] = useState("")

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()

        addDoc(orderCollection, order).then(({ id }) => setOrderId(id))
    }
    const order = {
        nombre,
        email
    }

    const orderCollection = collection(db, "orden")

  return (
    <div>
        <form action="" onsubmit={handleSubmit}>
            <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} value={nombre}/>
            <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
            <button type='submit'>Enviar</button>
        </form>
        <h2>{orderId}</h2>
    </div>
  )
}

export default Form