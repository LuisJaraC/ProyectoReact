import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"
import { collection, query, where, documentId, getDocs, QuerySnapshot, writeBatch, addDoc, Timestamp } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import classes from "./checkout.module.css"

const Checkout = () =>{
    const { cart, total, clearCart}= useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)

    const [buyerName, setbuyerName] = useState()
    const [buyerPhone, setbuyerPhone] = useState()
    const [buyerAdress, setbuyerAdress] = useState()
    const [buyerEmail, setbuyerEmail] = useState()
    

    const createOrder = async () =>{
        try{
            setLoading(true)
             const objOrder = {
                date: Timestamp.fromDate(new Date()),
                buyer: {
                    Nombre: buyerName,
                    Telefono: buyerPhone,
                    Email: buyerEmail,
                    Direccion: buyerAdress
                },
                items: cart,
                total
        };

        const batch = writeBatch(db)
        const outOfStock = []
        const ids = cart.map(prod => prod.id)

        const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
        
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
        });
        
        if(outOfStock.length === 0 ){
            batch.commit()

            const orderCollection = collection(db, 'orders')
            const { id } = await addDoc(orderCollection, objOrder)

            
            setOrderId(id)
            clearCart()
        }else{
            alert('Hay productos que no tienen stock disponible')
        }
        } catch(error){
            console.error(error)
            alert('Hubo un error en la generacion de su orden');
        }finally{
            setLoading(false)
        }
};
 
    if(loading) {
   return <h1>Tu orden esta siendo generada!</h1>
    }

    if(orderId){
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <section className={classes.target} >
            <h1>Resumen de tu orden</h1>
            <h3>Ingresa tus datos para generar la orden</h3>
            <div className={classes.datos}>
                <label htmlFor="buyerName">Nombres y Apellido:</label>
                <input type="text" id="buyerName" value={buyerName} onChange={e => setbuyerName(e.target.value)} />

                <label htmlFor="buyerPhone">Teléfono:</label>
                <input type="text" id="buyerPhone" value={buyerPhone} onChange={e => setbuyerPhone(e.target.value)} />

                <label htmlFor="buyerAddress">Dirección de Entrega:</label>
                <input type="text" id="buyerAddress" value={buyerAdress} onChange={e => setbuyerAdress(e.target.value)} />

                <label htmlFor="buyerEmail">Email:</label>
                <input type="text" id="buyerEmail" value={buyerEmail} onChange={e => setbuyerEmail(e.target.value)} />
            </div>
            <h2>$ {total}</h2>
            <button className={classes.button} onClick={createOrder}>Generar orden</button>
        </section>
    );
};

export default Checkout