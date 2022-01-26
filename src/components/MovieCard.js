import React from "react";
import Rating from './Rating'

const MovieCard = ({ movie: { title, subtitle, storyline, imagePath, rating }}) => (
    <div className='card'>
        <div className='content'>
            <div className="imgBx">
                <img src={imagePath} alt={title} />
            </div>
            <div className='contentBx'>
                <h2>{title}</h2>
                <h2>{subtitle}</h2>
                <p>{storyline}</p>  
                <Rating rating={rating} />
            </div>            
      </div>
    </div>
)
export default MovieCard;