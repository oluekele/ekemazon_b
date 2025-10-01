"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const generate_1 = require("../utils/generate");
const orderModel_1 = require("../models/orderModel");
exports.orderRouter = express_1.default.Router();
// Get all orders for the authenticated user (user order history)
// orderRouter.get("/mine", isAuth, async (req: Request, res: Response) => {
//   const orders = await OrderModel.find({ user: req.user?._id });
//   res.send(orders);
// });
exports.orderRouter.get("/mine", generate_1.isAuth, (0, express_async_handler_1.default)(async (req, res) => {
    var _a;
    const orders = await orderModel_1.OrderModel.find({ user: (_a = req.user) === null || _a === void 0 ? void 0 : _a._id });
    res.send(orders);
}));
// orderRouter.get(
//   "/:id",
//   isAuth,
//   expressAsyncHandler(async (req: Request, res: Response) => {
//     const order = await OrderModel.findById(req.params.id);
//     if (order) {
//       console.log(order);
//       res.json(order);
//     } else {
//       res.status(404).json({ message: "Order Not Found" });
//     }
//   })
// );
exports.orderRouter.get("/:id", generate_1.isAuth, (0, express_async_handler_1.default)(async (req, res) => {
    const order = await orderModel_1.OrderModel.findById(req.params.id);
    if (order) {
        res.json(order);
    }
    else {
        res.status(404).json({ message: "Order Not Found" });
    }
}));
exports.orderRouter.post("/", generate_1.isAuth, (0, express_async_handler_1.default)(async (req, res) => {
    var _a;
    if (req.body.orderItems.length === 0) {
        res.status(400).json({ message: "Cart is empty" });
    }
    else {
        const createdOrder = await orderModel_1.OrderModel.create({
            orderItems: req.body.orderItems.map((x) => ({
                ...x,
                product: x._id,
            })),
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: (_a = req.user) === null || _a === void 0 ? void 0 : _a._id,
        });
        res.status(201).json({ message: "Order Creade", order: createdOrder });
    }
}));
exports.orderRouter.put("/:id/pay", generate_1.isAuth, (0, express_async_handler_1.default)(async (req, res) => {
    const order = await orderModel_1.OrderModel.findById(req.params.id).populate("user");
    if (order) {
        order.isPaid = true;
        order.paidAt = new Date(Date.now());
        order.paymentResult = {
            paymentId: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.email_address,
        };
        const updatedOrder = await order.save();
        res.json({ message: "Order Paid", order: updatedOrder });
    }
    else {
        res.status(404).json({ message: "Order Not Found" });
    }
}));
//# sourceMappingURL=orderRouter.js.map