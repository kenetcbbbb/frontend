import { pool } from "../config/db.js";

export const getServices = async (req, res) => {
  const result = await pool.query("SELECT * FROM services");
  res.json(result.rows);
};

export const getServiceById = async (req, res) => {
  const { id } = req.params;

  const service = await pool.query(
    "SELECT * FROM services WHERE id = $1",
    [id]
  );

  const products = await pool.query(
    `
    SELECT p.id, p.name, p.price
    FROM products p
    JOIN service_products sp ON sp.product_id = p.id
    WHERE sp.service_id = $1
    ` ,
    [id]
  );

  res.json({
    service: service.rows[0],
    products: products.rows,
  });
};