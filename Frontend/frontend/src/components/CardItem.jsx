import React, {useState} from 'react';

// this is a simple card item for showing movies after fetching it from the API, it has a function which adds favorite movie into the database named 'toggleFavorite'

const CardItem = ({ movie }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = async () => {

        setIsFavorite(!isFavorite);

        // making 'POST' request to the backend to add new movie. 
        const response = await fetch('http://localhost:5000/add-movies', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({Title: movie.Title, year: movie.Year, type: movie.Type, Poster: movie.Poster })
        })

        const json = await response.json()

        // showing messages accroding to the success bool received from the backend. 
        if(json.success) {
            alert("movie added successfully")
        }
        if(!json.success){
            alert("couldn't add movie")
        }
    };

    return (
        // displaying details about the movies. 
        <div className="card" style={{ width: '18rem' }}>
            <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">Year: {movie.Year}</p>
                <p className="card-text">Type: {movie.Type}</p>
                <a
                    href="#"
                    className={`btn ${isFavorite ? 'btn-dark' : 'btn-primary'}`}
                    onClick={toggleFavorite}
                >
                    {isFavorite ? 'Favorite' : 'Mark Favorite'}
                </a>
            </div>
        </div>
    );
};

export default CardItem;