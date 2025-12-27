import React from "react";

export const About = () => (
  <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
    <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>О платформе CodeShop</h1>
    <p style={{ marginBottom: "16px", color: "#4b5563" }}>
      CodeShop — это онлайн‑платформа, где вы можете собирать комплексные образовательные решения под себя.
    </p>
    <p style={{ marginBottom: "16px", color: "#4b5563" }}>
      Мы верим, что обучение должно быть гибким, а курсы — настраиваемыми. Вместо жестких программ вы получаете
      конструктор, в котором можно выбирать только те модули, которые действительно нужны.
    </p>

    <h2 style={{ fontSize: "22px", marginTop: "24px", marginBottom: "12px" }}>
      Как это работает
    </h2>
    <ul style={{ color: "#4b5563", lineHeight: 1.6 }}>
      <li>Выбираете базовую услугу или курс.</li>
      <li>Добавляете дополнительные модули в удобном конструкторе.</li>
      <li>Сразу видите итоговую стоимость.</li>
      <li>Оформляете заказ и получаете подтверждение.</li>
    </ul>
  </div>
);