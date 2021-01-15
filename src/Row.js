import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import axios from './axios';
import Poster from './poster';
import './row.css';

const Row = ({title, fetchUrl, isLarge}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData()
        .catch(err => console.log(err));
    }, [fetchUrl]);

    function handleMovieClick(movie){
        console.log(trailerUrl);
        if(trailerUrl){
            setTrailerUrl("");
            setError("");
            
        }else{
            movieTrailer(movie, {id: true}).then(id => {
                setTrailerUrl(id);
                setError("");
            }).catch(err => {
                setError("Movie trailer not found!");
            });
        }
    }

    return ( 
        <div className="row">
            <h2 className="row_title">{title}</h2>
            <div className="row_posters">
                {
                    movies.map((movie,i) => {
                        return <Poster 
                        info={movie} 
                        key={i} 
                        isLarge={isLarge}
                        click={handleMovieClick}/>
                    })
                }
                
            </div>
            {
                trailerUrl&&<YouTube videoId={trailerUrl} opts={{
                    height: "390",
                    width: "100%",
                    playerVars: {
                        autoplay: 1
                    }
                }}/>
            }

            {
                error&&<div className="err_msg">{error}</div>
            }
        </div>
     );
}
 
export default Row;