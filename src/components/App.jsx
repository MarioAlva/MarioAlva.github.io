import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../css/App.css';
import Projects from './Projects';
import SSHeader from '../projects/siembra-sana/components/SSheader';
import SSFooter from '../projects/siembra-sana/components/SSfooter';
import SiembraSana from '../projects/siembra-sana/components/Home';
import SSShop from '../projects/siembra-sana/components/Tienda';
import SSContact from '../projects/siembra-sana/components/Contacto';
import SSSobreNosotros from '../projects/siembra-sana/components/Nosotros';
import SSPrensa from '../projects/siembra-sana/components/Prensa';
import SSProduct from '../projects/siembra-sana/components/Product';


function App() {
	const [scrollHeader, setScrollHeader] = useState(false);
	const SSpop = () => {
		if(window.scrollY > 400 && window.location.href.includes("siembra-sana")){
			setScrollHeader(true);
			const header = document.getElementsByClassName('ss-app-header-fixed')[0];
			try{
				header.setAttribute('style', 'top: 0px;');
			}catch(e){
			}
		}else{
			setScrollHeader(false);
		}
	}
	window.addEventListener('scroll', () => SSpop());
  return (
	<div className='app'>
		{!window.location.href.endsWith("/") &&
		<a href="/">
			<div className='back-projects'>
			</div>
		</a>
		}
		{/* SIEMBRA SANA */}

		{window.location.href.includes("siembra-sana") &&  
		<header className="ss-app-header">
			<SSHeader cesta={["hola", "que tal"]}/>
		</header>
		}
		{(scrollHeader && window.location.href.includes("siembra-sana")) && <div className='ss-app-header-fixed'><SSHeader cesta={["hola", "que tal"]} /></div>}
    	
		
		<BrowserRouter>
    		<Routes>
    	  		<Route path='/' element={<Projects />} />
				<Route path='/siembra-sana' element={<SiembraSana />} />
				<Route path='/siembra-sana/shop' element={<SSShop />} />
				<Route path='/siembra-sana/contact' element={<SSContact />} />
				<Route path='/siembra-sana/about' element={<SSSobreNosotros />} />
				<Route path='/siembra-sana/prensa' element={<SSPrensa />} />
				<Route path='/siembra-sana/product' element={<SSProduct />} />
    		</Routes>
    	</BrowserRouter>

		{/* SIEMBRA SANA */}
		{window.location.href.includes("siembra-sana") &&
		<SSFooter />
		}
	</div>
  );
}

export default App;
