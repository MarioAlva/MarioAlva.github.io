import React, { Component } from 'react'
import '../css/Event.css'
import { useParams } from "react-router-dom"
import * as eventService from '../services/EventServices'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet';
import send from '../assets/img/send.svg'




export default class Eventpage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			likeHover: 0,
			like: false,
			dislike: false,
			rate: 0,
			event: Event,
			lat: 0,
			lng: 0,
			comment: '',
		};
	}

	// componentDidMount() {
	// 	loadEvent(id);
	// }
	render() {
		const queryParameters = new URLSearchParams(window.location.search)
 		 const id = queryParameters.get("id")
	const iconPerson = new L.Icon({
		iconUrl: require('../assets/img/pin.png'),
		iconRetinaUrl: require('../assets/img/pin.png'),
		iconSize: new L.Point(40, 45),
		className: ''
	});	
	const loadEvent = async (id) => {
		await eventService.getEvent(id).then((res) => {
			this.setState({event: res.data});
			this.setState({lat: res.data.lat});
			this.setState({lng: res.data.lng});
		});
	  }
	const addComment = async (id, owner, comment) => {
		if(comment === '') return;
		await eventService.addComment(id, owner, comment, this.state.rate);
		await eventService.getEvent(id).then((res) => {
			this.setState({event : res.data});
		});
		(document.getElementById("comment_textArea")).value = '';
	}	
	function setComment (){
		this.setState({comment: (document.getElementById("comment_textArea")).value});
	}
	async function participateEvent(id, owner){
		await eventService.addParticipant(id, owner);
		await eventService.getEvent(id).then((res) => {
			this.setState({event: res.data});
		});
	}
    return (
		<div className="event-container">
			<div className="event-header">
				<img src={this.state.event?.image} alt="pictures" width="100%"/>
			</div>
			<div className="event-body">
				<div className="event-bodyHeader">
					<span className='event-title'>{this.state.event?.title}</span>
					<span className='event-author'>Author</span>
				</div>
				<hr />
				<div className="event-description">
					<span>{this.state.event?.description}</span>
				</div>
				<div className="event-buttons">
					<button className="event-button" style={{backgroundColor: "#001D48"}} onClick={() => participateEvent(id, localStorage.getItem('user'))}>Participate</button>
					<button className="event-button" style={{backgroundColor: "#4D0000"}}>Report</button>
				</div>
				<div className='attendance-container'>
					{this.state.event?.participants.map((participant) => {
						return (
						<div>
							<div>{participant.username}</div>
						</div>
					)})}
				</div>
				<div className="event-map">
					<MapContainer center={[this.state.lat, this.state.lng]} zoom={16} scrollWheelZoom={false} zoomControl={false} doubleClickZoom={false}>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker icon={iconPerson} position={[this.state.lat, this.state.lng]}>
						</Marker>
					</MapContainer>
				</div>
			</div>
			<div className="event-footer">
				<div className="event-valoration">
					<div className="mid-rating"></div>
					<div className="valorations-graphic">
						<div className="valoration-graphic"></div>
						<div className="valoration-graphic"></div>
						<div className="valoration-graphic"></div>
						<div className="valoration-graphic"></div>
						<div className="valoration-graphic"></div>
					</div>
				</div>
				<div className="event-comments">
					<span className='comments-title'>Comments</span>
					<div className='event-center' style={{flexDirection: "row", backgroundColor: "white", borderRadius: "10px"}}>
						<button className='comment-button' onClick={() => addComment(id, localStorage.getItem('user'), this.state.comment)}>
							<img src={send} width="70%" alt="send" />
						</button>
						<textarea onChange={setComment} id="comment_textArea" style={{borderRight: "1px solid gray"}}>
						</textarea>
						<div className='comment-rating' style={{width: "150px"}}>
							<svg onClick={() => {this.setState({dislike: false}); this.setState({like: !this.state.like}); if(this.state.rate === 0)this.setState({rate: 1}); else this.setState({rate: 0});}} onMouseEnter={() => this.setState({likeHover: 1})} onMouseLeave={() => this.setState({likeHover: 0})} className='comment-like' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
								<path fill={this.state.likeHover > 0 || this.state.like ? '#079629' : '#8f8f8f'} d="M348.45,432.7H261.8a141.5,141.5,0,0,1-49.52-8.9l-67.5-25.07a15,15,0,0,1,10.45-28.12l67.49,25.07a111.79,111.79,0,0,0,39.08,7h86.65a14.21,14.21,0,1,0,0-28.42,15,15,0,0,1,0-30H368.9a14.21,14.21,0,1,0,0-28.42,15,15,0,0,1,0-30h20.44a14.21,14.21,0,0,0,10.05-24.26,14.08,14.08,0,0,0-10.05-4.16,15,15,0,0,1,0-30h20.45a14.21,14.21,0,0,0,10-24.26,14.09,14.09,0,0,0-10-4.17H268.15A15,15,0,0,1,255,176.74a100.2,100.2,0,0,0,9.2-29.33c3.39-21.87-.79-41.64-12.42-58.76a12.28,12.28,0,0,0-22.33,7c.49,51.38-23.25,88.72-68.65,108a15,15,0,1,1-11.72-27.61c18.72-8,32.36-19.75,40.55-35.08,6.68-12.51,10-27.65,9.83-45C199.31,77,211,61,229.18,55.34s36.81.78,47.45,16.46c24.71,36.36,20.25,74.1,13.48,97.21H409.79a44.21,44.21,0,0,1,19.59,83.84,44.27,44.27,0,0,1-20.44,58.42,44.27,44.27,0,0,1-20.45,58.43,44.23,44.23,0,0,1-40,63Z"/>
								<path fill={this.state.likeHover > 0 || this.state.like ? '#079629' : '#8f8f8f'} d="M155,410.49H69.13a15,15,0,0,1-15-15V189.86a15,15,0,0,1,15-15H155a15,15,0,0,1,15,15V395.49A15,15,0,0,1,155,410.49Zm-70.84-30H140V204.86H84.13Z"/>
							</svg>
							<svg onClick={() => {this.setState({dislike: !this.state.dislike}); this.setState({like: false}); if(this.state.rate === 0)this.setState({rate: -1}); else this.setState({rate: 0});}} onMouseEnter={() => this.setState({likeHover: -1})} onMouseLeave={() => this.setState({likeHover: 0})} className='comment-like' style={{transform: "rotate(180deg)"}} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
								<path fill={this.state.likeHover < 0 || this.state.dislike ? '#960707' : '#8f8f8f'} d="M348.45,432.7H261.8a141.5,141.5,0,0,1-49.52-8.9l-67.5-25.07a15,15,0,0,1,10.45-28.12l67.49,25.07a111.79,111.79,0,0,0,39.08,7h86.65a14.21,14.21,0,1,0,0-28.42,15,15,0,0,1,0-30H368.9a14.21,14.21,0,1,0,0-28.42,15,15,0,0,1,0-30h20.44a14.21,14.21,0,0,0,10.05-24.26,14.08,14.08,0,0,0-10.05-4.16,15,15,0,0,1,0-30h20.45a14.21,14.21,0,0,0,10-24.26,14.09,14.09,0,0,0-10-4.17H268.15A15,15,0,0,1,255,176.74a100.2,100.2,0,0,0,9.2-29.33c3.39-21.87-.79-41.64-12.42-58.76a12.28,12.28,0,0,0-22.33,7c.49,51.38-23.25,88.72-68.65,108a15,15,0,1,1-11.72-27.61c18.72-8,32.36-19.75,40.55-35.08,6.68-12.51,10-27.65,9.83-45C199.31,77,211,61,229.18,55.34s36.81.78,47.45,16.46c24.71,36.36,20.25,74.1,13.48,97.21H409.79a44.21,44.21,0,0,1,19.59,83.84,44.27,44.27,0,0,1-20.44,58.42,44.27,44.27,0,0,1-20.45,58.43,44.23,44.23,0,0,1-40,63Z"/>
								<path fill={this.state.likeHover < 0 || this.state.dislike ? '#960707' : '#8f8f8f'} d="M155,410.49H69.13a15,15,0,0,1-15-15V189.86a15,15,0,0,1,15-15H155a15,15,0,0,1,15,15V395.49A15,15,0,0,1,155,410.49Zm-70.84-30H140V204.86H84.13Z"/>
							</svg>
						</div>
					</div>
					<div style={{overflowY: "scroll", maxHeight: "600px"}}>
					{this.state.event?.comments.map((comment, index) => {
						return (
							<div key={comment._id} className='each-comment' style={{width: "84%"}}>
								<div style={{width:"100%", padding: "0 2%"}}>
									{comment.content}
								</div>
								<div className='comment-rating' style={{width: "150px", height: "100%", display: "flex", justifyContent: "space-around"}}>
									<svg style={comment.likes === 1 ? {} : comment.likes === -1 ? {transform: "rotate(180deg)"} : {transform: "rotate(-90deg)"}} className='comment-like' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
										<path fill={comment.likes === 1 ? '#079629' : comment.likes === -1 ? '#960707' : '#8f8f8f'} d="M348.45,432.7H261.8a141.5,141.5,0,0,1-49.52-8.9l-67.5-25.07a15,15,0,0,1,10.45-28.12l67.49,25.07a111.79,111.79,0,0,0,39.08,7h86.65a14.21,14.21,0,1,0,0-28.42,15,15,0,0,1,0-30H368.9a14.21,14.21,0,1,0,0-28.42,15,15,0,0,1,0-30h20.44a14.21,14.21,0,0,0,10.05-24.26,14.08,14.08,0,0,0-10.05-4.16,15,15,0,0,1,0-30h20.45a14.21,14.21,0,0,0,10-24.26,14.09,14.09,0,0,0-10-4.17H268.15A15,15,0,0,1,255,176.74a100.2,100.2,0,0,0,9.2-29.33c3.39-21.87-.79-41.64-12.42-58.76a12.28,12.28,0,0,0-22.33,7c.49,51.38-23.25,88.72-68.65,108a15,15,0,1,1-11.72-27.61c18.72-8,32.36-19.75,40.55-35.08,6.68-12.51,10-27.65,9.83-45C199.31,77,211,61,229.18,55.34s36.81.78,47.45,16.46c24.71,36.36,20.25,74.1,13.48,97.21H409.79a44.21,44.21,0,0,1,19.59,83.84,44.27,44.27,0,0,1-20.44,58.42,44.27,44.27,0,0,1-20.45,58.43,44.23,44.23,0,0,1-40,63Z"/>
										<path fill={comment.likes === 1 ? '#079629' : comment.likes === -1 ? '#960707' : '#8f8f8f'} d="M155,410.49H69.13a15,15,0,0,1-15-15V189.86a15,15,0,0,1,15-15H155a15,15,0,0,1,15,15V395.49A15,15,0,0,1,155,410.49Zm-70.84-30H140V204.86H84.13Z"/>
									</svg>
								</div>
								<div style={{width: "auto", padding: "0 2%", borderLeft: "1px solid #000", display: "flex", justifyContent: "center"}}>
									<a href={'/profile/' + comment.owner._id}>{comment.owner.username}</a>
								</div>
							</div>
						)
					})
					}
					</div>
				</div>
			</div>
		</div>
			
    )
	}
}