import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "../css/ListForSale.css";

function ListForSale() {
  const [artworks, setArtworks] = useState([]);
  const navigate = useNavigate(); 

  
  useEffect(() => {
    const storedArtworks = JSON.parse(localStorage.getItem("artworks")) || [];
    setArtworks(storedArtworks);
  }, []);

  
  const handleDeleteArtwork = (index) => {
    const updatedArtworks = artworks.filter((_, i) => i !== index);
    localStorage.setItem("artworks", JSON.stringify(updatedArtworks));
    setArtworks(updatedArtworks);
  };

  return (
    <div className="list-sale-container">
      <h1>Artworks Listed for Sale</h1>
      
      {artworks.length > 0 && (
        <button className="delete-all-button" onClick={() => {
          localStorage.removeItem("artworks");
          setArtworks([]);
        }}>Delete All Listings</button>
      )}

      <div className="artworks-grid">
        {artworks.length === 0 ? (
          <p>No artworks listed yet.</p>
        ) : (
          artworks.map((artwork, index) => (
            <div key={index} className="artwork-item">
              {artwork.image && <img src={artwork.image} alt={artwork.title} />}
              <h2>{artwork.title}</h2>
              <p>{artwork.description}</p>
              <p className="price">${artwork.price}</p>
              <div className="button-container">
                <a href="/bp">
                  <button className="buy-now-button">Buy Now</button>
                </a>
                <button className="delete-artwork-button" onClick={() => handleDeleteArtwork(index)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>

      
      <button className="home-button" onClick={() => navigate("/homepage")}>Back to Home</button>
    </div>
  );
}

export default ListForSale;
