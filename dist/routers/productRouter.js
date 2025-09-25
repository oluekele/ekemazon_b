import express from "express";
import expressAsyncHandler from "express-async-handler";
import { ProductModel } from "../models/productModel.js";
export const productRouter = express.Router();
// /api/products
productRouter.get("/", expressAsyncHandler(async (req, res) => {
    const products = await ProductModel.find();
    res.json(products);
}));
// /api/slug/:slug
productRouter.get("/slug/:slug", expressAsyncHandler(async (req, res) => {
    const product = await ProductModel.findOne({ slug: req.params.slug });
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ message: "Product Not Found" });
    }
}));
//# sourceMappingURL=productRouter.js.map