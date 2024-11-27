import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Carrousel from './components/Carrousel';
import Cards from './components/cards';
import Products from './components/products';
import Ofertas from './components/ofertas';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Carrousel />
      <Cards />
      <Products />
      <Ofertas />
      <Footer />
    </div>
  );
}

export default App;
