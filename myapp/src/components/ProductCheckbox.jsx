import React from "react";

export const ProductCheckbox = ({ product, selected, onChange }) => (
  <label
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 18px",
      borderRadius: "12px",
      border: "1px solid #e5e7eb",
      marginBottom: "12px",
      background: selected ? "#eef2ff" : "#ffffff",
      cursor: "pointer",
      transition: "0.25s"
    }}
  >
    <div style={{ fontSize: "15px", fontWeight: 500 }}>
      {product.name}
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <span style={{ color: "#4b5563", fontWeight: 600 }}>
        {product.price} ₽
      </span>

      <input
        type="checkbox"
        checked={selected}
        onChange={() => onChange(product.id)}
        style={{ width: "20px", height: "20px" }}
      />
    </div>
  </label>
);