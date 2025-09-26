import React, { useState } from 'react';
import '../css/ContrastDiversity.css';
import '../css/Cartoons.css'; // ✅ Reuse navbar styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const artworks = [
  {
    title: 'Harmony in Chaos',
    artist: '',
    image: '/images/cd1.jpg',
    description:
      'This artist focuses on the coexistence of opposing elements, creating a balance between light and dark.',
    price: 75.0,
    id: 'harmony-in-chaos',
  },
  {
    title: 'Light and Dark',
    artist: '',
    image: '/images/cd2.jpg',
    description:
      'Light and dark are fundamental elements in art, often used to create contrast and emphasize certain areas of a composition.',
    price: 120.0,
    id: 'light-and-dark',
  },
  {
    title: 'Bridget Riley',
    artist: '',
    image: '/images/cd3.jpg',
    description:
      'Known for her optical art, she manipulates light and dark contrasts to create movement in her paintings.',
    price: 250.0,
    id: 'bridget-riley',
  },
  {
    title: 'Dan Flavin',
    artist: '',
    image: '/images/cd4.jpg',
    description:
      'A minimalist artist famous for using fluorescent light fixtures to create sculptural installations.',
    price: 300.0,
    id: 'dan-flavin',
  },
  {
    title: 'Patrick Caulfield',
    artist: '',
    image: '/images/cd1.jpg',
    description:
      'Simplifies compositions using shadows and abstract forms to explore light and dark',
    price: 180.0,
    id: 'patrick-caulfield',
  },
];

function ContrastDiversity() {
  const [likedArtworks, setLikedArtworks] = useState({});

  const handleBuyNow = (title) => {
    console.log(`Buy now clicked for: ${title}`);
  };

  const handleLike = (artworkId) => {
    setLikedArtworks((prevState) => ({
      ...prevState,
      [artworkId]: !prevState[artworkId],
    }));
  };

  const handleSignout = () => {
    alert('You have signed out.');
    window.location.href = '/';
  };

  return (
    <div className="contrast-container">
      {/* ✅ Navbar */}
      <header className="cartoon-navbar fixed-navbar">
        <div className="cartoon-logo-container">
          <img className="cartoon-logo" src="../images/logo.jpg" alt="Art Gallery Logo" />
          <span className="cartoon-brand">House of Serene Kunst</span>
        </div>
        <div className="cartoon-nav-auth-container">
          <nav className="cartoon-nav-links">
            <a href="/homepage">Home</a>
            <a href="#">Artists</a>

            <div className="cartoon-dropdown-container">
              <button className="cartoon-dropdown-button">Artworks</button>
              <div className="cartoon-dropdown-content">
                <div className="cartoon-column">
                  <strong>Category</strong>
                  <a href="/cd">Contrast Diversity</a>
                  <a href="/sc">Sculptures</a>
                  <a href="/pg">Photography</a>
                  <a href="/ap">Abstract Pieces</a>
                  <a href="/cartoons">Cartoons</a>
                  <a href="/cn">ClassNTrad</a>
                </div>
              </div>
            </div>

            <div className="cartoon-dropdown-container">
              <button className="cartoon-dropdown-button">Auctions</button>
              <div className="cartoon-dropdown-content">
                <div className="cartoon-column">
                  <strong>Style</strong>
                  <a href="#">Graffiti</a>
                </div>
                <div className="cartoon-column">
                  <strong>Subject</strong>
                  <a href="#">Nature</a>
                </div>
                <div className="cartoon-column">
                  <strong>Medium</strong>
                  <a href="#">Pencil</a>
                </div>
              </div>
            </div>

            <a href="/contact">Contact</a>
          </nav>

          <div className="cartoon-auth-links">
            <button className="auth-link" onClick={handleSignout}>
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* ✅ Main Content */}
      <main className="contrast-main">
        <h1>Contrast & Diversity</h1>
        <p>Experience visual dialogues of opposing elements and rich cultural expressions.</p>

        <div className="artwork-grid">
          {artworks.map((art) => (
            <div className="artwork-card" key={art.id}>
              <img src={art.image} alt={art.title} />
              <h3>{art.title}</h3>
              <p>{art.description}</p>
              <div className="artwork-actions">
                <button className="buy-now-button" onClick={() => handleBuyNow(art.title)}>
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
      </main>
    </div>
  );
}

export default ContrastDiversity;
