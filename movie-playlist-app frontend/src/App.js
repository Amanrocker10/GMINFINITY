import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import axios from "axios";
import "./App.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const searchMovies = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/search-movies",
        {
          searchTerm: searchInput,
        }
      );
      setMovies(response.data.movies || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {" "}
          <Route
            path="/"
            element={
              <div className="App">
                <header>
                  <h1>GMFINITY Movie Playlist App</h1>
                  <div className="search">
                    <input
                      type="text"
                      value={searchInput}
                      onChange={handleSearchInput}
                      placeholder="Search for a movie"
                    />
                    <button onClick={searchMovies}>Search</button>
                  </div>
                </header>

                <div className="movieList">
                  {movies.map((movie) => (
                    <div key={movie.imdbID} className="movieCard">
                      <img src={movie.Poster} alt={movie.Title} />
                      <div className="movieDetails">
                        <h2>{movie.Title}</h2>
                        <p>{movie.Year}</p>
                        <p>{movie.Type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;