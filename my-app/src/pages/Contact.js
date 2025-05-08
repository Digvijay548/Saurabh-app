import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      <h1 className="page-title">
        <FaPhoneAlt className="icon" /> Contact Us
      </h1>
      <div className="contact-description">
        <div className="info-item">
          <FaPhoneAlt className="contact-icon" />
          <div>
            <p className="info-label">Phone</p>
            <p>+91 9738381000</p>
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
            <p>A/p, Majgoan Road, Padal, (Kolhapur) Maharashtra 416205</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
