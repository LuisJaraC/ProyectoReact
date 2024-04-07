import ItemCount from "../ItemCount/ItemCount"
import classes from "./ItemDetail.module.css"

const ItemDetail = ({ name, category, price, img, stock}) => {
    return(
         <article>
            <h4>Categoria: {category}</h4>
            <h2>{name}</h2>
            <img src={img} className={classes.image}/>
            <h4 className={classes.price}>Precio: ${price}</h4>
            <ItemCount stock={stock}/>
        </article>
            )
        }
export default ItemDetail