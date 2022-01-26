import React from "react";

const MovieCard = ({ rating }) => (
    <div className="rating">
        <h4>Rating</h4>
        <h4>{ rating }</h4>
    </div>
)
export default MovieCard;