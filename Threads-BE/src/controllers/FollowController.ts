import { Request, Response } from "express";
import FollowService from "../services/FollowService";

export default new (class FollowController {
  async follow(req: Request, res: Response) {
    FollowService.follow(req, res);
  }
  async unfollow(req: Request, res: Response) {
    FollowService.unfollow(req, res);
  }
  async getFOllower(req: Request, res: Response) {
    FollowService.getFollower(req, res);
  }
  async getFOllowing(req: Request, res: Response) {
    FollowService.getFollowing(req, res);
  }
  async checkFollow(req: Request, res: Response) {
    FollowService.checkFollow(req, res);
  }
})();
