import React from 'react';
import { Routes, Route } from "react-router-dom";
import '../css/App.css';
import Projects from './Projects';
import SiembraSanaLayout from '../projects/siembra-sana/components/SiembraSana';
import BacktoProjects from './BackToProjects';
import SiembraSana from '../projects/siembra-sana/components/Home';
import SSShop from '../projects/siembra-sana/components/Tienda';
import SSContact from '../projects/siembra-sana/components/Contacto';
import SSSobreNosotros from '../projects/siembra-sana/components/Nosotros';
import SSPrensa from '../projects/siembra-sana/components/Prensa';
import SSProduct from '../projects/siembra-sana/components/Product';
import TVTrackerLayout from '../projects/tv-tracker/components/TVTracker';
import TVTHome from '../projects/tv-tracker/components/Home';
import TVTProfile from '../projects/tv-tracker/components/Profile';
import TVTSearch from '../projects/tv-tracker/components/Search';
import TVTEvents from '../projects/tv-tracker/components/Events';
import TVTConfiguration from '../projects/tv-tracker/components/Configuration';


function App() {
  return (
	<div className='app'>	
    		<Routes>
    	  		<Route path='/' element={<Projects />} />
				<Route path='/' element={<BacktoProjects />} >
					<Route path='/siembra-sana' element={<SiembraSanaLayout />} >
						<Route index element={<SiembraSana />} />
						<Route path='shop' element={<SSShop />} />
						<Route path='contact' element={<SSContact />} />
						<Route path='about' element={<SSSobreNosotros />} />
						<Route path='prensa' element={<SSPrensa />} />
						<Route path='product' element={<SSProduct />} />
					</Route>
					<Route path='tv-tracker' element={<TVTrackerLayout />} >
						<Route index element={<TVTHome />} />
						<Route path='profile/:id' element={<TVTProfile />} />
						<Route path='search' element={<TVTSearch />} />
						<Route path='event' element={<TVTEvents />} />
						<Route path='config' element={<TVTConfiguration />} />
					</Route>
				</Route>
    		</Routes>
	</div>
  );
}

export default App;
