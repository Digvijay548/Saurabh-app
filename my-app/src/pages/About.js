import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <section className="about-page">
      <h1 className="page-title"><FaInfoCircle className="icon" /> About Us</h1>
      <p className="page-description">
        Balaji Soap Factory is dedicated to providing high-quality cleaning products for all your household needs.
        With a focus on innovation and customer satisfaction, we deliver excellence in every product.
      </p>
    </section>
  );
}

export default About;
