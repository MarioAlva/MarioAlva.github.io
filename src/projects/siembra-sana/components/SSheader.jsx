import React, { Component } from 'react';
import logo from '../img/logo.png';
import app from '../img/app.png';
import carrito from '../img/carrito.png';
import "../css/Header.css"

export default class SSHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sideBar: false,
			cesta: false
		}
	}
	render() {
		return(
			<div className="ss-header-contents">
			<div className='ss-header-left'>
				<a href='/'><img height="85px" src={logo} alt="siembrasana" /></a>
			</div>
			<div className='ss-header-center'>
				<nav className='ss-header-navBar'>
					<a className='ss-header-each-navBar' href='/siembra-sana'><div className='ss-header-option'>Inicio</div></a>
					<a className='ss-header-each-navBar' href='/siembra-sana/shop'><div className='ss-header-option'>Tienda</div></a>
					<a className='ss-header-each-navBar' href='/siembra-sana/about'><div className='ss-header-option'>Nosotros</div></a>
					<a className='ss-header-each-navBar' href='/siembra-sana/contact'><div className='ss-header-option'>Contacto</div></a>
					<a className='ss-header-each-navBar' href='/siembra-sana/prensa'><div className='ss-header-option'>Prensa</div></a>
				</nav>
			</div>
			<div className='ss-header-right'>
				<a href="/siembra-sana/cesta">
				<img
					className='ss-shopping-cart'
					onMouseEnter={() => this.setState({"cesta": true})}
					onMouseLeave={() => this.setState({"cesta": false})}
					width="32px"
					src={carrito}
					alt="comprar" />
				</a>
				<div
					className='ss-header-cesta-container'
					onMouseEnter={() => this.setState({"cesta": true})}
					onMouseLeave={() => this.setState({"cesta": false})}
					style={this.state.cesta ? {opacity: "1", visibility: "visible", marginBottom: "-125px"}: {opacity: "0"}}
				>
					<div className='ss-header-cesta'>
						{this.props.cesta.length > 0 ? this.props.cesta.map((item, index) => {
							return(
								<div key={index} className='ss-header-cesta-item'>
									<div className='ss-header-cesta-item-img'>
										<img width="50px" src={item.img} alt={item.name} />
									</div>
									<div className='ss-header-cesta-item-info'>
										<div className='ss-header-cesta-item-name'>{item.name}</div>
										<div className='ss-header-cesta-item-price'><span>{item.quantity} x </span>{item.price}€</div>
									</div>
								</div>
							)
						}) : <div className='ss-header-cesta-item'>No hay productos en la cesta</div>
						}
					</div>
				</div>
				<div className='ss-sidebar-button' onClick={() => this.setState({"sideBar": true})}>
					<img width="50px" src={app} alt="more..." />
				</div>
			</div>
			<div
				className={this.state.sideBar ? 'ss-header-sidebar-container header-opacity-1' : 'ss-header-sidebar-container'}
				onClick={() => {this.setState({"sideBar": false})}}
				style={this.state.sideBar ? {opacity: "1"}: {animation: "opacityReverse 0.7s ease-in-out", opacity: "0"}}>
			</div>
			<div className={this.state.sideBar ? 'ss-header-sidebar header-marginRight-0' : 'ss-header-sidebar'}></div>
		</div>
		)
	  }
}