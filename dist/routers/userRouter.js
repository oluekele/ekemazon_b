"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userModel_1 = require("../models/userModel");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generate_1 = require("../utils/generate");
exports.userRouter = express_1.default.Router();
//POST /api/users/signin
exports.userRouter.post("/signin", (0, express_async_handler_1.default)(async (req, res) => {
    const user = await userModel_1.UserModel.findOne({ email: req.body.email });
    if (user) {
        if (bcryptjs_1.default.compareSync(req.body.password, user.password)) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: (0, generate_1.generateToken)(user),
            });
            return;
        }
    }
    res.status(401).json({ message: "invalide email or password" });
}));
exports.userRouter.post("/signup", (0, express_async_handler_1.default)(async (req, res) => {
    const user = await userModel_1.UserModel.create({
        name: req.body.name,
        email: req.body.email,
        password: bcryptjs_1.default.hashSync(req.body.password),
    });
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: (0, generate_1.generateToken)(user),
    });
}));
//# sourceMappingURL=userRouter.js.map