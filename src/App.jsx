import Navbar from "./components/Navbar/NavBar"
import classes from "./App.module.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/cartContext"


function App() {


  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <h1 className={classes.textotitulo} >Ecommerce GameYa!</h1>
          <Routes>
            <Route path ='/' element= {<ItemListContainer greeting="Bienvenidos jugadores!"/>} />
            <Route path='/category/:categoryId'  element= {<ItemListContainer Greetings="Juegos de: PS5 "/>} />
            <Route path='/category/:categoryId'  element= {<ItemListContainer Greetings="Juegos de: Xbox"/>} />
            <Route path='/category/:categoryId'  element= {<ItemListContainer Greetings="Juegos de: PC"/>} />
            <Route path ='/item/:itemId' element= {<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
