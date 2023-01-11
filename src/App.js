import './App.css';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <div>
         <BrowserRouter>
       <Navbar />
    <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/home" element={ <Home/> }/>
        <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
        <Route path="/item/:itemId" element={ <ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
