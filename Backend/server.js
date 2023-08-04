const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.post("/api/search-movies", async (req, res) => {
  const { searchTerm } = req.body;

  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=e10a91e4&s=${searchTerm}`
    );
    const movies = response.data.Search || [];
    res.json({ movies });
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({ error: "Failed to fetch movies." });
  }
});

app.use(express.static(path.join(__dirname, "movie-playlist-app", "build")));
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "movie-playlist-app", "build", "index.html")
  );
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});