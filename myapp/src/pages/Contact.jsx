import React, { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Спасибо за сообщение! (пока без реальной отправки)");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>Контакты</h1>

      <p style={{ marginBottom: "20px", color: "#4b5563" }}>
        Если у вас есть вопросы по платформе или сотрудничеству, напишите нам.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          padding: "24px",
          borderRadius: "16px",
          background: "#ffffff",
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "4px" }}>Имя</label>
          <input
            type="text"
            name="name"
            value={form.name}
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
          <label style={{ display: "block", marginBottom: "4px" }}>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
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
            Сообщение
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
            }}
          />
        </div>

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
          Отправить
        </button>
      </form>

      <div style={{ marginTop: "24px", color: "#4b5563" }}>
        <p>Email: support@codeshop.test</p>
        <p>Телефон: +7 (900) 000‑00‑00</p>
      </div>
    </div>
  );
};