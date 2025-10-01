"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const productModel_1 = require("../models/productModel");
const data_1 = require("../data");
const userModel_1 = require("../models/userModel");
exports.seedRouter = express_1.default.Router();
exports.seedRouter.get("/", (0, express_async_handler_1.default)(async (req, res) => {
    await productModel_1.ProductModel.deleteMany({});
    const createdProducts = await productModel_1.ProductModel.insertMany(data_1.sampleProducts);
    res.json(createdProducts);
}));
exports.seedRouter.get("/users", (0, express_async_handler_1.default)(async (req, res) => {
    await userModel_1.UserModel.deleteMany({});
    const createdUsers = await userModel_1.UserModel.insertMany(data_1.sampleUsers);
    res.json(createdUsers);
}));
//# sourceMappingURL=seedRouter.js.map