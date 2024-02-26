// import { promises } from "dns";
// import { Threads } from "../entities/Threads";
// import { threadId } from "worker_threads";
// import { error } from "console";

import { Repository } from "typeorm";
import { Threads } from "../entities/Threads";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import {
  createThreadsSchema,
  updateThreadsSchema,
} from "../utils/validator/threadsValidation";
import { User } from "../entities/User";
import UploadFile from "../middlewares/UploadFile";
import cloudinary from "../libs/cloudinary";
import * as fs from "fs";
import { promisify } from "util";

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
        },
      });
      return res.status(200).json(threads);
    } catch (error) {
      console.log(error);
    }
  }
  async create(req: Request, res: Response) {
    const deleteFiles = promisify(fs.unlink);
    try {
      const data = req.body;
      const userId = res.locals.loginSession.obj.id;
      const uploadImage = res.locals.filename;
      const { error, value } = createThreadsSchema.validate(data);
      if (error) return res.status(400).json(error.details[0].message);
      cloudinary.upload();
      const cloudImage = await cloudinary.destination(uploadImage);

      const obj = this.threadRepository.create({
        content: value.content,
        image: cloudImage.secure_url,
        user: {
          id: userId,
        },
      });
      await deleteFiles(`src/uploads/${res.locals.filename}`);
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
      cloudinary.upload();
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
      const obj = await this.threadRepository.findOne({ where: { id } });
      if (!obj) return res.status(500).json({ message: "id not found" });
      return res.status(200).json(obj);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new ThreadsService();
