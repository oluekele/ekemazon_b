import dotenv from "dotenv";
import express from "express";
dotenv.config();
export const keyRouter = express.Router();
keyRouter.get("/paypal", (req, res) => {
    res.send({ clientId: process.env.PAYPAY_CLIENT_ID || "sb" });
});
keyRouter.get("/ping", (req, res) => {
    res.send("pong");
});
//# sourceMappingURL=keyRouter.js.map