import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

export default new (class AuthenticationMiddleware {
  Auth(req: Request, res: Response, next: NextFunction): Response {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer")) {
      return res.status(401).json({ message: "unauthorized" });
    }

    const token = authorizationHeader.split(" ")[1];

    try {
      const loginSession = jwt.verify(token, "apambuh");
      res.locals.loginSession = loginSession;

      next();
    } catch (error) {
      console.error("Token verification error:", error);
      return res.status(401).json({ message: "token not valid" });
    }
  }
})();
