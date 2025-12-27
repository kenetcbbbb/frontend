import { pool } from "../config/db.js";

export const calculateTotalPrice = async (products) => {
  let total = 0;

  for (const item of products) {
    const result = await pool.query(
      "SELECT price FROM products WHERE id = $1",
      [item.productId]
    );

    total += result.rows[0].price * item.quantity;
  }

  return total;
};