import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from "./config/db.js";
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express();
app.use(express.json());

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV || "development";

app.listen(
  PORT,
  console.log(`Server running in ${MODE} mode on port ${PORT}`.yellow.bold)
);
