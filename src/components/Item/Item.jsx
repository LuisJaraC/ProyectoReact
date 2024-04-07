import { Link } from "react-router-dom"
import classes from "./Item.module.css"

const Item = ({ name, img, price, category})=>{
    return(
        <div className={classes.cards}>
            <h4>{category}</h4>
            <h2 className={classes.title}>{name}</h2>
            <img src={img} className={classes.image}/>
            <h3 className={classes.price}>Precio: ${price}</h3>
            <Link to={'/item/${id}'}>Ver detalle</Link>
        </div>
    )
}

export default Item