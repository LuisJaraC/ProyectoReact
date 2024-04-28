import classes from "./ItemListContainer.module.css"
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, QuerySnapshot, query, where, orderBy} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts]=useState([])

    const { categoryId} = useParams()

    useEffect(() => {

        const productCollection = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : (
            query(collection(db, 'products'), orderBy('category'))
        )

        getDocs(productCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc=>{
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error=>{
                console.error(error)
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