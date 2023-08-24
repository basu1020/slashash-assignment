import React, {useState} from 'react';

const CardItem = ({ movie }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = async () => {
        setIsFavorite(!isFavorite);
        const response = await fetch('localhost:5000/add-movies', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title: movie.Title, year: movie.Year, type: movie.Type, poster: movie.Poster })
        })

        const json = response.json()
        if(json.success) {
            alert("movie added successfully")
        }
        if(!json.success){
            alert("couldn't add movie")
        }
    };

    return (
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