import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import { registerSchema } from "../utils/validator/authValidation";

export default new (class AuthController {
  async registAccount(req: Request, res: Response) {
    try {
      const data = req.body;
      const value = registerSchema.validate(data);
      return res.status(200).json({ status: "succes", value });
    } catch (error) {
      console.error("error while register account", error);
      return res
        .status(500)
        .json({ status: "error", message: "internal server error" });
    }
  }
})();
