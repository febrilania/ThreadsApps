import { Request, Response } from "express";
import RepliesService from "../services/RepliesService";

export default new (class RepliesController {
  async create(req: Request, res: Response) {
    RepliesService.create(req, res);
  }

  async find(req: Request, res: Response) {
    RepliesService.find(req, res);
  }

  async delete(req: Request, res: Response) {
    RepliesService.delete(req, res);
  }
})();
