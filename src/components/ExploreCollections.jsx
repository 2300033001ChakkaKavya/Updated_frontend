import React, { Component } from 'react';
import { Navigate } from 'react-router-dom'; 
import '../css/ExploreCollections.css'; 

class ExploreCollections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: [
        { id: 1, title: 'CONTRAST DIVERSITY', imageUrl: '../images/cdd1.jpg', link: '/cd' },
        { id: 2, title: 'SCULPTURE', imageUrl: '../images/scc1.jpg', link: '/sc' },
        { id: 3, title: 'PHOTOGRAPHY', imageUrl: '../images/pp1.jpg', link: '/pg' },
        { id: 4, title: 'ABSTRACT PIECE', imageUrl: '../images/abb1.jpg', link: '/ap' },
        { id: 5, title: 'CARTOONS', imageUrl: '../images/cc1.jpg', link: 'cartoons' },
        { id: 6, title: 'CLASSNTRADE', imageUrl: '../images/cnn1.jpg', link: '/cn' },
      ],
      redirectHome: false, 
    };
  }

  handleRedirect = (path) => {
    window.location.href = path; 
  };

  handleNavigateHome = () => {
    this.setState({ redirectHome: true }); 
  };

  render() {
    
    if (this.state.redirectHome) {
      return <Navigate to="/homepage" />;
    }

    return (
      <div className="explore-collections-container">
        <h2>Explore By Collection</h2>
        <div className="image-grid">
          {this.state.imageData.map((image) => (
            <div key={image.id} className="image-item" onClick={() => this.handleRedirect(image.link)}>
              <div className="image" style={{ backgroundImage: `url(${image.imageUrl})` }}>
                <div className="image-overlay">
                  <p className="image-title">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <button className="home-button" onClick={this.handleNavigateHome}>Back to Home</button>
      </div>
    );
  }
}

export default ExploreCollections;
