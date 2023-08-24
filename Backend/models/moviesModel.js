const { DataTypes } = require('sequelize');
const sequelize = require('./index');

// Define the Movie model
const Movie = sequelize.define('Movie', {
  // Title of the movie
  title: {
    type: DataTypes.STRING(255), // Use a string with a maximum length of 255 characters
    allowNull: false, // Title cannot be null
  },
  
  // Year the movie was released
  year: {
    type: DataTypes.STRING(50), // Use an integer data type
    allowNull: false, // Year cannot be null
  },
  
  // Type or genre of the movie
  type: {
    type: DataTypes.STRING(50), // Use a string with a maximum length of 50 characters
    allowNull: false, // Type cannot be null
  },
  
  // URL of the movie's poster image
  poster: {
    type: DataTypes.STRING(1000), // Use a string with a maximum length of 255 characters
    allowNull: false, // Poster URL cannot be null
  }
});

module.exports = Movie; // Export the Movie model
