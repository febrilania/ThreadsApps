import { Repository } from "typeorm";
import { Following } from "../entities/Following";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { followSchema } from "../utils/validator/FollowValidation";

export default new (class FollowService {
  private readonly followRepository: Repository<Following> =
    AppDataSource.getRepository(Following);

  async follow(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const { value, error } = followSchema.validate(data);
      value.follower = res.locals.loginSession.obj.id;
      if (error) return res.status(400).json(error.details[0].message);
      const idfollow = await this.followRepository.findOne({
        where: {
          following: value.following,
        },
      });
      if (value.following === value.follower) {
        return res
          .status(404)
          .json({ message: "tidak bisa memfollow diri sendiri" });
      }

      if (idfollow) {
        await this.followRepository.remove(idfollow);
        return res.status(200).json({ message: "unfollow" });
      }
      const obj = this.followRepository.create({
        follower: value.follower,
        following: value.following,
      });
      const response = await this.followRepository.save(obj);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
})();
