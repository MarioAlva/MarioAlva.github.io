import React, { Component } from 'react'
import { useNavigate } from "react-router-dom"
import * as userService from '../services/UserServices'
import { useEffect, useState } from 'react'
import Moment from 'react-moment'
import '../css/UpdateUser.css'
import jwt_decode from "jwt-decode";


const MyForm = () => {
    const [fileData, setFileData] = useState()
    const fileSelectedHandler = (event) => {
        let file = event.target.files[0].name;
        setFileData({
            selectedFile: event.target.files[0],
            filename: event.target.value
        })
    }

    const fileUploadHandler = (event) => {
        let formData = new FormData();
        formData.append('filename', fileData.filename);
        formData.append('file', fileData.selectedFile);

        fetch('http://localhost:5432/api/users/update-image/63c03a4b12436d8c8cf03813', {
            method: 'POST',
            body: formData,
            // headers: { 'content-type': 'multipart/form-data' }
        }).then(res => res.json())
        .then(res => console.log())
    }

    return (<div>
        <input
            type="file"
            name="file"
            id="file"
            placeholder="Upload your file"
            onChange={fileSelectedHandler}
        />
        <br />
        <button
            type="submit"
            onClick={fileUploadHandler}
        >Upload pick</button>

    </div>)
}
class MyToken {
    id;
    email;
    iat;
    exp;
  }
export default class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            selectedFile: null,
            users: [],
            exists: false,
            show: false,
        };
    }
    render() {
    // let series : any[] = [];
    let clickUpdate = true
    // const navigate = useNavigate();
    // const handleClick = () => navigate('/profile/' + user?._id);
    const handleClick = () => {return false};
    // const handleClick2 = () => navigate('/updateUserValues');
    const handleClick2 = () => {return false};
	const token = localStorage.getItem('token');
	let decoded = jwt_decode(token);
	const idUser = decoded.id;
    const loadUser = async () => {
        const user = await userService.getProfile(idUser);

        const getUser = user.data;
        this.setState({user: getUser});
    }
    // useEffect(() => {
    //     loadUser()
    // }, [])

    return (
        <div className="update-user-container">
            <form action="UpdateUser" className="update-user" style={clickUpdate ? { marginLeft: "0vw", paddingBottom: "20px" } : { paddingBottom: "20px", width: "450px" }}  >
                <span className="update-user-header">Profile</span>
                <p>
                    <strong>Name:</strong> {this.state.user?.name}
                </p>
                <p>
                    <strong>Username: </strong>{this.state.user?.username}
                </p>
                <p>
                    <strong>Email: </strong>{this.state.user?.email}
                </p>
                <p>
                    <strong>Birthdate: </strong>
                    <Moment format="D MMM YYYY" withTitle>{this.state.user?.birthdate}</Moment>
                </p>
                <div className='update-image'>
                    <MyForm />
                </div>
                <button className="update-user-button" onClick={handleClick2}><b>Update Profile</b></button>
                <div style={{ width: "62%", display: "inline-flex", justifyContent: "center", marginBottom: "20px" }}>
                    <div style={{ marginRight: "4%", display: "flex", flexDirection: "column", width: "62%" }}>
                    </div>
                </div>
                {/* <div className="back-button" style={registerView || forgot ? {marginRight: "280vw"} : {}} onClick={() => {setRegister(false); setForgot(false)}}>
            </div> */}
                <div className="back-button" style={{ marginRight: "280vw" }} onClick={handleClick}>
                </div>
                {/* <button className="create-event-button" onClick={() => sendCreateEvent()}><b>Crear Evento</b></button> */}
            </form>
        </div>
    )
    }
}