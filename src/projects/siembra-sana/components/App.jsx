import '../css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from './SSheader';
import AppFooter from './SSfooter';
import Home from './Home';
import Tienda from './Tienda';
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import Prensa from './Prensa';
import Product from './Product';
import Cesta from './Cesta';
import Prueba from './Prueba';
import { useState } from 'react';

function App() {
	const [scrollHeader, setScrollHeader] = useState(false);
	const pop = () => {
		if(window.scrollY > 400){
			setScrollHeader(true);
			const header = document.getElementsByClassName('app-header-fixed')[0];
			try{
				header.setAttribute('style', 'top: 0px;');
			}catch(e){
			}
		}else{
			setScrollHeader(false);
		}
	}
	window.addEventListener('scroll', () => pop());
  return (
    <div className="app">
      <header className="app-header">
		<AppHeader cesta={["hola", "que tal"]}/>
      </header>
	  {scrollHeader && <div className='app-header-fixed'><AppHeader cesta={["hola", "que tal"]} /></div>}
	<BrowserRouter>
    	<Routes>
      		<Route path='/' element={<Home />} />
      		<Route path="shop" element={<Tienda />} />
      		<Route path="contact" element={<Contacto />} />
      		<Route path="about" element={<Nosotros />} />
      		<Route path="prensa" element={<Prensa />} />
      		<Route path="product" element={<Product />} />
			<Route path="cesta" element={<Cesta />} />
			<Route path="prueba" element={<Prueba />} />
    	</Routes>
    </BrowserRouter>
	  <footer>
		<AppFooter />
	  </footer>
    </div>
  );
}

export default App;
