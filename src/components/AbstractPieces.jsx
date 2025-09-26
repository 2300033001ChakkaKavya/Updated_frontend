import React, { useState } from 'react';
import '../css/AbstractPieces.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faCheck } from '@fortawesome/free-solid-svg-icons';

const artworks = [
  {
    title: 'Abstract Oil on Canvas',
    artist: '',
    image: '/images/ap1.jpg',
    description: 'Unique modern compositions.',
    price: 95.00,
    id: 'abstract-oil-1',
  },
  {
    title: 'CultureFrontier',
    artist: '',
    image: '/images/ap2.jpg',
    description: 'Evocative interplay of form and color.',
    price: 150.00,
    id: 'culture-frontier-2',
  },
  {
    title: 'Obsessed with Art',
    artist: '',
    image: '/images/ap3.jpg',
    description: 'Bold textures and dynamic visual rhythms.',
    price: 120.00,
    id: 'obsessed-with-art-3',
  },
  {
    title: 'Passionate Home Abstract',
    artist: '',
    image: '/images/ap4.jpg',
    description: 'Vibe with flow and have peace.',
    price: 120.00,
    id: 'passionate-home-4', // Unique ID Fix
  },
];

function AbstractPieces() {
  const [likedArtworks, setLikedArtworks] = useState({});

  const handleBuyNow = (title, price) => {
    alert(`${title} added to your cart for $${price}!`);
    // In a real application, you would handle adding to a shopping cart here.
  };

  const handleLike = (artworkId) => {
    setLikedArtworks(prevState => ({
      ...prevState,
      [artworkId]: !prevState[artworkId],
    }));
  };

  return (
    <div className="category-page abstract-pieces">
      <h1>Abstract Expressions</h1>
      <p>Dive into a world of non-representational art that sparks imagination and emotion.</p>
      <div className="artwork-grid">
        {artworks.map((art) => (
          <div className="artwork-card" key={art.id}>
            <div className="artwork-image-container">
              <img src={art.image} alt={art.title} />
              <div className="artwork-overlay">
                <button className="buy-now-button" onClick={() => handleBuyNow(art.title, art.price)}>
                  <FontAwesomeIcon icon={faShoppingCart} /> Buy Now - ${art.price}
                </button>
                <button className={`like-button ${likedArtworks[art.id] ? 'liked' : ''}`} onClick={() => handleLike(art.id)}>
                  {likedArtworks[art.id] ? (
                    <>
                      <FontAwesomeIcon icon={faCheck} /> Liked!
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faHeart} /> Like
                    </>
                  )}
                </button>
              </div>
            </div>
            <h3>{art.title}</h3>
            <p className="artist-name"><em>{art.artist || 'Unknown Artist'}</em></p>
            <p className="artwork-description">{art.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AbstractPieces;
