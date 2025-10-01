import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { productRouter } from "./routers/productRouter";
import { seedRouter } from "./routers/seedRouter";
import { userRouter } from "./routers/userRouter";
import { orderRouter } from "./routers/orderRouter";
import { keyRouter } from "./routers/keyRouter";

dotenv.config();

const MONGODB_URL = process.env.DATABASE_URL;

if (!MONGODB_URL) {
  throw new Error("DATABASE_URL is not defined in environment variables");
}

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

const app = express();
const PORT = 6040;

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://ekemazon.vercel.app"],
  })
);

app.use(express());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);
app.use("/api/seed", seedRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/keys", keyRouter);

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server started at http://localhost:${PORT}`);
    console.log("⭐️ Happy coding!");
  });
};

startServer();
