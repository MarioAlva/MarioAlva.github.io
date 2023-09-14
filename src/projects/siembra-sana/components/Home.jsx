import React, { Component } from 'react';
import Button from './Button';
import GreenCard from './GreenCard';
import Carrosel from './Carrousel';
import homeImg from '../img/home-img.png';
import logo from '../img/logo.png';
import healthyMe from '../img/healthyMe.png';
import homeMaca from '../img/homeMaca.png';
import Baby from '../img/baby.png';
import Brain from '../img/brain.png';
import Science from '../img/science.png';
import Health from '../img/health.png';
import HomeCard from './HomeCard';
import macaRoyaleWomanItem from '../img/macaRoyaleWomanItem.png';
import macaRoyaleWomanMaterial from '../img/macaRoyaleWomanMaterial.png';
import macaRoyaleManItem from '../img/macaRoyaleManItem.png';
import macaRoyaleManMaterial from '../img/macaRoyaleManMaterial.png';
import macaWomanCapsulasItem from '../img/macaWomanCapsulasItem.png';
import macaWomanCapsulasMaterial from '../img/macaWomanCapsulasMaterial.png';
import macaManCapsulasItem from '../img/macaManCapsulasItem.png';
import vegancan from '../img/vegancan.jpg';

import "../css/Home.css";

export default class Home extends Component {
	render() {
		return(
			<div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
				<section className='ss-first-section'>
					<p className='ss-subtitle-home'>.. HAZLO POR TI ..</p>
					<h2 className='ss-title-home ss-h2'>EL BIENESTAR COMIENZA CON UNA BUENA ALIMENTACIÓN</h2>
					<div className='ss-all-image'>
						<div style={{height: "60px"}}>
							<Button className="ss-home-buy-button" text='Ir a la tienda' />
						</div>
						<div className='ss-home-front-container'>
							<img className='ss-home-front' src={homeImg} alt="home-img" />
						</div>
					</div>
				</section>
				<div className='ss-home-contributors-container'>
					<img width="300px" src={logo} alt="SiembraSana" /><img width="250px" src={healthyMe} alt="HealthyMe" />
				</div>
				<section className='ss-second-section'>
					<h2 className='ss-title-home ss-h2' style={{fontSize: "50px"}}>MACA ROYALE</h2>
					<div className='ss-home-green-container'>
						<div className='ss-home-green'>
							<div className="ss-home-green-info">
								<GreenCard 
									img={Baby}
									title="MEJORA EN LA FERTILIDAD Y LA LIBIDO"
									description="La maca se ha utilizado tradicionalmente para mejorar la fertilidad y la libido en ambos sexos." 
								/>
								<GreenCard
									img={Brain}
									title="MEJORA EN LA FUNCIÓN COGNITIVA"
									description="Algunos estudios han sugerido que la maca puede mejorar la memoria y la capacidad de aprendizaje en personas mayores."
								/>
								<GreenCard
									img={Science}
									title="EFECTOS SOBRE EL SISTEMA ENDOCRINO"
									description="La maca se ha encontrado que puede ayudar a equilibrar los niveles hormonales, especialmente en las mujeres durante la menopausia y la menstruación."
								/>
								<GreenCard
									img={Health}
									title="PROPIEDADES ANTIINFLAMATORIAS Y ANTIOXIDANTES"
									description="La maca contiene antioxidantes y compuestos antiinflamatorios, lo que podría ayudar a proteger el cuerpo contra el daño celular y mejorar la salud en general."
								/>
							</div>
							<div style={{width: "488px"}}>
								<img src={homeMaca} alt="Maca" />
							</div>
						</div>
					</div>
				</section>
				<section>
					<HomeCard
						number="0"
						primaryImg={macaRoyaleWomanItem}
						secondaryImg={macaRoyaleWomanMaterial}
						title="MACA ROYALE PARA MUJER"
						subtitle="GELATINIZADA"
						description="Existen múltiples marcas de maca, tanto en Europa como en España, sin embargo, pocos saben que son cinco las variedades de maca más usadas (negra, roja, blanca, amarilla y púrpura). Todas ellas aportan beneficios, tanto para hombres como para mujeres, Healthy Me®, en base a las investigaciones científicas que así lo demuestran, ha desarrollado un producto específico único para obtener el máximo beneficio de las propiedades de estas macas para la mujer y así obtener el mejor equilibrio hormonal y mental."
						price="13,74 €"
					/>
					<HomeCard
						number="1"
						primaryImg={macaRoyaleManItem}
						secondaryImg={macaRoyaleManMaterial}
						title="MACA ROYALE PARA HOMBRE"
						subtitle="GELATINIZADA"
						description="Existen múltiples marcas de maca, tanto en Europa como en España, sin embargo, pocos saben que son cinco las variedades de maca más usadas (negra, roja, blanca, amarilla y púrpura). Todas ellas aportan beneficios, tanto para hombres como para mujeres, Healthy Me®, en base a las investigaciones científicas que así lo demuestran, ha desarrollado un producto específico único para obtener el máximo beneficio de las propiedades de estas macas para la mujer y otro distinto para el hombre. Justamente esto es lo que hace única a nuestra Maca Royale."
						price="13,74 €"
					/>
					<HomeCard
						number="2"
						primaryImg={macaWomanCapsulasItem}
						secondaryImg={macaWomanCapsulasMaterial}
						title="MACA ROYALE PARA MUJER CÁPSULAS"
						subtitle="CÁPSULAS VEGETALES"
						description="Existen múltiples marcas de maca, tanto en Europa como en España, sin embargo, pocos saben que son cinco las variedades de maca más usadas (negra, roja, blanca, amarilla y púrpura). Todas ellas aportan beneficios, tanto para hombres como para mujeres, Healthy Me®, en base a las investigaciones científicas que así lo demuestran, ha desarrollado un producto específico único para obtener el máximo beneficio de las propiedades de estas macas para la mujer y así obtener el mejor equilibrio hormonal y mental."
						price="16,25 €"
					/>
					<HomeCard
						number="1"
						primaryImg={macaManCapsulasItem}
						secondaryImg={macaWomanCapsulasMaterial}
						title="MACA ROYALE PARA HOMBRE CÁPSULAS"
						subtitle="CÁPSULAS VEGETALES"
						description="Existen múltiples marcas de maca, tanto en Europa como en España, sin embargo, pocos saben que son cinco las variedades de maca más usadas (negra, roja, blanca, amarilla y púrpura). Todas ellas aportan beneficios, tanto para hombres como para mujeres, Healthy Me®, en base a las investigaciones científicas que así lo demuestran, ha desarrollado un producto específico único para obtener el máximo beneficio de las propiedades de estas macas para la mujer y otro distinto para el hombre. Justamente esto es lo que hace única a nuestra Maca Royale. Tenemos presentaciones en polvo y cápsulas vegetales."
						price="16,25 €"
					/>
				</section>
				<section>
					<Carrosel />
				</section>
				<section className='ss-last-section'>
					<p className='ss-subtitle-home' style={{fontSize: "14px"}}>**PRÓXIMAMENTE**</p>
					<h2 className='ss-title-home ss-h2' style={{fontSize: "60px", marginBottom: "0"}}>VEGANCAN</h2>
					<div className='ss-home-onComings'>
						<img width="100%" src={vegancan} alt="Vegancan" />
					</div>
				</section>
			</div>
		)
	}
}