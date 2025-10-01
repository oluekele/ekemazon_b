"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyRouter = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
exports.keyRouter = express_1.default.Router();
exports.keyRouter.get("/paypal", (req, res) => {
    res.send({ clientId: process.env.PAYPAY_CLIENT_ID || "sb" });
});
exports.keyRouter.get("/ping", (req, res) => {
    res.send("pong");
});
//# sourceMappingURL=keyRouter.js.map