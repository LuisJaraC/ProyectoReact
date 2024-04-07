import Cart from "../assets/cart.svg"
import classes from "./CartWidget.module.css"

const CartWidget =()=>{
    return(
        <a className={classes.carritoLogo}>
            <img className={classes.imagenCarrito} src={Cart}/>
            0
        </a>
    )
}

export default CartWidget