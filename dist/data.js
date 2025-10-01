"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleUsers = exports.sampleProducts = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.sampleProducts = [
    {
        name: "Nike Slim shirt",
        slug: "nike-slim-shirt",
        image: "/images/p1.jpg",
        category: "Shirts",
        price: 120,
        countInStock: 10,
        brand: "Nike",
        rating: 4.0,
        numReviews: 10,
        description: "high quality shirt",
    },
    {
        name: "Adids Fit shirt",
        slug: "adidas-fit-shirt",
        image: "/images/p2.jpg",
        category: "Shirts",
        price: 120,
        countInStock: 15,
        brand: "Adidas",
        rating: 4.5,
        numReviews: 10,
        description: "high quality shirt",
    },
    {
        name: "Lacoste Free Pants",
        slug: "lacoste-free-pants",
        image: "/images/p2.jpg",
        category: "Pants",
        price: 220,
        countInStock: 0,
        brand: "Lacoste",
        rating: 4.8,
        numReviews: 17,
        description: "high quality shirt",
    },
    {
        name: "Lacoste Fit Shirt",
        slug: "lacoste-fit-shirt",
        image: "/images/p3.jpg",
        category: "Shirt",
        price: 185,
        countInStock: 3,
        brand: "Lacoste",
        rating: 4.8,
        numReviews: 17,
        description: "high quality shirt",
    },
    {
        name: "Nike Slim Pants",
        slug: "nike-slim-pants",
        image: "/images/p1.jpg",
        category: "Pants",
        price: 78,
        countInStock: 1,
        brand: "Nike",
        rating: 3.5,
        numReviews: 14,
        description: "high quality shirt",
    },
];
exports.sampleUsers = [
    {
        name: "Joe",
        email: "admin@example.com",
        password: bcryptjs_1.default.hashSync("123456"),
        isAdmin: true,
    },
    {
        name: "John",
        email: "user@example.com",
        password: bcryptjs_1.default.hashSync("123456"),
        isAdmin: false,
    },
];
//# sourceMappingURL=data.js.map