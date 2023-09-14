import React, { useEffect, useState, Component } from 'react'
import '../css/Serie.css'
import '../css/Chat.css'
import * as serieService from '../services/SerieServices'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import io from 'socket.io-client';
import * as userService from '../services/UserServices'
import jwt_decode from "jwt-decode";
import send from '../assets/img/send.svg'

const socket = io('http://localhost:3001');

//const socket = io('http://api1.tvtracker.tk');

class MyToken {
    id;
    email;
    iat;
    exp;
  }

export default class Serie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			likeHover: 0,
			like: false,
			dislike: false,
			rate: 0,
			serie: [],
			comment: '',
			comments: [],
			user: [],
			follow: false,
			buttonText: 'Add to favorite',
		};
	}
	render() {
	const queryParameters = new URLSearchParams(window.location.search)
	const id = queryParameters.get("id")
    // const navigate = useNavigate();
	const token = localStorage.getItem('token');
	let decoded = jwt_decode(token);
	const idUser = decoded.id;
    
	const joinRoom = () => {
        if (this.state.user?.username !== "" && this.state.serie?._id !== "") {
          socket.emit("join_room", this.state.serie?._id);
        }
    };

    const loadUser = async () => {
		    const user = await userService.getProfile(idUser);
            const getUser = user.data;
			this.setState({user: getUser});
            const serie = await serieService.getSerie(id);
            this.setState({serie: serie.data});
			this.setState({comments: serie.data.comments});
			const isfollowed = getUser.serie.filter((serie) => serie._id === id);
			if (isfollowed.length > 0)
				this.setState({follow: true});
			else
			this.setState({follow: false});
			joinRoom();
	}
	// useEffect(() => {
	// 	loadUser();
	//   }, [])
   
    const addSerieFav = async () => {
        await userService.addSerieFav(idUser, this.state.serie?._id);
		this.setState({follow: true});
    }
    const delSerie = async () => {
        this.setState({follow: false});
        this.setState({buttonText: 'Add to favorite'});
        await userService.delSerie(idUser, this.state.serie?._id);
    }
	const addComment = async (id, owner, comment) => {
		if(comment === '') return;
		await serieService.addComment(id, owner, comment, this.state.rate);
		const serie = await serieService.getSerie(id);
		this.setState({comments: serie.data.comments});
		this.setState({dislike: false});
		this.setState({like: false});
		this.setState({rate: 0});
		(document.getElementById("comment_textAreaUser") ).value = '';
	}
	function setComment (){
		this.setState({comment: (document.getElementById("comment_textAreaUser")).value});
	}
    
    return (
        <div className='serie-container'>
                <div id='trailer_serie' style={{overflow: "hidden"}} >
					<img src={this.state.serie?.poster_path+""} alt="poster" width="100%"/>
					<div className='favorite-button'>
						<button className={this.state.follow ? 'del-fav-button' : 'add-fav-button'} onClick={this.state.follow ? delSerie: addSerieFav}>{this.state.follow ? 'Remove from favorite' : 'Add to favorite'}</button>
					</div>
					<h1 className='serie-title' style={{zIndex:"100"}}>
                        {this.state.serie?.title}
                    </h1>
                </div>
				<div style={{display: "inline-flex", width: "100%"}}>
                	<div id='serieInfo_container'>
                	    <div id='sinopsis_container'>                        
                	        <h2>Sinopsis:</h2>
                	        <p>{this.state.serie?.overview}</p>
                	    </div>
                	    <div id='chapter_container'>
                	        {this.state.serie?.episodes.map((chapter, index) => {
                	            return (
                	                <div className='chapter'>
                	                    <div className='chapter-title'>
                	                        {index + 1}. {chapter.name}
                	                    </div>
                	                </div>
                	            )
                	        })}
                	    </div>
						<div className='serieComments-container'>
							<span className='profile-titles'>Comments</span>
							<div className='event-center' style={{flexDirection: "row", backgroundColor: "white", borderRadius: "10px", width: "90%"}}>
								<button className='comment-button' onClick={() => addComment(id, localStorage.getItem('user'), this.state.comment)}>
									<img src={send} width="70%" alt="send" />
								</button>
								<textarea onChange={setComment} id="comment_textAreaUser" style={{borderRight: "1px solid gray"}}>
								</textarea>
								<div className='comment-rating' style={{width: "150px", height: "100%", display: "flex", justifyContent: "space-around"}}>
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
							{this.state.comments ?
							<div className='profile-comments-container'>
								{this.state.comments.map((comment) => (
									<div key={comment._id} className='each-comment' style={{width: "73%"}}>
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
							: <div>No hay comentarios.</div>
							}
						</div>          
            		</div>
            		{/* <Chat socket={socket} username={this.state.user?.username}room={this.state.serie?._id}/> */}
				</div>    
        </div>
    )
	}
}