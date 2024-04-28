import { useEffect, useState } from "react"
// import { getProductById} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams} from "react-router-dom";
import classes from "./ItemDetailContainer.module.css";
import { getDoc, doc, QueryDocumentSnapshot } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer =()=>{
const [product, setProducts]= useState(null)
const { itemId } = useParams()

    useEffect(()=>{
        const productDoc = doc(db, 'products', itemId)

        getDoc(productDoc)
            .then(QueryDocumentSnapshot =>{
                const data = QueryDocumentSnapshot.data()
                const productAdapted = { id: QueryDocumentSnapshot.id, ...data}

                setProducts(productAdapted)
            })
            
            .catch()
        // getProductById(itemId)
        //         .then(result=>{
        //             setProducts(result)
        //         })
    }, [itemId])

    return (
        <main className={classes.itemDetail}>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </main>
    )
}
export default ItemDetailContainer