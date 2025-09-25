import express from "express";
import expressAsyncHandler from "express-async-handler";
import { UserModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generate.js";
export const userRouter = express.Router();
//POST /api/users/signin
userRouter.post("/signin", expressAsyncHandler(async (req, res) => {
    const user = await UserModel.findOne({ email: req.body.email });
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return;
        }
    }
    res.status(401).json({ message: "invalide email or password" });
}));
userRouter.post("/signup", expressAsyncHandler(async (req, res) => {
    const user = await UserModel.create({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
    });
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
    });
}));
//# sourceMappingURL=userRouter.js.map