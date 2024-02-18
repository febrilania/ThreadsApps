import { Request, Response } from "express";
import UserService from "../services/UserService";

export default new (class UserController {
  async find(req: Request, res: Response) {
    UserService.find(req, res);
  }

  async create(req: Request, res: Response) {
    UserService.create(req, res);
  }

  async update(req: Request, res: Response) {
    UserService.update(req, res);
  }

  async findOne(req: Request, res: Response) {
    UserService.findOne(req, res);
  }

  async delete(req: Request, res: Response) {
    UserService.delete(req, res);
  }

  async login(req: Request, res: Response) {
    UserService.login(req, res);
  }
})();
