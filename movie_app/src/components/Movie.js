import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"
import { Link } from 'react-router-dom';

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <Link style={{ textDecoration: 'none' }} to={{
            pathname: `movie/${id}`,
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title}></img>
                <div className="data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genres, index) => <li key={index} className="genres__genre">{genres}</li>)}</ul>
                    <p className="move__summary">{summary.slice(0, 180)}...</p>
                </div>
            </div>
        </Link>
    )



}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;