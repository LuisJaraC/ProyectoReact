import CartWidget from '../CartWidget/CartWidget'
import classes from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'


const Navbar=() =>{
    const navigate = useNavigate()
    return(
        <header>
            <nav className={classes.navbar}>
                <h2 className={classes.logo} onClick={()=> navigate('/')}>Eccomerce Game Ya !</h2>
                <Link to='/category/PS5' className={classes.accords}>PS5</Link>
                <Link to='/category/XBOX' className={classes.accords}>Xbox</Link>
                <Link to='/category/PC' className={classes.accords}>PC</Link>
                <CartWidget/>
            </nav>
            
        </header>
    )
}

export default Navbar