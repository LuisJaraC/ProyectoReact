import { useContext } from "react"
import Cart from "../assets/cart.svg"
import classes from "./CartWidget.module.css"
import { CartContext } from "../../context/cartContext"

const CartWidget =()=>{

    const { totalQuantity } = useContext(CartContext)

    return(
        <a className={classes.carritoLogo}>
            <img className={classes.imagenCarrito} src={Cart}/>
            {totalQuantity}
        </a>
    )
}

export default CartWidget