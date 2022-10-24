
import './App.css';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import CatalogContent from './components/CatalogContent';
import SearchWidget from "./components/SearchWidget";
import './fontawesome'

function App() {
  return (
    <>
      <TopBar greeting="Despacho gratis por compras sobre $50.000 CLP"/>
      <header>
      <SearchWidget />
        <NavBar />
       </header>
      
      <main className="container-lg">
          <CatalogContent greetingCatalog="Hola! este es el listado de productos disponibles"/>
      </main>
    <footer>Pie de página</footer>
    </>
  );
}
export default App;


