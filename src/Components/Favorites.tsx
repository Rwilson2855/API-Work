import React from 'react';

function Favorites({ user, favorites }) {
  return (
    <div>
      <h2>{user.username}'s Favorites</h2>
      <div>
        {favorites.map((gif) => (
          <div key={gif.id}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;