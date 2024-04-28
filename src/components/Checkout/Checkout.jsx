import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"
import { collection, query, where, documentId, getDocs, QuerySnapshot, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import classes from "./checkout.module.css"

const Checkout = () =>{
    const { cart, total, clearCart}= useContext(CartContext)
    const {loading, setLoading} = useState(false)
    const {orderId, setOrderId} = useState(null)

    const createOrder = async (userData) =>{
        try{
             const objOrder = {
            buyer: {userData},
            items: cart,
            total
        }

        const batch = writeBatch(db)
        const outOfStock = []
        const ids = cart.map(prod => prod.id)

        const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
        
        // getDocs(productsCollection)
        //     .then(QuerySnapshot => )
        const QuerySnapshot = await getDocs(productsCollection)
        const { docs } = QuerySnapshot

        docs.forEach(doc => {
            const data = doc.data()
            const stockDb = data.stock

            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart.quantity

            if(stockDb >= prodQuantity){
                batch.update(doc.ref, { stock: stockDb - prodQuantity })
            }else {
                outOfStock.push({ id: doc.id, ...data})
            }
        })
        
        if(outOfStock.length === 0 ){
            batch.commit()

            const orderCollection = collection(db, 'orders')
            const { id } = await addDoc(orderCollection, objOrder)

            clearCart()
            setOrderId(id)
        }else{
            alert('Hay productos que no tienen stock disponible')
        }
        } catch{
            alert('Hubo un error en la generacion de su orden');
        }finally{
        setLoading(false)
        }
}
 
    if(loading) {
   return <h1>Tu orden esta siendo generada!</h1>
}

    if(orderId){
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <div className={classes.target} >
            <h1>Checkout</h1>
            <h3>Formulario</h3>
            <button className={classes.button} onClick={createOrder}>Generar orden</button>
        </div>
    )
}

export default Checkout