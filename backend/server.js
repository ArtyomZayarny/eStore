const express = require("express");
const dotenv = require("dotenv");
const products = require("./data/products");
const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV || "development";

app.listen(PORT, console.log(`Server running in ${MODE} mode on port ${PORT}`));
