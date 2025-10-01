"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const productModel_1 = require("../models/productModel");
exports.productRouter = express_1.default.Router();
// /api/products
exports.productRouter.get("/", (0, express_async_handler_1.default)(async (req, res) => {
    const products = await productModel_1.ProductModel.find();
    res.json(products);
}));
// /api/slug/:slug
exports.productRouter.get("/slug/:slug", (0, express_async_handler_1.default)(async (req, res) => {
    const product = await productModel_1.ProductModel.findOne({ slug: req.params.slug });
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ message: "Product Not Found" });
    }
}));
//# sourceMappingURL=productRouter.js.map