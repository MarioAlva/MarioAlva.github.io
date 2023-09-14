import React, { Component } from 'react'
import '../css/Event.css'
// import Serie from '../models/Serie'
import * as serieService from '../services/SerieServices'
import { useNavigate } from "react-router-dom"

  class Props {
    serie;
    loadSeries;
  }

  
  export default class SerieList extends Component {
    constructor(props) {
        super(props);
    }
    render () {
	  // const navigate = useNavigate();
        const handleDelete = async (id) => {
        await serieService.delSerie(id);
        this.props.loadSeries();
      };

	  const clickSerie = () => {
		// navigate(`/serie/${this.props.serie._id}`);
	  };
    return(
      <div onClick={clickSerie} className="col-md-4 p-2" style={{width: "130px", height: "95%", margin: "0 5px", backgroundColor: "#3a3a3a", borderRadius: ".4vw", overflow: "hidden" }}>
      <div
        className="card card-body video-card animate__animated animate__backInUp"
        style={{ cursor: "pointer", height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} 
        
        //onClick={() => history.push(`/update/${video._id}`)}
      >
        <img height="100%" src={this.props.serie.poster_path + ''} alt="poster" />
      </div>
    </div>
    )
  }
}