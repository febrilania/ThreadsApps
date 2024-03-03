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
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        return res.json({
          message: "Invalid ID",
          error: "Invalid input for type integer",
        });
      }
      await this.repliesRepository.delete(id);
      return res.status(200).json({ message: "data succesfully deleted" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async getReplies(req: Request, res: Response): Promise<Response> {
    try {
      const id: number = parseInt(req.params.id, 10);
      const response = await this.repliesRepository.find({
        where: {
          threads: { id: id },
        },
        relations: ["user"],
        select: {
          user: {
            id: true,
            username: true,
            full_name: true,
            photo_profile: true,
          },
          threads: {
            id: true,
            content: true,
          },
        },
      });
      return res
        .status(200)
        .json({ message: "success getting replies", data: response });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const threadId: number = parseInt(req.params.id, 10);
      const content = req.body.content;
      const idUser = res.locals.loginSession;
      let image = null;

      if (req.file) {
        image = res.locals.filename;
      }
      const { error, value } = createRepliesSchema.validate({ content, image });
      if (error) return res.status(400).json(error.details[0].message);

      let isCloudinary = null;
      if (image != null) {
        const cloudImage = await cloudinary.destination(value.image);
        isCloudinary = cloudImage.secure_url;
      }

      const obj = this.repliesRepository.create({
        content: value.content,
        image: isCloudinary,
        user: {
          id: idUser.obj.id,
        },
        threads: {
          id: threadId,
        },
      });

      const reply = await this.repliesRepository.save(obj);

      res.status(200).json({ message: "data berhasil input", data: reply });
    } catch (error) {
      console.error(error, "error");
      return res.status(500).json(error);
    }
  }
})();
