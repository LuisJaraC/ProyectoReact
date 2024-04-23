import classes from "./ItemListContainer.module.css"
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts]=useState([])
    const { categoryId} = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
    
        asyncFunction(categoryId) //me retorna una promesa
                .then(result => {//metodo then para manejar la promesa
                    setProducts(result);
                })
                .catch(error => {//siempre poner que hacer en caso de error
                    showNotification("No se pudieron cargar los productos");
                })
    }, [categoryId])
    
  
    return(
        <div>
            <h2 className={classes.ContenedorSaludo}>{ greeting }</h2>
            <ItemList products={products}/>
        </div>
    )

}

export default ItemListContainer