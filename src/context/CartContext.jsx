import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const CartProvider = ({children}) =>{
    //declaro mi cart y el modificador
    const[cart, setCart ] =useState([])
    //declaro el agregar al carrito
    const addToCart = (producto, contador) => {
        //decalro el item y la cantidad que voy a agregar
        const itemAdd = {producto, contador}
        //declaro el array que creo al ingresar cosas al carrito
        const cartList = [cart]
        //finde de productos para buscar existencia de productos en el carrito
        const cartExist = cart.find((producto) => producto.id === itemAdd)
        //si el producto esta en el carrito le sumo a contador si no esta agrego el producto
        if (cartExist){
            cartExist.contador += contador
        }else{
            cartList.push(itemAdd)
        }
        //modifico el array de cart con el producto que agregue
        setCart([cart.itemAdd])
    }


    const [contador, setContador] = useState(0)
    
    //Declaro Suma Para agregar 1 cada vez que precione el boton "+"
    const sumar=()=>{
        //si contador es menor al stock de productos (10) agrego 1
        if (contador < 10)
        setContador (contador + 1)
    }

    //Declaro Resta Para restar 1 cada vez que precione el boton "-"
    const restar=()=>{
        //si contador chekea que la cantidad de productos seleccionados es mayores a 0 resta 1 
        if (contador > 0)
        setContador (contador - 1)
    }
    //cantidad de productos en mi carrito
    const quantityInCart = () => {
        
    }
 
return(
    <CartContext.Provider value={{sumar, restar, contador, cart, setCart, setContador, addToCart, quantityInCart}}>
        {children}
    </CartContext.Provider>
)
}

export default CartProvider