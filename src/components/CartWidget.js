import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

const CartWidget = () => {

    const { totalCantidad, cart } = useCartContext()

    return (
        <Link to="/cart" className={ `linknav cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <ShoppingCartIcon></ShoppingCartIcon>
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget