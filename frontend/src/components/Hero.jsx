import React from "react";

export const Hero = () => (
  <section
    style={{
      padding: "80px 20px",
      textAlign: "center",
      background: "linear-gradient(135deg, #dbeafe, #eef2ff)",
      borderRadius: "20px",
      marginBottom: "40px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
    }}
  >
    <h1
      style={{
        fontSize: "42px",
        fontWeight: 800,
        color: "#1e3a8a",
        marginBottom: "12px"
      }}
    >
      Choose Your Service
    </h1>

    <p style={{ fontSize: "18px", color: "#475569", maxWidth: "600px", margin: "0 auto" }}>
      Select a course package and customize it with additional modules
    </p>
  </section>
);