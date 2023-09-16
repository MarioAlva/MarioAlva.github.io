import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
import TVTHome from '../projects/tv-tracker/components/Home';
import TVTProfile from '../projects/tv-tracker/components/Profile';
import TVTSearch from '../projects/tv-tracker/components/Search';
import TVTEvents from '../projects/tv-tracker/components/Events';
import TVTConfiguration from '../projects/tv-tracker/components/Configuration';
import navOptions from '../projects/tv-tracker/assets/data/navOptions';
import Logout from '../projects/tv-tracker/assets/img/logout.png';
import login from '../projects/tv-tracker/assets/img/login.png';
import Logo from '../projects/tv-tracker/assets/img/logo.png';


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


	function logout(){
		localStorage.removeItem("token");
		window.location.assign('/login');
	}
  
	const token = localStorage.getItem('token');
	const theme = localStorage.getItem('theme') || 'dark';
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
    	

		{/* TV TRACKER */}

		{window.location.href.includes("tv-tracker") &&
		<div className={`nav-container-${theme}`}>
		<div className="nav-logo">
				<Link to="/" key="home">
					<img style={{marginLeft: "13px", marginTop: "20px", marginBottom: "18vh"}} width={40} src={Logo} alt="logo" />
				</Link>
		</div>
		<div className="nav-options">
		  {navOptions.map((option, index) => (
			(option.auth === true && token) || option.auth === false  ? 
			  <Link to={"/tv-tracker" + option.path} key={index}>
			  <div className="nav-option">
				<img className='navBar-imageOptions' src={option.icon} alt={option.name} />
				<div className='navBar-optionName'>{option.name}</div>
			  </div>
			</Link> : null
		  ))}
		</div>
		  {token === null ? <Link className='logOut-navBar nav-option' style={{height: "auto", padding: "10px 0"}} to="/login" key="login">
			  <img className='navBar-imageOptions' src={login} alt="user" />
			  <div className='navBar-optionName'>Log in</div>
		  </Link>:	
		  <div onClick={logout} className='logOut-navBar nav-option' style={{height: "auto", padding: "10px 0"}}>
			  <img className='navBar-imageOptions' src={Logout} alt="user" />
			  <div className='navBar-optionName'>Log out</div>
		  </div>
		  }
		  
	  </div>
		}
		
    		<Routes>
    	  		<Route path='/' element={<Projects />} />
				<Route path='/siembra-sana' element={<SiembraSana />} />
				<Route path='/siembra-sana/shop' element={<SSShop />} />
				<Route path='/siembra-sana/contact' element={<SSContact />} />
				<Route path='/siembra-sana/about' element={<SSSobreNosotros />} />
				<Route path='/siembra-sana/prensa' element={<SSPrensa />} />
				<Route path='/siembra-sana/product' element={<SSProduct />} />
				<Route path='/tv-tracker' element={<TVTHome />} />
				<Route path='/tv-tracker/profile/:id' element={<TVTProfile />} />
				<Route path='/tv-tracker/search' element={<TVTSearch />} />
				<Route path='/tv-tracker/event' element={<TVTEvents />} />
				<Route path='/tv-tracker/config' element={<TVTConfiguration />} />
    		</Routes>

		{/* SIEMBRA SANA */}
		{window.location.href.includes("siembra-sana") &&
		<SSFooter />
		}
	</div>
  );
}

export default App;
