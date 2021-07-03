import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from './routes/productRoutes.js'
const app = express();

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
})


app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV || "development";

app.listen(
  PORT,
  console.log(`Server running in ${MODE} mode on port ${PORT}`.yellow.bold)
);
