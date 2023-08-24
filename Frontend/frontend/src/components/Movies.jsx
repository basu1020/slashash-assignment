import React, {useState, useEffect} from 'react'

const Movies = () => {
  const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            // const response = await fetch('http://localhost:5000/movies'); // Adjust the URL as needed
            // const data = await response.json();
            // setMovies(data.movies || []);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

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
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCardItem key={movie.id} movie={movie} onDelete={handleDelete} />
        ))}
      </div>
    </>
  )
}

export default Movies