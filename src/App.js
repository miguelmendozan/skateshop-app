import './App.css';
//React Router DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Componentes
import NavBar from './components/navBar/NavBar';

// Pages
import Home from "./Pages/Home/Home"
import Skateboarding from "./Pages/Skateboarding/Skateboarding"
import Ropa from "./Pages/Ropa/Ropa"
import Zapas from "./Pages/Zapas/Zapas"
import UserDetail from './Pages/UserDetail/UserDetail';
import Cart from './Pages/Cart/Cart';
import CartContextProvider from './Context/CartContext';


function App() {
  return (
    <CartContextProvider>
    <Router>
    <div className="App">
     <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Skateboarding' element={<Skateboarding />}/>
        <Route path='/Zapas' element={<Zapas />} />
        <Route path='/Ropa' element={<Ropa />} />
        <Route path='/product-detail/:id' element={<UserDetail />} />
        <Route path='/Cart' element={<Cart/>} />
      </Routes>
    </div>
    </Router>
    </CartContextProvider>
  );
}
export default App;
