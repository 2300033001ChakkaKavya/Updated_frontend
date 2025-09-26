import React, { Component } from 'react'
import '../css/Contact.css';

export class Contact extends Component {
  render() {
    return (
      <div>
        <h1>ContactInfo</h1>
        <div className="gallery">
        <div className="section">
          <img src="../images/a1.webp" alt="How to Buy Art You Love" />
          <div className="details">
            <p className="title">CH.V.HIMA SRI</p>
            <p className="contact-info">Contact:9502994657
                Email:himasri@gmail.com
            </p>
          </div>
        </div>
        <div className="section">
          <img src="../images/a1.webp" alt="Collector Stories" />
          <div className="details">
            <p className="title">G.SWATHI SREE</p>
            <p className="contact-info">Contact: 9652247719
              Email:swathi@gmail.com
            </p>
          </div>
        </div>
        <div className="section">
          <img src="../images/a1.webp" alt="Art for Your Style" />
          <div className="details">
            <p className="title">CH.KAVYA</p>
            <p className="contact-info">Contact: 8019984051
              Email:kavya9@gmail.com
            </p>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Contact
