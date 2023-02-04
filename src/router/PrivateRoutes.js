import Navbar from "../components/Navbar";
import Home from '../components/Home';
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Cart from "../components/Cart";
import { Routes, Route, Navigate } from "react-router-dom"
import Checkout from "../components/Checkout";

const PrivateRoutes = () => {

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={ <ItemListContainer /> }/>
                <Route path="/home" element={ <Home/> }/>
                <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
                <Route path="/item/:itemId" element={ <ItemDetailContainer />} />
                <Route path="/cart" element={ <Cart /> }/>
                <Route path="/checkout" element={ <Checkout /> }/>
                <Route path="*" element={ <Navigate to={"/"}/> }/>
            </Routes>  
        </>
    )
}

export default PrivateRoutes