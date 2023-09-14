import React, { Component } from 'react';
import '../css/Nosotros.css';

export default class About extends Component {
	render() {
		return(
			<div className='about-container'>
				<div className='about-header-container'>
					<div className='about-black-opacity'>
						<div className='about-header'>
							<h2 className='about-header-title'>NOSOTROS</h2>
							<div><h4 className='about-header-subtitle'><a className='about-header-link' href="/">Siembra Sana</a> <div style={{fontSize: "14px", margin: "0 10px"}}>></div> Nosotros</h4></div>
						</div>
					</div>
				</div>
				<div className='about-sobre-nosotros'>
					<h2 className='about-header-title about-titles'>¿QUIENES SOMOS?</h2>
					<p className='about-header-description'>Somos una empresa peruana, con sede y almacén en Barcelona, que ofrece una línea de SuperFoods orgánicos de alta calidad.
						<br /><br />Entrar en Siembra Sana es adentrarse al corazón profundo del Perú, donde hace cientos de años la fusión de la tierra con la sabiduría del hombre andino logró descubrir sus frutos. Somos hijos de la biodiversidad y de una innovación ancestral privilegiada que hoy se conoce en el mundo como SuperFoods.
						<br /><br />En Siembra Sana honramos el legado de nuestros ancestros, los incas, descubriendo e investigando nuevas plantas apenas conocidas, con propiedades únicas que logran mejorar la salud de todo aquel que los consume.
						<br /><br />Siembra Sana importa directamente desde los andes y la Amazonia Superfoods 100% orgánicos de Alta Calidad, como el Noni, el Yacón, el Camu camu, entre otros, además de los ya reconocidos internacionalmente como la maca, el cacao, el chocolate y el café orgánico.
						<br /><br />Al trabajar con cooperativas de agricultores, garantizamos la alta calidad, frescura y autenticidad de nuestros productos y además contribuimos al desarrollo de las comunidades. De esta manera, estamos orgullosos de ofrecer una alternativa sostenible, responsable y cumplir con los estándares de producción orgánica. Ahora llegamos a Europa, para compartir el legado más grande que tiene el Perú, su tradición y su cultura, con nuestra línea exclusiva de SuperFoods, Healthy Me®, Sano y Sabroso!!  lo mejor de la madre tierra.
					</p>
				</div>
				<div className='about-mision'>
					<h2 className='about-header-title about-titles' style={{textAlign: "end"}}>MISIÓN</h2>
					<p className='about-header-description'>Nuestro propósito es ofrecerles productos nutricionalmente diferenciados y agradables al paladar, que nos permita acercar al consumidor con la naturaleza. Presentando múltiples productos oriundos del Perú a Europa, apoyando el trabajo de cooperativas de agricultores, desarrollo de expertos nutricionales, y el cuidado del medioambiente.
					</p>
				</div>
				<div className='about-mision'>
					<h2 className='about-header-title about-titles'>VISIÓN</h2>
					<p className='about-header-description'>Introducir al mercado europeo alternativas de marcas novedosas que generen un impacto positivo en sus vidas, haciéndolo a través de un negocio sostenible y construyendo un futuro mejor para todos, que marque la diferencia en la vida de las personas y sus mascotas.
					</p>
				</div>
				<div className='about-mision' style={{marginBottom: "80px"}}>
					<h2 className='about-header-title about-titles' style={{textAlign: "end"}}>VALORES</h2>
					<p className='about-header-description'>Compromiso, calidad, trabajo en equipo, honestidad, respeto, voluntad de ser los mejores, responsabilidad personal e inclusión.
					</p>
				</div>
			</div>
		)
	}
}