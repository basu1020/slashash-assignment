import React from 'react'

const MovieCardItem = () => {
    const handleDelete = () => {
        onDelete(movie.id); // Call the onDelete function with the movie ID
    };
    
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">Year: {movie.Year}</p>
                    <p className="card-text">Type: {movie.Type}</p>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default MovieCardItem