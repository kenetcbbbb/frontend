import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const linkStyle = {
    textDecoration: "none",
    color: "#374151",
    fontSize: "16px",
    fontWeight: 500,
    padding: "6px 10px",
    borderRadius: "8px",
    transition: "0.2s",
  };

  const activeStyle = {
    background: "#e0e7ff",
    color: "#1e3a8a",
  };

  return (
    <header
      style={{
        padding: "18px 40px",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#ffffff",
        position: "sticky",
        top: 0,
        zIndex: 10,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      {/* ЛОГОТИП */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#1e3a8a",
          fontSize: "26px",
          fontWeight: 800,
          letterSpacing: "-0.5px",
        }}
      >
        CodeShop
      </Link>

      {/* НАВИГАЦИЯ */}
      <nav style={{ display: "flex", gap: "24px" }}>
        <Link
          to="/"
          style={{
            ...linkStyle,
            ...(location.pathname === "/" ? activeStyle : {}),
          }}
        >
          Home
        </Link>

        <Link
          to="/services"
          style={{
            ...linkStyle,
            ...(location.pathname.startsWith("/services") ? activeStyle : {}),
          }}
        >
          Services
        </Link>

        <Link
          to="/about"
          style={{
            ...linkStyle,
            ...(location.pathname === "/about" ? activeStyle : {}),
          }}
        >
          About
        </Link>

        <Link
          to="/contact"
          style={{
            ...linkStyle,
            ...(location.pathname === "/contact" ? activeStyle : {}),
          }}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};