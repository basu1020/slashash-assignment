import React, {useState, useEffect} from 'react'
import MovieCardItem from './MovieCardItem';

// this section displays user's favorite movies 
const Movies = () => {
  const [movies, setMovies] = useState([]);

    // function to fetch movies from the backend
    const fetchMovies = async () => {
        try {
            const response = await fetch('http://localhost:5000/movies'); 
            const data = await response.json();
            setMovies(data.allMovies);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    // function to delete a movie from the favorites list from the bakcend. 
    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:5000/movies/${id}`, {
                method: 'DELETE',
            });
            fetchMovies(); // Fetch movies again after deletion
        } catch (error) {
            console.error("Error deleting movie:", error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

  return (
    <>
    {/* displaying movies in MovieCardItem with details */}
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCardItem key={movie.id} movie={movie} onDelete={handleDelete} />
        ))}
      </div>
    </>
  )
}

export default Movies