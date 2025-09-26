import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/HomePage.css';

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAuctionsDropdown: false,
      showArtworksDropdown: false,
    };
  }

  toggleAuctionsDropdown = () => {
    this.setState((prevState) => ({
      showAuctionsDropdown: !prevState.showAuctionsDropdown,
      showArtworksDropdown: false, 
    }));
  };
  handleSignout = () => {
    this.setState({ isLoggedIn: false });
    alert("You have signed out.");
    window.location.href = "/";
  };

  toggleArtworksDropdown = () => {
    this.setState((prevState) => ({
      showArtworksDropdown: !prevState.showArtworksDropdown,
      showAuctionsDropdown: false, 
    }));
  };

  closeDropdowns = () => {
    this.setState({ showAuctionsDropdown: false, showArtworksDropdown: false });
  };

  render() {
    const { showAuctionsDropdown, showArtworksDropdown } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div className="base" onClick={this.closeDropdowns}>
        <header className="navbar">
          <div className="logo-container">
            <img className="logo" src="../images/logo.jpg" alt="Art Gallery Logo" />
            <span className="brand">House of Serene Kunst</span>
          </div>
          <div className="nav-auth-container">
            <nav className="nav-links" onClick={(e) => e.stopPropagation()}>
              <a href="#">Home</a>
              <a href="#">Artists</a>
              <div className="dropdown-container">
                <button className="dropdown-button" onClick={this.toggleArtworksDropdown}>
                  Artworks
                </button>
                {showArtworksDropdown && (
                  <div className="dropdown-content">
                    <div className="column">
                      <strong>Category</strong>
                      <a href="/cd">Contrast Diversity</a>
                      <a href="/sc">Sculptures</a>
                      <a href="/pg">Photography</a>
                      <a href="/ap">Abstract Pieces</a>
                      <a href="/cartoons">Cartoons</a>
                      <a href="/cn">ClassNTrad</a>
                    </div>
                    
                  </div>
                )}
              </div>
              <div className="dropdown-container">
                <button className="dropdown-button" onClick={this.toggleAuctionsDropdown}>
                  Auctions
                </button>
                {showAuctionsDropdown && (
                  <div className="dropdown-content">
                    <div className="column">
                      <a href="/bp">Buying</a>
                    </div>
                    <div className="column">
                      
                      <a href="/sel">Selling</a>
                      
                    </div>
                    
                  </div>
                )}
              </div>
              <a href="/contact">Contact</a>
            </nav>
            <div className="auth-links">
              <button className="auth-link" onClick={this.handleSignout}>Sign Out</button>
            </div>
          </div>
        </header>

        <div className="hero">
          <Slider {...settings} className="carousel-container">
            <div><img className="slide-image" src="../images/a1.webp" alt="Art 1" /></div>
            <div><img className="slide-image" src="../images/a2.jpg" alt="Art 2" /></div>
            <div><img className="slide-image" src="../images/a3.jpg" alt="Art 3" /></div>
          </Slider>
          <div className="hero-text">
            <h1>Welcome to the Art Gallery</h1>
            <p>Discover and collect artworks from world-renowned artists.</p>
             <a href="/ex">
              <button className="explore-btn">Explore Collection</button>
            </a>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2025 Art Gallery | All Rights Reserved</p>
            <p>Follow us on:
              <a href="#" className="fa fa-facebook">Facebook <img className='socialmediaIcon' src='./images/facebook.jpg' /></a> |
              <a href="#" className="fa fa-twitter">Instagram <img className='socialmediaIcon' src='./images/instagram.png' /></a> |
              <a href="#" className="fa fa-instagram">Twitter <img className='socialmediaIcon' src='./images/twitter.jpg' /></a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;