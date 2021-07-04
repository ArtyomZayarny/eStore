import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from './middleware/errorMiddleware'
import connectDB from "./config/db.js";
import productRoutes from './routes/productRoutes.js'
const app = express();

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV || "development";

app.listen(
  PORT,
  console.log(`Server running in ${MODE} mode on port ${PORT}`.yellow.bold)
);