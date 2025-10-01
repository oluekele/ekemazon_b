import { NextFunction, Request, Response } from "express";
import { AuthRequest } from "../types/express";

import jwt from "jsonwebtoken";
import { User } from "../models/userModel";

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

export const isAuth = (req: AuthRequest, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (authorization) {
    const token = authorization.slice(7); // remove "Bearer "
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret") as {
        _id: string;
        name: string;
        email: string;
        isAdmin: boolean;
      };

      req.user = { ...decoded, token }; // ✅ no TS error
      next();
    } catch {
      res.status(401).json({ message: "Invalid token" });
    }
  } else {
    res.status(401).json({ message: "No token" });
  }
};
