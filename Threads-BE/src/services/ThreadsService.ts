// import { promises } from "dns";
// import { Threads } from "../entities/Threads";
// import { threadId } from "worker_threads";
// import { error } from "console";

import { Repository, TreeRepositoryUtils } from "typeorm";
import { Threads } from "../entities/Threads";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import {
  createThreadsSchema,
  updateThreadsSchema,
} from "../utils/validator/threadsValidation";
import { User } from "../entities/User";
import cloudinary from "../libs/cloudinary";
import * as fs from "fs";
import { promisify } from "util";
import LikesService from "./LikesService";

class ThreadsService {
  private readonly threadRepository: Repository<Threads> =
    AppDataSource.getRepository(Threads);

  async find(req: Request, res: Response) {
    try {
      const threads = await this.threadRepository.find({
        order: {
          id: "DESC",
        },
        relations: {
          user: true,
          likes: true,
          replies: true,
        },
      });
      let data = [];
      let i = 0;
      for (i; i < threads.length; i++) {
        data.push({
          id: threads[i].id,
          content: threads[i].content,
          image: threads[i].image,
          created_at: threads[i].created_at,
          user: threads[i].user,
          like: threads[i].likes,
          replies: threads[i].replies,
          likeLength: threads[i].likes.length,
          repliesLength: threads[i].replies.length,
        });
      }

      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }
  async create(req: Request, res: Response) {
    const deleteFiles = promisify(fs.unlink);
    try {
      const content = req.body.content;
      const userId = res.locals.loginSession.obj.id;
      let image = null;
      if (req.file) {
        image = res.locals.filename;
      }

      const { error, value } = createThreadsSchema.validate({
        content,
        image,
      });
      if (error) return res.status(400).json(error.details[0].message);

      let isCloudinary = null;

      if (image != null) {
        const cloudImage = await cloudinary.destination(image);
        isCloudinary = cloudImage.secure_url;
        await deleteFiles(`src/uploads/${image}`);
      }

      const obj = this.threadRepository.create({
        content: value.content,
        image: isCloudinary,
        user: {
          id: userId,
        },
      });
      const threads = await this.threadRepository.save(obj);
      res.status(200).json(threads);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const obj = await this.threadRepository.findOne({
        where: {
          id,
        },
      });
      const data = req.body;
      const uploadImage = res.locals.filename;
      const { error, value } = updateThreadsSchema.validate(data);
      if (error) return res.status(400).json(error.details[0].message);

      const cloudImage = await cloudinary.destination(uploadImage);
      if (data.content) {
        obj.content = value.content;
      }
      if (data.image) {
        obj.image = cloudImage.image;
      }
      const thread = await this.threadRepository.save(obj);
      res.status(200).json(thread);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id, 10);
      const obj = await this.threadRepository.findOne({
        where: {
          id,
        },
      });
      if (!obj) return res.status(404).json({ message: "id tidak ada" });
      await this.threadRepository.delete({ id });
      return res.status(200).json({ message: "data berhasil dihapus" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id, 10);
      const obj = await this.threadRepository.findOne({
        where: { id },
        relations: {
          user: true,
          replies: true,
          likes: true,
        },
      });
      if (!obj) return res.status(500).json({ message: "id not found" });
      const data = {
        id: obj.id,
        content: obj.content,
        image: obj.image,
        created_at: obj.created_at,
        user: obj.user,
        replies: obj.replies,
        likes: obj.likes,
        repliesLength: obj.replies.length,
        likeLength: obj.likes.length,
      };
      return res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new ThreadsService();
