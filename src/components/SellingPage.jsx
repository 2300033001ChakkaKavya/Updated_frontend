import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/SellingPage.css";

function SellingPage() {
  const [artwork, setArtwork] = useState({ title: "", description: "", price: "", image: null });
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setArtwork({ ...artwork, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setArtwork({ ...artwork, image: reader.result }); // Save base64 image
      setPreview(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing artworks from localStorage
    const existingArtworks = JSON.parse(localStorage.getItem("artworks")) || [];

    // Add new artwork to list
    const updatedArtworks = [...existingArtworks, artwork];

    // Store updated list in localStorage
    localStorage.setItem("artworks", JSON.stringify(updatedArtworks));

    // Redirect to List for Sale page
    navigate("/lfs");
  };

  return (
    <div className="selling-container">
      <h1>Sell Your Artwork</h1>
      <form className="selling-form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price ($)" onChange={handleChange} required />
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {preview && <img src={preview} alt="Artwork Preview" className="image-preview" />}

        {/* Correctly trigger page redirection on form submission */}
        <button type="submit" className="sell-button">Sale</button>
      </form>
    </div>
  );
}

export default SellingPage;
