import { Repository } from "typeorm";
import { Replies } from "../entities/Replies";
import { AppDataSource } from "../data-source";
import { Request, Response, json } from "express";
import { createRepliesSchema } from "../utils/validator/RepliesValidation";
import cloudinary from "../libs/cloudinary";

export default new (class RepliesService {
  private readonly repliesRepository: Repository<Replies> =
    AppDataSource.getRepository(Replies);

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const idData = parseInt(req.params.id, 10);
      const data = await this.repliesRepository.findOne({
        where: {
          id: idData,
        },
      });

      await this.repliesRepository.delete(data);
      return res.status(200).json({ message: "data succesfully deleted" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

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
      const uploadFile = res.locals.filename;
      const { error, value } = createRepliesSchema.validate(postReply);
      if (error) return res.status(400).json(error.details[0].message);
      cloudinary.upload();
      const cloudImage = await cloudinary.destination(uploadFile);
      value.user = res.locals.loginSession.obj.id;

      const obj = this.repliesRepository.create({
        content: value.content,
        image: cloudImage.image,
        user: {
          id: value.user,
        },
        threads: {
          id: value.threads,
        },
      });
      const reply = await this.repliesRepository.save(obj);
      res.status(200).json(reply);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
})();
