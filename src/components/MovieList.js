import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({movies}) => (
    <div className='container'>
        {movies.map((movie, i) => <MovieCard movie={movie} key={i}/>)}
    </div>
)
export default MovieList;