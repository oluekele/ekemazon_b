import express from "express";
import expressAsyncHandler from "express-async-handler";
import { ProductModel } from "../models/productModel.js";
import { sampleProducts, sampleUsers } from "../data.js";
import { UserModel } from "../models/userModel.js";
export const seedRouter = express.Router();
seedRouter.get("/", expressAsyncHandler(async (req, res) => {
    await ProductModel.deleteMany({});
    const createdProducts = await ProductModel.insertMany(sampleProducts);
    res.json(createdProducts);
}));
seedRouter.get("/users", expressAsyncHandler(async (req, res) => {
    await UserModel.deleteMany({});
    const createdUsers = await UserModel.insertMany(sampleUsers);
    res.json(createdUsers);
}));
//# sourceMappingURL=seedRouter.js.map