import { NextFunction, Request, Response } from "express";
import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const generateToken = (user: User) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "somethingsecret",
    {
      expiresIn: "7d",
    }
  );
};

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    const decode = jwt.verify(
      token,
      process.env.JWT_SECRET || "somethingsecret"
    );
    req.user = decode as {
      _id: string;
      name: string;
      email: string;
      isAdmin: boolean;
      token: string;
    };
    console.log(req.user.token);
    next();
  } else {
    res.status(401).json({ message: "No token" });
  }
};

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
