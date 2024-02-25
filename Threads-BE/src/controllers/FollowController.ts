import { Request, Response } from "express";
import FollowService from "../services/FollowService";

export default new (class FollowController {
  async follow(req: Request, res: Response) {
    FollowService.follow(req, res);
  }
  async unfollow(req: Request, res: Response) {
    FollowService.unfollow(req, res);
  }
})();
