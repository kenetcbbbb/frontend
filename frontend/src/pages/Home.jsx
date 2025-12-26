import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import { ServiceCard } from "../components/ServiceCard";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";

export const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api
      .get("/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  }, []);

  const popularServices = services.slice(0, 3);

  return (
    <div style={{ padding: "32px", maxWidth: "1100px", margin: "0 auto" }}>
      {/* Приветственный блок */}
      <Hero />

      {/* Призыв к действию */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Link
          to="/services"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            background: "#2563eb",
            color: "white",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Выбрать услугу
        </Link>
      </div>

      {/* Популярные услуги */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "24px",
            marginBottom: "20px",
            color: "#111827",
            fontWeight: 700,
          }}
        >
          Популярные услуги
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {popularServices.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      {/* Преимущества платформы */}
      <section>
        <h2
          style={{
            fontSize: "24px",
            marginBottom: "20px",
            color: "#111827",
            fontWeight: 700,
          }}
        >
          Почему CodeShop
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          <div
            style={{
              padding: "18px",
              borderRadius: "12px",
              background: "#eff6ff",
            }}
          >
            <h3 style={{ margin: "0 0 8px", fontSize: "18px" }}>
              Гибкий конструктор
            </h3>
            <p style={{ margin: 0, color: "#4b5563", fontSize: "14px" }}>
              Выбирайте базовый курс и дополняйте его нужными модулями.
            </p>
          </div>

          <div
            style={{
              padding: "18px",
              borderRadius: "12px",
              background: "#ecfdf3",
            }}
          >
            <h3 style={{ margin: "0 0 8px", fontSize: "18px" }}>
              Прозрачная стоимость
            </h3>
            <p style={{ margin: 0, color: "#4b5563", fontSize: "14px" }}>
              Цена меняется в реальном времени при выборе модулей.
            </p>
          </div>

          <div
            style={{
              padding: "18px",
              borderRadius: "12px",
              background: "#fef3c7",
            }}
          >
            <h3 style={{ margin: "0 0 8px", fontSize: "18px" }}>
              Удобный онлайн‑формат
            </h3>
            <p style={{ margin: 0, color: "#4b5563", fontSize: "14px" }}>
              Все курсы доступны онлайн, из любой точки мира.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};