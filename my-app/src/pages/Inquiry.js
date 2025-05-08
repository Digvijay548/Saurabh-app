import React from "react";
import { FaUser, FaEdit, FaPaperPlane } from "react-icons/fa";
import "./Inquiry.css";

function Inquiry() {
  return (
    <div className="inquiry-page">
      <div className="inquiry-bg"></div>

      <div className="inquiry-form">
        <h1 className="page-title">
          <FaEdit className="icon" /> Inquiry Form
        </h1>

        {/* Name */}
        <div className="form-group">
          <label>
            <FaUser className="icon-inline" /> Name
          </label>
          <input type="text" placeholder="Enter your name" />
        </div>

        {/* Subject */}
        <div className="form-group">
          <label>
            <FaEdit className="icon-inline" /> Subject
          </label>
          <input type="text" placeholder="Enter subject" />
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Description</label>
          <textarea rows="5" placeholder="Write your message"></textarea>
        </div>

        {/* Button */}
        <button className="submit-button">
          <FaPaperPlane className="icon-inline" /> Send Inquiry
        </button>
      </div>
    </div>
  );
}

export default Inquiry;
