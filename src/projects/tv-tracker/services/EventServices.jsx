import axios from 'axios'
// import {Event} from '../models/Event'

//const API = 'https://api1.tvtracker.tk/api/events/'
const API = 'http://localhost:5432/api/events/'

export const RegisterEvent = async (event) => {
    return await axios.post(`${API}`,event, {
        headers: {
            "x-access-token": localStorage.getItem('token'),
            }
      })
}
export {}

export const getAllEvents = async () => {
    return await axios.get(`${API}`, {
		headers: {
            "x-access-token": localStorage.getItem('token')
        }
	});
}

export {}

export const delEvent = async (id) => {
    return await axios.delete(`${API}${id}`);
}
export {}

export const updateUser = async (event) => {
    return await axios.put(`${API}${event._id}`, event);
}
export {}

export const getEvent = async (id) => {
    return await axios.get(`${API}${id}`, {
        headers: {
            "x-access-token": localStorage.getItem('token')
            
            }
      });
}

export const addComment = async (id, owner, comment, rate) => {
	return await axios.post(`${API}${id}/comments`, {owner: owner, content: comment, likes: rate});
}

export const addParticipant = async (id, owner) => {
	return await axios.post(`${API}${id}/join`, {id: owner});
}

export {}

