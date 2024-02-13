import { Request, Response } from "express";
import RepliesService from "../services/RepliesService";

export default new (class RepliesController {
  async find(req: Request, res: Response) {
    RepliesService.find(req, res);
  }

  async create(req: Request, res: Response) {
    RepliesService.create(req, res);
  }
})();
