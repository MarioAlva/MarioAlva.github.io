import axios from 'axios'
// import {User} from '../models/User'
import jwt_decode from "jwt-decode";

//const API = 'https://api1.tvtracker.tk/api/users/'
const API = 'http://localhost:5432/api/users/'

class MyToken {
    id;
    email;
    iat;
    exp;
  }
export const RegisterUser = async (user) => {
    // user.avatar = profileimg;
    return await axios.post(`${API}register`,user)
}
export {}

export const LoginUser = async (user) => {
    //return await axios.post(`https://api1.tvtracker.tk/api/auth/login`,user).then(res => {
    return await axios.post(`http://localhost:5432/api/auth/login`,user).then(res => {
            let token = res.data.token;
           	localStorage.setItem('user', res.data.session.id);
            localStorage.setItem('token', token);
            return res;
    }).catch(err =>  {
        delete axios.defaults.headers.common["Authorization"];
        return null;
    });
}
export {}

export const getProfile = async (id) => {
    return await axios.get(`${API}profile/${id}`);
}
export {}

export const getAllUser = async () => {
    return await axios.get(`${API}`);
}

export {}

export const delUser = async (id) => {
    return await axios.delete(`${API}/${id}`);
}
export {}

export const updateUser = async (user) => {
    const token = localStorage.getItem('token');
    let decoded = jwt_decode(token);
    const iduserupdate = decoded.id;
    return await axios.put(`${API}/${iduserupdate}`, user);

}
export {}

export const getUser = async (id) => {
    return await axios.get(`${API}profile/${id}`);
}
export {}

export const addSerieFav = async (idUser, idSerie) => {
    return await axios.put(`${API}/addserie/${idUser}/${idSerie}`);
}
export {}

export const delSerie = async (idUser, idSerie) => {
    return await axios.put(`${API}/delserie/${idUser}/${idSerie}`);
}
export {}

export const getOneUser = async (username) => {
    return await axios.get(`${API}/${username}`);
}

export const addComment = async (idUser, owner, comment, rate) => {
	return await axios.put(`${API}addcomment/${idUser}`, {content: comment, owner: owner, likes: rate});
}

export const updateImage = async (idUser, image) => {
	return await axios.post(`${API}profile/${idUser}/upload`, {'image': image});
}

export {}