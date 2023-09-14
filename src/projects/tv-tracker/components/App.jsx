import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import Home from './Home';
import Login from './Login';
import CreateEvent from './CreateEvent';
import Events from './Events';
import Event from './Event';
import Profile from './Profile';
import UpdateUser from './UpdateUser';
import Serie from './Serie';
import Search from './Search';
import UpdateUserValues from './UpdateUserValues';
import navOptions from '../assets/data/navOptions';
import Logout from '../assets/img/logout.png';
import login from '../assets/img/login.png';
import Report from '../components/Report';
import Config from '../components/Configuration';
import '../css/App.css';

function App() {
  function logout(){
      localStorage.removeItem("token");
      window.location.assign('/login');
  }

	const token = localStorage.getItem('token');
  const theme = localStorage.getItem('theme') || 'dark';
  return (
    // {`nav-container-${theme}`}
    <Router>
    <div className={`main-container-${theme}`}>
        <div className={`nav-container-${theme}`}>
          <div className="nav-logo">
		  	    <Link to="/" key="home">
				      <img style={{marginLeft: "13px", marginTop: "20px", marginBottom: "18vh"}} width={40} src={Logo} alt="logo" />
			      </Link>
          </div>
          <div className="nav-options">
            {navOptions.map((option, index) => (
              (option.auth === true && token) || option.auth === false  ? 
                <Link to={option.path} key={index}>
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
      <div className="content-container">
		<div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/event/create" element={<CreateEvent />}></Route>
            <Route path="/event" element={<Events />}></Route>
            <Route path='/profile/:id' element = {<Profile />}></Route>
            <Route path='/updateUser' element = {<UpdateUser />}></Route>
			      <Route path='/search' element = {<Search />}></Route>
			      <Route path='/serie/:id' element = {<Serie />}></Route>
			      <Route path='/event/:id' element = {<Event />}></Route>
            <Route path='/updateUserValues' element = {<UpdateUserValues />}></Route>
            <Route path='report' element = {<Report />}></Route>
            <Route path='/config' element = {<Config />}></Route>

          </Routes>
		  </div>
      </div>
    </div>
    </Router>
  );
}


export default App;
