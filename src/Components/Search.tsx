import React, { useState } from 'react';

const API_KEY = 'YOUR_GIPHY_API_KEY';

function Search({ user }) {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const searchGifs = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10`);
    const data = await response.json();
    setGifs(data.data);
  };

  const addToFavorites = (gif) => {
    setFavorites([...favorites, gif]);
  };

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GIFs"
      />
      <button onClick={searchGifs}>Search</button>
      <div>
        {gifs.map((gif) => (
          <div key={gif.id}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
            <button onClick={() => addToFavorites(gif)}>Add to Favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
