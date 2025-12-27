import { calculateTotalPrice } from "../services/price.service.js";

export const createOrder = async (req, res) => {
  const { serviceId, products } = req.body;

  if (!serviceId || !products) {
    return res.status(400).json({ error: "Invalid data" });
  }

  const totalPrice = await calculateTotalPrice(products);

  res.json({
    status: "success",
    totalPrice,
  });
};