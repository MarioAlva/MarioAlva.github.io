import React, { Component } from 'react';
import { Outlet } from "react-router-dom";
import SSHeader from './SSheader';
import SSFooter from './SSfooter';

export default class SiembraSana extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollHeader: false
		}
	}
	render() {
		const SSpop = () => {
			if(window.scrollY > 350){
				this.setState({scrollHeader: true});
				const header = document.getElementsByClassName('ss-app-header-fixed')[0];
				try{
					header.setAttribute('style', 'top: 0px;');
				}catch(e){
				}
			}else{
				this.setState({scrollHeader: false});
				const header = document.getElementsByClassName('ss-app-header-fixed')[0];
				try{
					header.setAttribute('style', 'top: -90px;');
				}catch(e){
				}
			}
		}
		window.addEventListener('scroll', () => SSpop());
		return (
			<div>
				<header className="ss-app-header">
					<SSHeader cesta={["hola", "que tal"]}/>
				</header>
				<div className='ss-app-header-fixed'><SSHeader cesta={["hola", "que tal"]} /></div>
				<Outlet />
				<SSFooter />
			</div>
		);
	}
}