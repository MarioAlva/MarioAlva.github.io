import React, { Component } from 'react';
import "../css/Cesta.css";

export default class Cesta extends Component {
	render() {
		return(
			<div className='about-container'>
				<div className='about-header-container'>
					<div className='about-black-opacity'>
						<div className='about-header'>
							<h2 className='about-header-title'>CARRITO</h2>
							<div><h4 className='about-header-subtitle'><a className='about-header-link' href="/">Siembra Sana</a> <div style={{fontSize: "14px", margin: "0 10px"}}>></div> Carrito</h4></div>
						</div>
					</div>
				</div>
				<div className='cesta-container'></div>
			</div>
		)
	}
}