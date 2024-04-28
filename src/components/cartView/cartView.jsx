import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import classes from "./cartView.module.css"
import basura from "../assets/basura.svg"

const CartView = () => {
    const { cart, removeItem } = useContext(CartContext)

    return (
        <div className={classes.target}>
            <h1>Carrito</h1>
            <section>
            {
                cart.map(prod => {
                    return(
                        <article key={prod.id} className={classes.items} >
                            <h2 className={classes.name} >{prod.name}</h2>
                            <button className={classes.eliminate} onClick={()=> removeItem(prod.id)}>
                                <img className={classes.icon} src={basura}/>
                            </button>
                        </article>
                    )
                })
            }
            </section>
            <Link className={classes.button} to='/checkout'>Checkout</Link>
        </div>
    )
}

export default CartView