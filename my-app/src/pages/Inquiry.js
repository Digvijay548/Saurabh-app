import React from "react";
import { FaUser, FaEdit, FaPaperPlane } from "react-icons/fa";

function Inquiry() {
  return (
    <div
      className="inquiry-container"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        margin:10,
      }}
    >
      {/* Blurred Background */}
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
          filter: "blur(8px) brightness(0.5)",
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "500px",
          margin: "auto",
          marginTop: "5rem",
          backgroundColor: "rgba(0,0,0,0.75)",
          padding: "2rem",
          borderRadius: "15px",
          color: "#fff",
          boxShadow: "0 0 15px rgba(255,255,255,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
          <FaEdit style={{ marginRight: "10px" }} />
          Inquiry Form
        </h1>

        {/* Name */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            <FaUser style={{ marginRight: "8px" }} />
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              backgroundColor: "#222",
              color: "#fff",
            }}
          />
        </div>

        {/* Subject */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            <FaEdit style={{ marginRight: "8px" }} />
            Subject
          </label>
          <input
            type="text"
            placeholder="Enter subject"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              backgroundColor: "#222",
              color: "#fff",
            }}
          />
        </div>

        {/* Description */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Description
          </label>
          <textarea
            placeholder="Write your message"
            rows="5"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              backgroundColor: "#222",
              color: "#fff",
              resize: "none",
            }}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#ffcc00",
            color: "#000",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          <FaPaperPlane style={{ marginRight: "8px" }} />
          Send Inquiry
        </button>
      </div>
    </div>
  );
}

export default Inquiry;
