import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import { ServiceCard } from "../components/ServiceCard";

export const Services = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get("/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = services.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "32px", maxWidth: "1100px", margin: "0 auto" }}>
      <h1
        style={{
          fontSize: "28px",
          marginBottom: "20px",
          color: "#111827",
          fontWeight: 700,
        }}
      >
        Каталог услуг
      </h1>

      {/* Поиск */}
      <div style={{ marginBottom: "24px" }}>
        <input
          type="text"
          placeholder="Поиск по названию услуги..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "10px 14px",
            borderRadius: "999px",
            border: "1px solid #d1d5db",
            outline: "none",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {filtered.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}

        {filtered.length === 0 && (
          <p style={{ color: "#6b7280" }}>Ничего не найдено.</p>
        )}
      </div>
    </div>
  );
};