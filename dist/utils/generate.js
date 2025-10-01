"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (user) => {
    return jsonwebtoken_1.default.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    }, process.env.JWT_SECRET || "somethingsecret", {
        expiresIn: "7d",
    });
};
exports.generateToken = generateToken;
const isAuth = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization) {
        const token = authorization.slice(7, authorization.length);
        const decode = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "somethingsecret");
        // req.user = decode as {
        //   _id: string;
        //   name: string;
        //   email: string;
        //   isAdmin: boolean;
        //   token: string;
        // };
        // console.log(req.user.token);
        if (!req.user) {
            console.log(req.user);
        }
        next();
    }
    else {
        res.status(401).json({ message: "No token" });
    }
};
exports.isAuth = isAuth;
// export const isAuth = (req: Request, res: Response, next: NextFunction) => {
//   const { authorization } = req.headers;
//   if (authorization) {
//     const token = authorization.slice(7); // remove "Bearer "
//     try {
//       const decode = jwt.verify(
//         token,
//         process.env.JWT_SECRET || "somethingsecret" // ✅ fixed
//       );
//       req.user = decode as {
//         _id: string;
//         name: string;
//         email: string;
//         isAdmin: boolean;
//         token: string;
//       };
//       next();
//     } catch (err) {
//       res.status(401).json({ message: "Invalid token" });
//     }
//   } else {
//     res.status(401).json({ message: "No token" });
//   }
// };
//# sourceMappingURL=generate.js.map