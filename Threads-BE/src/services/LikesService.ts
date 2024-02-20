import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Request, Response, response } from "express";
import { postLikeSchema } from "../utils/validator/LikesValidation";
import { Likes } from "../entities/Likes";

export default new (class LikesService {
  private readonly likesRepository: Repository<Likes> =
    AppDataSource.getRepository(Likes);

  async like(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const { error, value } = postLikeSchema.validate(data);
      if (error) return res.status(400).json(error.details[0].message);
      value.user = res.locals.loginSession.obj.id;

      const likeSelect = await this.likesRepository.findOne({
        where: {
          user: {
            id: value.user,
          },
          threads: {
            id: value.threads,
          },
        },
      });
      if (likeSelect) {
        await this.likesRepository.remove(likeSelect);
        return res.status(200).json({ message: "like removed" });
      }

      const obj = this.likesRepository.create({
        user: value.user,
        threads: value.threads,
      });

      const response = await this.likesRepository.save(obj);

      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
})();
