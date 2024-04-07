import classes from "./ItemListContainer.module.css"
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useSearchParams } from "react-router-dom"

const ItemListContainer = (props) => {
    const [products, setProducts]=useState([])
    const { categoryId} = useSearchParams()

    useEffect(() => {
        const asyncFunction= categoryId? getProductsByCategory : getProducts
    
        asyncFunction(categoryId) //me retorna una promesa
                .then(result => {//metodo then para manejar la promesa
                    setProducts(result);
                })
                .catch(error => {//siempre poner que hacer en caso de error
                    console.log(error);
                })
    }, [categoryId])
    
  
    return(
        <div>
            <h2 className={classes.ContenedorSaludo}>{props.Greetings}</h2>
            <ItemList products={products}/>
        </div>
    )

}

export default ItemListContainer