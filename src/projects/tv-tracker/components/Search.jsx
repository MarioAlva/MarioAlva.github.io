import React, { useState, useEffect, Component } from 'react'
import '../css/Search.css'
import Filter from '../assets/img/filter.png'
import filterOptions from '../assets/data/filterOptions'
import * as serieService from '../services/SerieServices'
import { useNavigate } from 'react-router-dom'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            filter: false,
            filterList: [],
            info: [],
        };
    }
    render() {
	// const navigate = useNavigate();

	const loadSeries = async () => {
		const series = await serieService.getAllSeries();
		this.setState({series: series.data});
  	};

	// useEffect(() => {
	// 	loadSeries();
	// }, []);

    let filteredInfo = this.state.info.filter((event) => {
        if (this.state.filterList.includes("All")) {
            return event
        } else if (this.state.filterList.length === 0) {
            return event.title.toLowerCase().includes(this.state.search.toLowerCase())
        } else {
            return event.title.toLowerCase().includes(this.state.search.toLowerCase()) && this.state.filterList.every((tag) => event.genres.includes(tag))
        }
    })

	const clickSerie = (index) => {
		// navigate(`/serie/${info[index]._id}`);
	};

    return (
        <div className='search-container'>
            <div style={{display: "flex", justifyContent: "center"}}>
                <input onChange={(e) => this.setState({search: e.target.value})} placeholder='Search...' type="text" />
            </div>
            <div className='filter-container'>
                <div className='filter' onClick={() => this.setState({filter: !this.state.filter})}>
                    <img src={Filter} height="25" alt="filter" />
                    <p style={{marginLeft: "5px", fontSize: "20px"}}>Filter</p>
                </div>
                <div className='filter-modal' style={this.state.filter ? {display: "block"} : {display: "none"}}>
                    {this.state.filterOptions.map((option, index) => {
                        return (
                            <div style={this.state.filterList.includes(option.label) && (!this.state.filterList.includes("All") || option.label === "All") ? {border: "1px solid rgb(0 52 234)"} : {border: "1px solid rgb(163, 163, 163)"}} key={index} onClick={(e) => {
								if (!this.state.filterList.includes(option.label)) {
                                    if(this.state.filterList.includes("All")) {
                                        this.setState({filterList: ["All"]})
                                    } else{
									    this.setState({filterList: [...this.state.filterList, option.label]})
                                    }
								} else {
									this.setState({filterList: this.state.filterList.filter(item => item !== option.label)})
								}
							}
							}>
                                <span>{option.label}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='series-container'>
                {filteredInfo.map((item, index) => {
                    return (
                        <div onClick={() => clickSerie(index)} className='series-one' key={index}>
                            <img height="100%" src={item.poster_path + ''} alt="series" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
    }
}