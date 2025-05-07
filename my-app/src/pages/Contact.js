import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div
      className="contact-container"
      style={{
        position: "relative",
        backgroundColor: "rgba(0,0,0,0.4)",
        overflow: "hidden",
      }}
    >
      {/* Blurred background layer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${process.env.PUBLIC_URL}/BG/home-bg.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "blur(8px) brightness(0.6)",
          zIndex: 0,
        }}
      ></div>

      {/* Main content on top */}
      <div className="contact-card" style={{ position: "relative", zIndex: 1 }}>
        <h1>Contact Us</h1>
        <p className="contact-subtitle">We’d love to hear from you!</p>

        <div className="contact-info">
          <div className="info-item">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <p className="info-label">Phone</p>
              <p>+91 9738381001</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <p className="info-label">Email</p>
              <p>balajisoapfactory1000@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <p className="info-label">Address</p>
              <p>A/p, majgoan road, Padal,(Kolhapur) Maharashtra 416205</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
