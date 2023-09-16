import React, { Component } from 'react'
import '../css/Events.css'
import { useEffect, useState } from 'react'
import * as eventService from '../services/EventServices'
import Moment from 'react-moment'
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

export default class Events extends Component {
	constructor(props) {
		super(props);
		this.state = {
			eventList: [Event],
		};
	}
	render() {
	const iconPerson = new L.Icon({
		iconUrl: require('../assets/img/pin.png'),
		iconRetinaUrl: require('../assets/img/pin.png'),
		iconSize: new L.Point(40, 45),
		className: ''
	});
	// const navigate = useNavigate();
	const loadEvents = async () => {
		const res = await eventService.getAllEvents();
		this.setState({eventList: res.data});
	  }
	
	function createEventScreen() {
		// navigate("/event/create");
	}

	// useEffect(() => {
	// 	loadEvents()
	//   }, [])

	function gotoevent(id) {
		// navigate("/event/" + id);
	}

	return (
        <div className="eventscreen-container">
			<div className="eventscreen-titles">
				<span>Eventos</span>
				<button onClick={createEventScreen} className='event-createEvent'><div className='event-createmore'>+</div><span className='text-createEvent'> Crear evento</span></button>
			</div>
			<div className='event-eventsContainer'>
				<div style={{width: "50%", overflowY: "scroll", overflowX: "hidden"}}>
					{this.state.eventList.map((event) => (
						<div onClick={() => gotoevent(event._id)} className="eventscreen-card">
							<div style={{width: "100%", display: "inline-flex"}}>
								<div style={{overflow: "hidden", width: "min(200px, 30%)", display: "flex", justifyContent: "center", alignItems: "center"}}>
									<img src={event.image}  height="78%" alt="eventPic"></img>
								</div>
								<div style={{width: "100%", marginTop: "24px", marginLeft: "20px"}}>
									<div className="eventscreen-card-title">{event.title}</div>
									<div className="eventscreen-card-description">{event.description}</div>
									<div className="eventscreen-card-date">
										<Moment fromNow ago>{event.date?.toLocaleString("en-US")}</Moment>
									</div>
								</div>
							</div>
						</div>
					))}

				</div>
				<div style={{width: "50%"}}>
				<MapContainer center={[41.275188, 1.986412]} zoom={14} scrollWheelZoom={true}>
  					<TileLayer
    					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  					/>
					{this.state.eventList.map((event) => (
					<Marker icon={iconPerson} position={[0, 0]}>
    					<Popup>
     						A pretty CSS3 popup. <br /> Easily customizable.
    					</Popup>
  					</Marker>
					))}
				</MapContainer>
				</div>
			</div>

		</div>
    )
	}
}