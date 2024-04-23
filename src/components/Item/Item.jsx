import { Link } from "react-router-dom"
import classes from "./Item.module.css"


const Item = ({ id, name, img, price, category})=>{
    return(
        <div className={classes.cards} >
            <h4>{category}</h4>
            <img src={img} className={classes.imagen}/>
            <h2 className={classes.title}>{name}</h2>
            <h3 className={classes.price}>Precio: ${price}</h3>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item