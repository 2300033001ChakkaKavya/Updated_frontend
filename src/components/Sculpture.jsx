import React, { Component } from 'react';
import '../css/Sculpture.css';

export class Sculpture extends Component {
  handleSignout = () => {
  this.setState({ isLoggedIn: false });
  alert("You have signed out.");
  window.location.href = "/";
};

  render() {
    return (
    <div className="sculpture-container">
        {/* Updated Navbar */}
        <header className="sculpture-navbar">
          <div className="sculpture-logo-container">
            <img className="sculpture-logo" src="../images/logo.jpg" alt="Art Gallery Logo" />
            <span className="sculpture-brand">House of Serene Kunst</span>
          </div>
          <div className="sculpture-nav-auth-container">
            <nav className="sculpture-nav-links">
              <a href="/homepage">Home</a>
              <a href="#">Artists</a>
              <div className="sculpture-dropdown-container">
                <button className="sculpture-dropdown-button">Artworks</button>
                <div className="sculpture-dropdown-content">
                  <div className="sculpture-column">
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

              {/* New Auctions Button Added */}
              <div className="sculpture-dropdown-container">
                <button className="sculpture-dropdown-button">Auctions</button>
                <div className="sculpture-dropdown-content">
                  <div className="sculpture-column">
                    
                    <a href="/bp">Buying</a>
                  </div>
                  <div className="sculpture-column">
                    
                    <a href="/sel">Selling</a>
                  </div>
                  
                </div>
              </div>

              <a href="/contact">Contact</a>
            </nav>
            <div className="sculpture-auth-links">
              <button className="auth-link" onClick={this.handleSignout}>Sign Out</button>
            </div>
          </div>
        </header>

        {/* Sculpture Gallery */}
        <div className="sculpture-gallery">
          <div className="sculpture-section">
            <img src="../images/s1.jpg" alt="Happy Cat" />
            <p className="sculpture-title">Happy Cat</p>
            <p className="sculpture-description">A cute cat with a big smile and expressive eyes.
               <br></br>
              24 X 24
               <br></br>
              Amount:$5
            </p>
            <a href="/bp" className="buy-button">Buy Now</a>
          </div>
          <div className="sculpture-section">
            <img src="../images/s2.jpg" alt="Cheerful Dog" />
            <p className="sculpture-title">Cheerful Dog</p>
            <p className="sculpture-description">A friendly dog wagging its tail in excitement.
              <br></br>
              30X30
              <br></br>
              Amount: $4
            </p>
            <a href="/bp" className="buy-button">Buy Now</a>
          </div>
          <div className="sculpture-section">
            <img src="../images/s3.jpg" alt="Laughing Bunny" />
            <p className="sculpture-title">Laughing Bunny</p>
            <p className="sculpture-description">A bunny chuckling while munching on a carrot.
              <br></br>
              22 X 22<br></br>
              Amount: $8
            </p>
            <a href="/bp" className="buy-button">Buy Now</a>
          </div>
          <div className="sculpture-section">
            <img src="../images/s4.jpg" alt="Jolly Elephant" />
            <p className="sculpture-title">Jolly Elephant</p>
            <p className="sculpture-description">A baby elephant splashing water joyfully.
              <br></br>
              33 X 33
              <br></br>
              Amount: $10
            </p>
            <a href="/bp" className="buy-button">Buy Now</a>
          </div>
          <div className="sculpture-section">
            <img src="../images/s5.jpg" alt="Jolly Elephant" />
            <p className="sculpture-title">Jolly Elephant</p>
            <p className="sculpture-description">A baby elephant splashing water joyfully.
              <br></br>
              24 X 24
              <br></br>
              Amount: $3
            </p>
            <a href="/bp" className="buy-button">Buy Now</a>
          </div>
          <div className="sculpture-section">
            <img src="../images/s6.jpg" alt="Jolly Elephant" />
            <p className="sculpture-title">Jolly Elephant</p>
            <p className="sculpture-description">A baby elephant splashing water joyfully.
              <br></br>
               33X33
               <br></br>
               Amount: $6
            </p>
            <a href="/bp" className="buy-button">Buy Now</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sculpture;
