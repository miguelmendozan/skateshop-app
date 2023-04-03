import './App.css';
//React Router DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Componentes
import NavBar from './components/navBar/NavBar';

// Pages
import Home from "./Pages/Home/Home"
import Skates from "./Pages/Skates/Skates"
import Marcas from "./Pages/Marcas/Marcas"
import Zapas from "./Pages/Zapas/Zapas"
import UserDetail from './Pages/UserDetail/UserDetail';


function App() {
  return (
    <Router>
    <div className="App">
     <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Skates' element={<Skates />}/>
        <Route path='/Zapas' element={<Zapas />} />
        <Route path='/Marcas' element={<Marcas />} />
        <Route path='/product-detail/:id' element={<UserDetail />} />
      </Routes>
    </div>
    </Router>
  );
}
export default App;
