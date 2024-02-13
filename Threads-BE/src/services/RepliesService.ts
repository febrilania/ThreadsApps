import { Repository } from "typeorm";
import { Replies } from "../entities/Replies";
import { AppDataSource } from "../data-source";
import { Request, Response, json } from "express";
import { createRepliesSchema } from "../utils/validator/RepliesValidation";

export default new (class RepliesService {
  private readonly repliesRepository: Repository<Replies> =
    AppDataSource.getRepository(Replies);

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const replies = await this.repliesRepository.find();
      return res.status(200).json(replies);
    } catch (error) {
      return res.status(500).json({ message: "internal server error" });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const postReply = req.body;
      const { error, value } = createRepliesSchema.validate(postReply);
      if (error) return res.status(400).json(error.details[0].message);

      const obj = await this.repliesRepository.create({
        content: value.content,
        image: value.image,
      });
      const reply = await this.repliesRepository.save(obj);
      res.status(200).json(reply);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
})();
