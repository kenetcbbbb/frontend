import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { api } from "../api/api";

export const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state;

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [createdOrder, setCreatedOrder] = useState(null);
  const [error, setError] = useState("");

  if (!orderData) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Данные заказа не найдены</h2>
        <Link to="/">На главную</Link>
      </div>
    );
  }

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/orders", {
  serviceId: orderData.serviceId,
  products: orderData.selectedProductIds, // <-- ВАЖНО
  customerInfo: customer,
});

      setCreatedOrder(res.data.order);
    } catch (err) {
      console.error(err);
      setError("Не удалось создать заказ. Попробуйте ещё раз.");
    }
  };

  if (createdOrder) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            padding: "40px",
            background: "#ffffff",
            borderRadius: "20px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          <h1 style={{ fontSize: "32px", fontWeight: 800, color: "#16a34a" }}>
            ✔ Заказ оформлен
          </h1>

          <p style={{ marginTop: "20px", fontSize: "18px", color: "#374151" }}>
            Спасибо, {customer.name || "клиент"}! Ваш заказ успешно создан.
          </p>

          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              background: "#f3f4f6",
              borderRadius: "12px",
              textAlign: "left",
            }}
          >
            <p>
              <strong>Номер заказа:</strong> {createdOrder.id}
            </p>
            <p>
              <strong>Сумма:</strong> {createdOrder.totalPrice} ₽
            </p>
          </div>

          <Link
            to="/"
            style={{
              display: "inline-block",
              marginTop: "30px",
              padding: "14px 24px",
              background: "#2563eb",
              color: "white",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            На главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1
        style={{
          fontSize: "28px",
          marginBottom: "20px",
          color: "#111827",
          fontWeight: 700,
        }}
      >
        Оформление заказа
      </h1>

      {/* Сводка заказа */}
      <section
        style={{
          marginBottom: "30px",
          padding: "20px",
          borderRadius: "16px",
          background: "#f9fafb",
        }}
      >
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
          Ваш заказ
        </h2>
        <p>
          <strong>Услуга:</strong> {orderData.summary.serviceName}
        </p>
        <p>
          <strong>Итоговая сумма:</strong> {orderData.summary.totalPrice} ₽
        </p>
      </section>

      {/* Форма клиента */}
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "24px",
          borderRadius: "16px",
          background: "#ffffff",
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        }}
      >
        <h2 style={{ fontSize: "20px", marginBottom: "16px" }}>
          Контактные данные
        </h2>
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "4px" }}>
            Имя
          </label>
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
            }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "4px" }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "4px" }}>
            Телефон
          </label>
          <input
            type="tel"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
            }}
          />
        </div>

        {error && (
          <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
        )}

        <button
          type="submit"
          style={{
            padding: "12px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Подтвердить заказ
        </button>
      </form>
    </div>
  );
};