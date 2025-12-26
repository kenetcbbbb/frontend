import React from "react";
import { Link } from "react-router-dom";

export const ServiceCard = ({ service }) => (
  <div
    style={{
      border: "1px solid #e5e7eb",
      padding: "24px",
      width: "260px",
      borderRadius: "16px",
      background: "#ffffff",
      boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
      transition: "0.3s",
      cursor: "pointer"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.06)";
    }}
  >
    <h3 style={{ margin: "0 0 12px", fontSize: "20px", color: "#111827" }}>
      {service.name}
    </h3>

    <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "16px" }}>
      {service.description}
    </p>

    <Link
      to={`/services/${service.id}`}
      style={{
        display: "inline-block",
        padding: "10px 18px",
        background: "#2563eb",
        color: "white",
        borderRadius: "10px",
        textDecoration: "none",
        fontSize: "14px",
        fontWeight: 600,
        transition: "0.2s"
      }}
      onMouseEnter={(e) => (e.target.style.background = "#1d4ed8")}
      onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
    >
      Details
    </Link>
  </div>
);