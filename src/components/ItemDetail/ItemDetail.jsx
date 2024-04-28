import { useContext, useState } from "react"
import classes from "./ItemDetail.module.css"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

const InputCount = ({ onAdd, stock, initial=1}) => {
    const [ count, setCount] = useState(initial)

    const handleChange = (e) =>{
        if (e.target.value <= stock){
            setCount(e.target.value)
        }
    }

    return(
        <div>
            <input type="number" onChange={handleChange} value={count} />
            <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onAdd, stock, initial=1}) => {
    const [ count, setCount] = useState(initial)
        
    const increment = ()=>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    const decrement =()=>{
        if(count > 0 )
            setCount(count - 1)

        }
    


    return(
        <div>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button onClick={increment}>+</button>
        </div>
    )
}



const ItemDetail = ({ id, name, category, price, img, stock, description}) => {
    const [inputType, setInputType] = useState('button')

    // const [quantity, setQuantity] = useState(0)

    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        // setQuantity(quantity)

        addItem(objProductToAdd)
    }

    return(
         <article>
            <button onClick={()=> setInputType(inputType === 'input' ? 'button' : 'input')}>Cambiar input/Button</button>
            <h4>Categoria: {category}</h4>
            <h2>{name}</h2>
            <img src={img} className={classes.image}/>
            <h4 className={classes.price}>Precio: ${price}</h4>
            <h4>Descripcion: {description}</h4>
            <footer>
                {
                    !isInCart(id) ?(
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
            )
        }
export default ItemDetail