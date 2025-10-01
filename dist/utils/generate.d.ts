import { NextFunction, Request, Response } from "express";
import { User } from "../models/userModel";
export declare const generateToken: (user: User) => string;
export declare const isAuth: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=generate.d.ts.map