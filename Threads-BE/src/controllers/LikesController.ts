import { Request, Response } from "express";
import LikesService from "../services/LikesService";

export default new (class LikesController {
  async create(req: Request, res: Response) {
    LikesService.like(req, res);
  }
})();
