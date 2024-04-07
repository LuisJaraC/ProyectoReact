import CartWidget from '../CartWidget/CartWidget'
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom'


const Navbar=() =>{
    return(
        <header>
            <nav className={classes.navbar}>
                <Link to='/category/PS5' className={classes.accords}>PS5</Link>
                <Link to='/category/XBOX' className={classes.accords}>Xbox</Link>
                <Link to='/category/PC' className={classes.accords}>PC</Link>
                <CartWidget/>
            </nav>
            
        </header>
    )
}

export default Navbar