"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const productRouter_1 = require("./routers/productRouter");
const seedRouter_1 = require("./routers/seedRouter");
const userRouter_1 = require("./routers/userRouter");
const orderRouter_1 = require("./routers/orderRouter");
const keyRouter_1 = require("./routers/keyRouter");
dotenv_1.default.config();
const MONGODB_URL = process.env.DATABASE_URL;
if (!MONGODB_URL) {
    throw new Error("DATABASE_URL is not defined in environment variables");
}
mongoose_1.default.set("strictQuery", true);
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(MONGODB_URL);
        console.log("✅ Connected to MongoDB");
    }
    catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        process.exit(1);
    }
};
const app = (0, express_1.default)();
const PORT = 6040;
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:3000", "https://ekemazon.vercel.app"],
}));
app.use((0, express_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/products", productRouter_1.productRouter);
app.use("/api/seed", seedRouter_1.seedRouter);
app.use("/api/users", userRouter_1.userRouter);
app.use("/api/orders", orderRouter_1.orderRouter);
app.use("/api/keys", keyRouter_1.keyRouter);
const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`🚀 Server started at http://localhost:${PORT}`);
        console.log("⭐️ Happy coding!");
    });
};
startServer();
//# sourceMappingURL=index.js.map