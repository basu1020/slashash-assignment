import React from 'react'

const MovieCardItem = ({movie}) => {
    const handleDelete = () => {
        onDelete(movie.id); // calling the onDelete function with the movie ID given from the 'Movies' component
    };

    return (
        <>
            {/* displaying movie details */}
            <div className="card" style={{ width: '18rem' }}>
                <img src={movie.poster} className="card-img-top" alt={movie.Title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">Year: {movie.year}</p>
                    <p className="card-text">Type: {movie.type}</p>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default MovieCardItem