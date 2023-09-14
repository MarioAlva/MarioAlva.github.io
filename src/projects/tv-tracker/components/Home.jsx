import React, { useEffect, useState, Component }  from 'react';
import '../css/Home.css';
import '../css/App.css';
import * as serieService from "../services/SerieServices";
import SerieList from "./SerieList";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			series: [],
		};
	}
	render() {

	const loadSeries = async () => {
		const series = await serieService.getAllSeries();
		this.setState({series: series.data});
    	this.setState({loading: false});
  	};

	// useEffect(() => {
	// 	loadSeries();
	// }, []);


	function backCarrousel() {
		let carrousel = document.getElementById("carrousel");
		if (carrousel) {
			carrousel.scrollLeft -= 300;
		}
	}

	function nextCarrousel() {
		let carrousel = document.getElementById("carrousel");
		if (carrousel) {
			carrousel.scrollLeft += 300;
		}
	}

	// if (this.state.loading)
    // return (
    //   <div className="row">
    //     <div className="col-md-12 my-auto">
    //       <div className="spinner-grow text-primary" role="status">
    //         <span className="sr-only">Loading...</span>
    //       </div>
    //     </div>
    //   </div>
    // );

//   if (this.state.series.length === 0) return <div>there are no series yet</div>;

    return (
        <div className="home-container">
			<div className="home-header">
			</div>
			<div className="home-titles">Series</div>
			<div id="carrousel" style={{display: "inline-flex", height: "210px"}}>
				<div onClick={() => backCarrousel()} className="home-arrowCarrousel">
					<svg style={{transform: "scaleX(-1)"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
					</svg>

				</div>
				<div className="home-carrousel">
					{this.state.series.map((serie) => (
						<SerieList serie={serie} key={serie._id} loadSeries={loadSeries} />
					))}
				</div>
				<div onClick={() => nextCarrousel()} className="home-arrowCarrousel">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
					</svg>
				</div>
			</div>
		</div>
    )
	}
}