import React, { SetStateAction, Component } from 'react'
import '../css/Profile.css'
import { useNavigate, useParams } from "react-router-dom"
import * as userService from '../services/UserServices'
import { useEffect, useState } from 'react'
import SerieList from './SerieList';
import * as serieService from '../services/SerieServices'
import send from '../assets/img/send.svg'
import edit from '../assets/img/edit.svg'
import check from '../assets/img/check.svg'
import jwt_decode from "jwt-decode";

class MyToken {
	id;
	email;
	iat;
	exp;
}

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: [],
			series: [],
			events: [],
			comments: [],
			comment: '',
			likeHover: 0,
			like: false,
			dislike: false,
			rate: 0,
			images: [],
			loading: true,
			selectedFile: undefined,
			preview: undefined,
		};
	}

	render() {
    // const navigate = useNavigate();
    // const handleClick = () => navigate('/updateuser');
	const token = localStorage.getItem('token');
	let decoded = jwt_decode(token);
	const idUser = decoded.id;
	const queryParameters = new URLSearchParams(window.location.search)
 	const id = queryParameters.get("id")

    // create a preview as a side effect, whenever selected file is changed
    // useEffect(() => {
    //     if (!selectedFile) {
    //         setPreview(undefined)
    //         return
    //     }

    //     const objectUrl = URL.createObjectURL(selectedFile)
	// 	// @ts-ignore
    //     setPreview(objectUrl)

    //     // free memory when ever this component is unmounted
    //     return () => URL.revokeObjectURL(objectUrl)
    // }, [selectedFile])

    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            this.setState({selectedFile: undefined})
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        this.setState({selectedFile: e.target.files[0]})
    }
	const loadUser = async (id) => {
		const user = await userService.getProfile(id);
        const getUser = user.data;
		this.setState({serie: getUser.serie});
		this.setState({events: getUser.event});
		this.setState({comments: getUser.comment});
        this.setState({user: getUser});
	  }
	
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
	const loadSeries = async () => {
		const series = await serieService.getAllSeries();
		this.setState({series: series.data});
    	this.setState({loading: false});
	};

	function setComment (){
		this.setState({comment: (document.getElementById("comment_textAreaUser")).value});
	}

	const addComment = async (id, owner, comment) => {
		if(comment === '') return;
		await userService.addComment(id, owner, comment, this.state.rate);
		const user = await userService.getProfile(id);
		this.setState({comments: user.data.comment});
		this.setState({like: false});
		this.setState({dislike: false});
		this.setState({rate: 0});
		(document.getElementById("comment_textAreaUser")).value = '';
	}
	
	// useEffect(() => {
	// 	loadUser(id);
	//   }, []);
	function updateImage() {
		const formData = new FormData();
		formData.append('image', this.state.selectedFile);
		userService.updateImage(id, this.state.selectedFile);
	}

    return (
        
        <div className="profile-container">
            <div className="profile-header">
				<form style={{position: "absolute", top:"150px", marginLeft: "-30%", display: "flex", flexDirection: "column"}} action={'http://localhost:5432/api/users/profile/' + id + '/upload'} method="POST" encType="multipart/form-data">
					<label className='label-input' htmlFor="files"><img width="25px" height="25px" src={edit} alt="edit" /></label>
					<input style={{width: "91px", visibility: "hidden", height: "7px"}} id="files" onChange={onSelectFile} type="file" accept="image/*" name="image" />
				    {this.state.selectedFile && <button className='avatar-done' type="submit"><img src={check} alt="done" /></button>}
				</form>
                <div className="profile-image">
            		{this.state.selectedFile ? <img height="100%" src={this.state.preview} alt="profile" /> : <img height="100%" src={'http://localhost:5432/profile/' + this.state.user?._id + '.jpg'} alt="profile" />}
      			</div>
			</div>                        
            <div className="profile-titles">{this.state.user?.username}</div>
            <button className="profile-config-button" /*onClick={handleClick}*/>Configuration</button>
			<div className="profile-body">
				<div className="profile-series">
					<span className='profile-titles'>My Favorites</span><br />
					<div className="profile-series-container">
						{this.state.series[0] ?
						<div id="carrousel" style={{display: "inline-flex", height: "210px", width: "100%"}}>
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
						: <div>No hay favoritos</div>
						}
					</div>
				</div>
				<div className="profile-events">
					<span className='profile-titles'>My Events</span>
					<div className="profile-events-container">
						{this.state.events[0] ? 
						<div id="carrousel" style={{display: "inline-flex", height: "130px", width: "100%"}}>
							<div onClick={() => backCarrousel()} className="home-arrowCarrousel">
								<svg style={{transform: "scaleX(-1)"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
								</svg>
							</div>
							<div className="home-carrousel" style={{height: "120px"}}>
								{this.state.events.map((event) => (
									<div className='each-eventCarrousel'>
										<img width="100%" src={event.image} alt="pictures" />
									</div>
								))}
							</div>
							<div onClick={() => nextCarrousel()} className="home-arrowCarrousel">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
								</svg>
							</div>
						</div>
						: <div>No hay eventos</div>
						}
					</div>
				</div>
				<div className='profile-comments'>
					<span className='profile-titles'>Comments</span>
					{idUser !== id ?
					<div className='event-center' style={{flexDirection: "row", backgroundColor: "white", borderRadius: "10px"}}>
						<button className='comment-button' onClick={() => addComment(id, localStorage.getItem('user'), this.state.comment)}>
							<img src={send} width="70%" alt="send" />
						</button>
						<textarea onChange={setComment} id="comment_textAreaUser" style={{borderRight: "1px solid gray"}}>
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
					: <div></div>
					}
					{this.state.comments[0] ?
					<div className='profile-comments-container'>
						{this.state.comments.map((comment) => (
							<div className='each-comment'>
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
						))}	
					</div>
					: <div>No hay comentarios</div>
					}
				</div>
			</div>
		</div>      
    )
	}
}