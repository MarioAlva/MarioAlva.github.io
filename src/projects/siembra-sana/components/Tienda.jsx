import React, { Component } from 'react';
import '../css/Shop.css';
import ShopCard from './ShopCard';
import macaRoyaleWomanItem from '../img/macaRoyaleWomanItem.png';

export default class Shop extends Component {
	render() {
		return(
			<div style={{display: "flex", justifyContent: "center"}}>
				<div className='about-header-container'>
					<div className='about-black-opacity'>
						<div className='about-header'>
							<h2 className='about-header-title'>Tienda</h2>
							<div><h4 className='about-header-subtitle'><a className='about-header-link' href="/">Siembra Sana</a> <div style={{fontSize: "14px", margin: "0 10px"}}>></div> Tienda</h4></div>
						</div>
					</div>
				</div>
				<div className='shop-container'>
					<div className='shop-left'>
						<div className='shop-filter-container'>
							<span style={{color: "#777777"}}>Mostrando todos los 2 resultados</span>
							<select className='shop-filter-select' name="Filter" id="filter" placeholder='Orden por defecto'>
								<option value="default">Orden por defecto</option>
								<option value="price">Ordenar por popularidad</option>
								<option value="price">Ordenar por putuación media</option>
								<option value="price">Ordenar por los últimos</option>
								<option value="price">Ordenar por precio: bajo a alto</option>
								<option value="price">Ordenar por precio: alto a bajo</option>
							</select>
						</div>
						<div style={{display: "flex", flexWrap: "wrap"}}>
							<ShopCard
								className='carrousel-card'
								img={macaRoyaleWomanItem}
								title="CHOCOLATE BAR DARK 70% / BARRA DE CHOCOLATE 70% BITTER"
								price="5,22 €"
								rating="4"
							/>
							<ShopCard />
							<ShopCard />
							<ShopCard />
							<ShopCard />
							<ShopCard />
							<ShopCard />
							<ShopCard />
						</div>
					</div>
					<div className='shop-right'>
						<div className='shop-search-container'>
							<h4 className='shop-title'>BÚSQUEDA</h4>
							<div className='shop-search'>
								<svg width="22px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 51.539 51.361">
		        				     <path fill='#777777a2 ' d="M51.539,49.356L37.247,35.065c3.273-3.74,5.272-8.623,5.272-13.983c0-11.742-9.518-21.26-21.26-21.26 S0,9.339,0,21.082s9.518,21.26,21.26,21.26c5.361,0,10.244-1.999,13.983-5.272l14.292,14.292L51.539,49.356z M2.835,21.082 c0-10.176,8.249-18.425,18.425-18.425s18.425,8.249,18.425,18.425S31.436,39.507,21.26,39.507S2.835,31.258,2.835,21.082z"></path>
								</svg>
								<input className='shop-search-input' type="text" />
							</div>
						</div>
						<div className='shop-filter-price-container'>
							<h4 className='shop-title'>FILTRAR POR PRECIO</h4>
							<div className='shop-filter-price'>
								
							</div>
						</div>
						<div className='shop-categories-container'>
							<h4 className='shop-title'>CATEGORÍAS</h4>
							<div className='shop-categories'>
									<li><span>ACEITES</span></li>
									<li><span>AGUAYMANTO</span></li>
									<li><span>CACAO</span></li>
									<li><span>CAMU CAMU</span></li>
									<li><span>CHOCOLATES</span></li>
									<li><span>ENDULZANTES</span></li>
									<li><span>MACA PARA HOMBRE</span></li>
									<li><span>MACA PARA MUJER</span></li>
									<li><span>PULPAS</span></li>
									<li><span>SAL</span></li>
									<li><span>VINAGRE</span></li>
							</div>
						</div>
						<div className='shop-recently-container'>
							<h4 className='shop-title'>PRODUCTOS VISTOS RECIENTEMENTE</h4>
							<div className='shop-recently'>
								<div className="shop-each-recently">
									<img style={{margin: "0 29px"}} height="90px" src={macaRoyaleWomanItem} alt="" />
									<div>
										<h4 className='shop-recently-title'>CHOCOLATE BAR DARK 70% / BARRA DE CHOCOLATE 70% BITTER</h4>
										<span className='shop-recently-price'>5,22€</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}