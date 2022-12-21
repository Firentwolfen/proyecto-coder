import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';
//import Dogs from "./pages/Dogs"
//import Cats from "./pages/Cats"
//import Sheeps from "./pages/Sheeps"
//import Goats from "./pages/Goats"
function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <ItemListContainer gretting="Bienvenido a PokeMartFan"/>
      {/*<Switch>
        <Route path='/' exact component={Dogs} />
        <Route path='/Productos' component={Cats} />
        <Route path='/Contacto' component={Sheeps} />
        <Route path='/RedesSociales' component={Goats} />
  </Switch>*/}
    </Router>
    </div>
  
  );
}

export default App;
