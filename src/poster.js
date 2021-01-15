import './poster.css';

const base_url = "https://image.tmdb.org/t/p/original";

const Posters = ({info, isLarge, click}) => {
    return ( 
        <div className={`poster ${isLarge && "poster_large"}`} onClick={() => click(info.name || info.title || info.original_title)}>
            <img className={`poster_img ${isLarge && "poster_img_large"}`} src={`${base_url}${isLarge ? info.poster_path : info.backdrop_path}`} alt={info.name || info.title || info.original_title}/>
            <div className="poster_overlay">
                <p>{info.name || info.title || info.original_title}</p>
            </div>
        </div>
     );
}
 
export default Posters;