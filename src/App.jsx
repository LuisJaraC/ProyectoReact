import Navbar from "./components/Navbar/NavBar"
import classes from "./App.module.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <h1 className={classes.textotitulo} >Tienda GameYa!</h1>
          <Routes>
            <Route path ='/' element= {<ItemListContainer Greetings="Bienvenidos jugadores!"/>} />
            <Route path='/category/:categoryId'  element= {<ItemListContainer Greetings="Juegos de: "/>} />
            <Route path='/category/:categoryId'  element= {<ItemListContainer Greetings="Juegos de: "/>} />
            <Route path='/category/:categoryId'  element= {<ItemListContainer Greetings="Juegos de: "/>} />
            <Route path ='/item/:itemId' element= {<ItemDetailContainer />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
