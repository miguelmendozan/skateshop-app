import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import imagenes from './components/Pictures/Pictures';
function App() {
  return (
    <div className="App">
     <NavBar/>
      <header >
        <ItemListContainer greeting='¡Bienvenidos a TheSkateShop!' img={imagenes.pic1}/>
      </header>
    </div>
  );
}
export default App;
