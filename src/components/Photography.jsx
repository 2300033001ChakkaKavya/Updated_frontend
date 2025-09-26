import React, { Component } from 'react';
import '../css/Photography.css';

export class Photography extends Component {
  handleSignout = () => {
  this.setState({ isLoggedIn: false });
  alert("You have signed out.");
  window.location.href = "/";
};

  render() {
    return (
    <div className="photography-container">
        {/* Updated Navbar */}
        <header className="photography-navbar">
          <div className="photography-logo-container">
            <img className="photography-logo" src="../images/logo.jpg" alt="Art Gallery Logo" />
            <span className="photography-brand">House of Serene Kunst</span>
          </div>
          <div className="photography-nav-auth-container">
            <nav className="photography-nav-links">
              <a href="/homepage">Home</a>
              <a href="#">Artists</a>
              <div className="photography-dropdown-container">
                <button className="photography-dropdown-button">Artworks</button>
                <div className="photography-dropdown-content">
                  <div className="photography-column">
                    <strong>Category</strong>
                    
                    <a href="/cd">Contrast Diversity</a>
                      <a href="/sc">Sculptures</a>
                      <a href="/pg">Photography</a>
                      <a href="/ap">Abstract Pieces</a>
                      <a href="/cartoons">Cartoons</a>
                      <a href="/cn">ClassNTrad</a>
                    
                    <a href="/photography">Photography</a>
                  </div>
                </div>
              </div>

              {/* New Auctions Button Added */}
              <div className="photography-dropdown-container">
                <button className="photography-dropdown-button">Auctions</button>
                <div className="photography-dropdown-content">
                  <div className="photography-column">
                    
                    <a href="/bp">Buying</a>
                  </div>
                  <div className="photography-column">
                    
                    <a href="/sel">Selling</a>
                  </div>
                  
                </div>
              </div>

              <a href="/contact">Contact</a>
            </nav>
            <div className="photography-auth-links">
              <button className="auth-link" onClick={this.handleSignout}>Sign Out</button>
            </div>
          </div>
        </header>

        {/* Photography Gallery */}
        <div className="photography-gallery">
          <div className="photography-section">
            <img src="../images/p1.jpg" alt="Happy Cat" />
            <p className="photography-title">Happy Cat</p>
            <p className="photography-description">A cute cat with a big smile and expressive eyes.
               <br></br>
              24 X 24
               <br></br>
              Amount:$5
            </p>
            <a href="/bp" className="buy-button">Buy Now</a>
          </div>
          <div className="photography-section">
            <img src="../images/p2.jpg" alt="Cheerful Dog" />
            <p className="photography-title">Cheerful Dog</p>
            <p className="photography-description">A friendly dog wagging its tail in excitement.
              <br></br>
              30X30
              <br></br>
              Amount: $4
            </p>
            <a href="/bp" className="buy-button">Buy Now</a>
          </div>
          <div className="photography-section">
            <img src="../images/p3.jpg" alt="Laughing Bunny" />
            <p className="photography-title">Laughing Bunny</p>
            <p className="photography-description">A bunny chuckling while munching on a carrot.
              <br></br>
              22 X 22<br></br>
              Amount: $8
            </p>
            <a href="/bp" className="buy-button">Buy Now</a>
          </div>
          <div className="photography-section">
            <img src="../images/p4.jpg" alt="Jolly Elephant" />
            <p className="photography-title">Jolly Elephant</p>
            <p className="photography-description">A baby elephant splashing water joyfully.
              <br></br>
              33 X 33
              <br></br>
              Amount: $10
            </p>
            <a href="/bp" className="buy-button">Buy Now</a>
          </div>
          <div className="photography-section">
            <img src="../images/p5.jpg" alt="Jolly Elephant" />
            <p className="photography-title">Jolly Elephant</p>
            <p className="photography-description">A baby elephant splashing water joyfully.
              <br></br>
              24 X 24
              <br></br>
              Amount: $3
            </p>
            <a href="/bp" className="buy-button">Buy Now</a>
          </div>
          <div className="photography-section">
            <img src="../images/p6.jpg" alt="Jolly Elephant" />
            <p className="photography-title">Jolly Elephant</p>
            <p className="photography-description">A baby elephant splashing water joyfully.
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

export default Photography;
