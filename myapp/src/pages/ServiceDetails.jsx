import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { ProductCheckbox } from "../components/ProductCheckbox";

export const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/services/${id}`)
      .then((res) => {
        setService(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const toggleProduct = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((p) => p !== productId)
        : [...prev, productId]
    );
  };

  const totalPrice = useMemo(() => {
    if (!service) return 0;
    const basePrice = Number(service.service.price || 0);
    const selected = service.products.filter((p) =>
      selectedProducts.includes(p.id)
    );
    const addons = selected.reduce(
      (sum, p) => sum + Number(p.price || 0),
      0
    );
    return (basePrice + addons).toFixed(2);
  }, [service, selectedProducts]);

  const goToOrder = () => {
    navigate("/order", {
      state: {
        serviceId: service.service.id,
        selectedProductIds: selectedProducts,
        summary: {
          serviceName: service.service.name,
          totalPrice,
        },
      },
    });
  };

  if (loading) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Загрузка...</h2>
      </div>
    );
  }

  if (!service) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Услуга не найдена</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: 800,
          marginBottom: "8px",
          color: "#1e3a8a",
        }}
      >
        {service.service.name}
      </h2>

      <p
        style={{
          color: "#475569",
          fontSize: "16px",
          marginBottom: "24px",
        }}
      >
        {service.service.description}
      </p>

      <h3
        style={{
          fontSize: "20px",
          marginBottom: "12px",
          fontWeight: 700,
        }}
      >
        Дополнительные модули
      </h3>

      <div style={{ marginBottom: "24px" }}>
        {service.products.map((p) => (
          <ProductCheckbox
            key={p.id}
            product={p}
            selected={selectedProducts.includes(p.id)}
            onChange={toggleProduct}
          />
        ))}
      </div>

      <div
        style={{
          marginBottom: "24px",
          padding: "16px",
          borderRadius: "12px",
          background: "#eff6ff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "16px", color: "#374151" }}>
          Итоговая стоимость:
        </span>
        <span
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#1d4ed8",
          }}
        >
          {totalPrice} ₽
        </span>
      </div>

      <button
        onClick={goToOrder}
        style={{
          padding: "14px 24px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "12px",
          fontSize: "16px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Оформить заказ
      </button>
    </div>
  );
};