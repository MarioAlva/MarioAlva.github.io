import React, { Component } from 'react';
import "../css/Footer.css";
import logoWhite from "../img/logoWhite.png";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import mail from "../img/email.png";
import worldWide from "../img/worldWide.png";
import footerLabel from "../img/footerLabel.png";

export default class appFooter extends Component {
	render() {
		return(
			<div className='footer-container'>
				<div className='footer-black-opacity'>
					<div className='footer-info-container'>
						<div className='footer-description'>
							<img className='footer-logo-white' width="200px" src={logoWhite} alt="" />
							<p className='footer-description-text'>Elige una vida saludable con nuestra tienda en línea, donde encontrarás alimentos orgánicos y naturales, suplementos y productos ecológicos. Apoya a tu cuerpo y al medio ambiente con cada compra.</p>
							<div className='footer-buttons'>
								<div className='footer-socialMedia-button'><a href="https://www.facebook.com/SiembraSana.es/"><img width="20px" src={facebook} alt="Facebook" /></a></div>
								<div className='footer-socialMedia-button'><a href="https://www.instagram.com/siembrasana.es/"><img width="15px" src={instagram} alt="Instagram" /></a></div>
							</div>
						</div>
						<div className='footer-about'>
							<h4 style={{color: "white"}}>SOBRE NOSOTROS</h4>
							<div className='footer-link'><a className='footer-each-link' href="/siembra-sana/about">Acerca de la compañía</a></div>
							<div className='footer-link'><a className='footer-each-link' href="/siembra-sana/shop">Productos</a></div>
						</div>
						<div className='footer-links'>
							<h4 style={{color: "white"}}>ENLACES DE INTERÉS</h4>
							<div className='footer-link'><a className='footer-each-link' href="/siembra-sana/shop">Tienda</a></div>
							<div className='footer-link'><a className='footer-each-link' href="/siembra-sana/shop">Mi cuenta</a></div>
							<div className='footer-link'><a className='footer-each-link' href="/siembra-sana/shop">Términos y Condiciones</a></div>
							<div className='footer-link'><a className='footer-each-link' href="/siembra-sana/shop">Política de Privacidad</a></div>
							<div className='footer-link'><a className='footer-each-link' href="/siembra-sana/shop">Contacto</a></div>
							<div className='footer-link'><a className='footer-each-link' href="/siembra-sana/shop">Reportajes</a></div>
						</div>
						<div className='footer-contact'>
							<h4 style={{color: "white"}}>CONTACTOS</h4>
							<div className='footer-link'><img height="20px" style={{margin: "0 6px 0 0"}} src={mail} alt="mail" />comercial@siembrasana.es</div>
							<div className='footer-link'><img height="20px" style={{margin: "0 6px 0 0"}} src={worldWide} alt="world wide" />www.siembrasana.es</div>
							<p className='footer-address'>Barcelona, España</p>
						</div>
					</div>
					<div className='footer-bottom-container'>
						<div className='footer-bottom'>
							<p className='footer-bottom-text'>© 2023 Siembra Sana. Todos los derechos reservados.</p>
							<img height="60px" src={footerLabel} alt="Footer Label" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}