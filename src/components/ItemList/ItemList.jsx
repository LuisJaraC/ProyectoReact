import Item from "../Item/Item"
import classes from "./ItemList.module.css"

const ItemList =({ products })=>{
    return(
    <div className={classes.cards}>
        {
            products.map((product) => { //key siempre va dentro del map
                return <Item key={product.id} {...product}/>  //exparcir siempre y cuando coincide el nombre con el de la propiedad    
                })
        }
    </div>)
}

export default ItemList