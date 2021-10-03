import React, { Component } from 'react'
import axios from 'axios'
import config from './config'
import '../components/movie.css'

export class Movie extends Component {
    constructor(){
        super()
        this.state = {
            movie: {}
        }
    }

    componentDidMount(){
        const mid = this.props.match.params.movieId
        const singleMovieUrl = `https://api.themoviedb.org/3/movie/${mid}?api_key=${config.api_key}`
        axios.get(singleMovieUrl)
        .then((response) => {
            console.log(response.data)
            this.setState({
                movie: response.data 
            })
        })
    }

    render() {
        const title = this.state.movie.title
        if( title === undefined){
            return(
            <h1>Loading...</h1>
            )
        }
        

        const movie = this.state.movie
        const imageUrl = `http://image.tmdb.org/t/p/w300${movie.poster_path}`
        return (
            <div className="container movie">
                <img src= {imageUrl}></img>
                <p><b>Title:</b> {movie.title}</p>
                <p><b>Budget:</b>{movie.budget}</p>
                <p><b>Tagline:</b> {movie.original_title}</p>
                <p><b>Overview:</b> {movie.overview}</p>
            </div>
        )
    }
}

export default Movie
