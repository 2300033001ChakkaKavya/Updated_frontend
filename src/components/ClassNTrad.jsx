import React, { useState } from 'react';
import '../css/ClassNTrad.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';  // ✅ Import navigation hook

const artworks = [
  {
    title: 'Harmony in Chaos',
    artist: '',
    image: '/images/tr1.jpg',
    description: 'This artist focuses on the coexistence of opposing elements, creating a balance between light and dark.',
    price: 75.00,
    id: 'harmony-in-chaos',
  },
  {
    title: 'Light and Dark',
    artist: '',
    image: '/images/tr2.jpg',
    description: 'Light and dark are fundamental elements in art, often used to create contrast and emphasize certain areas of a composition.',
    price: 120.00,
    id: 'light-and-dark',
  },
  {
    title: 'Bridget Riley',
    artist: '',
    image: '/images/tr3.jpg',
    description: 'Known for her optical art, she manipulates light and dark contrasts to create movement in her paintings.',
    price: 250.00,
    id: 'bridget-riley',
  },
  {
    title: 'Dan Flavin',
    artist: '',
    image: '/images/tr4.jpg',
    description: 'A minimalist artist famous for using fluorescent light fixtures to create sculptural installations.',
    price: 300.00,
    id: 'dan-flavin',
  },
  {
    title: 'Patrick Caulfield',
    artist: '',
    image: '/images/.jpg',
    description: 'Simplifies compositions using shadows and abstract forms to explore light and dark',
    price: 180.00,
    id: 'patrick-caulfield',
  },
];

function ClassNTrad() {
  const [likedArtworks, setLikedArtworks] = useState({});
  const navigate = useNavigate();  // ✅ React Router navigation

  // ✅ Redirect to /bp with artwork details
  const handleBuyNow = (art) => {
    navigate('/bp', { state: art });
  };

  const handleLike = (artworkId) => {
    setLikedArtworks(prevState => ({
      ...prevState,
      [artworkId]: !prevState[artworkId],
    }));
  };

  return (
    <div className="category-page contrast">
      <h1>ClassNTrade</h1>
      <p>Experience visual dialogues of opposing elements and rich cultural expressions.</p>
      <div className="artwork-grid">
        {artworks.map((art) => (
          <div className="artwork-card" key={art.id}>
            <img src={art.image} alt={art.title} />
            <h3>{art.title}</h3>
            <p><em>{art.artist}</em></p>
            <p>{art.description}</p>
            <div className="artwork-actions">
              <button className="buy-now-button" onClick={() => handleBuyNow(art)}>
                <FontAwesomeIcon icon={faShoppingCart} /> Buy Now - ${art.price}
              </button>
              <button
                className={`like-button ${likedArtworks[art.id] ? 'liked' : ''}`}
                onClick={() => handleLike(art.id)}
              >
                <FontAwesomeIcon icon={faHeart} /> {likedArtworks[art.id] ? 'Liked' : 'Like'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassNTrad;
