import { useEffect, useState } from "react"
import { getProductById} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams} from "react-router-dom"

const ItemDetailContainer =()=>{
const [product, setProducts]= useState(null)
const { itemId } = useParams()

    useEffect(()=>{
        getProductById(itemId)
                .then(result=>{
                    setProducts(result)
                })
    }, [itemId])

    return (
        <main>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </main>
    )
}
export default ItemDetailContainer