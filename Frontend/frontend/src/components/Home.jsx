import React, { useState, useEffect } from 'react';
import CardItem from './CardItem'; // Import the CardItem component

// this component shows the search bar to search movies and show them so that user can add it as favortie. 

const Home = () => {
    const [movie, setMovie] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setMovie(inputValue);
    }

    // function to handle search operation for movies from the API
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch(`https://www.omdbapi.com/?s=${movie}&apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`);
            const data = await response.json();
            setSearchResults(data.Search);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }

    return (
        <>
        {/* displaying the search bar and the searched movie list */}
            <form className="d-flex" onSubmit={handleSubmit}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    value={movie}
                    aria-label="Search"
                    onChange={handleInputChange}
                />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            
            <div className="card-container flex">
                {searchResults.map((movieItem, index) => (
                    <CardItem key={index} movie={movieItem} />
                ))}
            </div>
        </>
    );
}

export default Home;