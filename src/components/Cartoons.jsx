import React, { Component } from 'react';
import '../css/Cartoons.css';

export class Cartoons extends Component {
  handleSignout = () => {
  this.setState({ isLoggedIn: false });
  alert("You have signed out.");
  window.location.href = "/";
};

  render() {
    return (
      <div className="cartoon-container">
        {/* Updated Navbar */}
        <header className="cartoon-navbar">
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

              {/* New Auctions Button Added */}
              <div className="cartoon-dropdown-container">
                <button className="cartoon-dropdown-button">Auctions</button>
                <div className="cartoon-dropdown-content">
                  <div className="cartoon-column">
                    
                    <a href="/bp">Buying</a>
                  </div>
                  <div className="cartoon-column">
                    
                    <a href="/sel">Selling</a>
                  </div>
                  
                </div>
              </div>

              <a href="/contact">Contact</a>
            </nav>
            <div className="cartoon-auth-links">
              <button className="auth-link" onClick={this.handleSignout}>Sign Out</button>
            </div>
          </div>
        </header>

        {/* Cartoon Gallery */}
        <div className="cartoon-gallery">
          <div className="cartoon-section">
            <img src="../images/c1.jpg" alt="Happy Cat" />
            <p className="cartoon-title">Happy Cat</p>
            <p className="cartoon-description">A cute cat with a big smile and expressive eyes.
               <br></br>
              24 X 24
               <br></br>
              Amount:$5
            </p>
            <a href="/bp" className="buy-button">Buy Now</a>
          </div>
          <div className="cartoon-section">
            <img src="../images/c2.jpg" alt="Cheerful Dog" />
            <p className="cartoon-title">Cheerful Dog</p>
            <p className="cartoon-description">A friendly dog wagging its tail in excitement.
              <br></br>
              30X30
              <br></br>
              Amount: $4
            </p>
            <a href="/bp" className="buy-button">Buy Now</a>
          </div>
          <div className="cartoon-section">
            <img src="../images/c5.jpg" alt="Laughing Bunny" />
            <p className="cartoon-title">Laughing Bunny</p>
            <p className="cartoon-description">A bunny chuckling while munching on a carrot.
              <br></br>
              22 X 22<br></br>
              Amount: $8
            </p>
            <a href="/bp" className="buy-button">Buy Now</a>
          </div>
          <div className="cartoon-section">
            <img src="../images/c6.jpg" alt="Jolly Elephant" />
            <p className="cartoon-title">Jolly Elephant</p>
            <p className="cartoon-description">A baby elephant splashing water joyfully.
              <br></br>
              33 X 33
              <br></br>
              Amount: $10
            </p>
            <a href="/bp" className="buy-button">Buy Now</a>
          </div>
          <div className="cartoon-section">
            <img src="../images/c3.jpg" alt="Jolly Elephant" />
            <p className="cartoon-title">Jolly Elephant</p>
            <p className="cartoon-description">A baby elephant splashing water joyfully.
              <br></br>
              24 X 24
              <br></br>
              Amount: $3
            </p>
            <a href="/bp" className="buy-button">Buy Now</a>
          </div>
          <div className="cartoon-section">
            <img src="../images/c4.jpg" alt="Jolly Elephant" />
            <p className="cartoon-title">Jolly Elephant</p>
            <p className="cartoon-description">A baby elephant splashing water joyfully.
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

export default Cartoons;
