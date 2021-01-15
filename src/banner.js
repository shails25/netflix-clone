import { useEffect, useState } from 'react';
import axios from './axios';
import moviesUrl from './request';
import './banner.css';

const Banner = () => {
    const base_url = "https://image.tmdb.org/t/p/original";
    const [movie, setMovie] = useState([]); 

    useEffect(() => {
        async function getMovie(){
            const request = await axios.get(moviesUrl[0].url);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
        }

        getMovie();
    }, []);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return ( 
        <div className="banner" style={{
            backgroundImage: `url("${base_url}${movie?.backdrop_path}")`
        }}>
            <div className="banner_content">
                <h1 className="banner_head">{movie?.name || movie?.title || movie?.original_title}</h1>
                <div className="banner_buttons">
                    <button className="banner_btn">Play</button>
                    <button className="banner_btn">My List</button>
                </div>
                <div className="banner_desc">
                    <h4 className="desc">{truncate(movie?.overview, 150)}</h4>
                </div>
            </div>

            <div className="banner_fadebottom"></div>
        </div>
     );
}
 
export default Banner;