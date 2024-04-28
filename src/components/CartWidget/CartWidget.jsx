import { useContext } from "react"
import Cart from "../assets/cart.svg"
import classes from "./CartWidget.module.css"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

const CartWidget =()=>{
    const { totalQuantity } = useContext(CartContext)

    return(
         <Link to='/cart' className={classes.carritoLogo}>
                <img className={classes.imagenCarrito} src={Cart}/>
                {totalQuantity}
        </Link>
        
    )
}

export default CartWidget