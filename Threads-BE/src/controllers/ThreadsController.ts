import { Request, Response } from "express";
import ThreadsService from "../services/ThreadsService";
import ThreadsQueue from "../queue/ThreadsQueue";

export default new (class ThreadsController {
  async find(req: Request, res: Response) {
    ThreadsService.find(req, res);
  }
  async create(req: Request, res: Response) {
    // ThreadsService.create(req, res);
    ThreadsQueue.create(req, res);
  }
  async delete(req: Request, res: Response) {
    ThreadsService.delete(req, res);
  }
  async update(req: Request, res: Response) {
    ThreadsService.update(req, res);
  }
  async findOne(req: Request, res: Response) {
    ThreadsService.findOne(req, res);
  }
})();
