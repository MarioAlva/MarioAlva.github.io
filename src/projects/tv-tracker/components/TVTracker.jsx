import { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import navOptions from "../assets/data/navOptions";
import login from "../assets/img/login.png";
import Logout from "../assets/img/logout.png";
import Logo from "../assets/img/logo.png";

export default class BacktoProjects extends Component {
	render() {
		function logout(){
			localStorage.removeItem("token");
			window.location.assign('/login');
		}
	  
		const token = localStorage.getItem('token');
		const theme = localStorage.getItem('theme') || 'dark';
		return (
	  		<div>
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
							</Link>
						: null
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
				<Outlet />
	  		</div>
		);
  	}
}