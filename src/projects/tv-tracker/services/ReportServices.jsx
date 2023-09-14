import axios from 'axios'
// import {Report} from '../models/Report'


const API = 'http://localhost:5432/api/report/'
//const API = 'https://api1.tvtracker.tk/api/report/'


const sendReport = async (id, report) => {
    return await axios.post(`${API}/${id}`, report)
}

export {sendReport}
