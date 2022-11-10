import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import TopBar from './components/TopBar/TopBar';
import SearchWidget from './components/SearchWidget/SearchWidget';
import './fontawesome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar greeting="Despacho gratis por compras sobre $50.000 CLP" />
        <header>
          <NavBar />
          <SearchWidget />
        </header>
        <main className="container-lg">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryid"
              element={<ItemListContainer />}
            />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route
              path="*"
              element={
                <h3 className="text-center">
                  404: Ups!, la información que buscas no se encuentra aquí.
                </h3>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
