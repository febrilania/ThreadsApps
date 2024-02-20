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

// const ThreadsData = [
//   {
//     id: 1,
//     content: "halo bang, udah makan belum",
//     image: "ubing.jpg",
//     user: {
//       id: 111,
//       username: "ubing",
//       name: "febrilania",
//       profile_picture: "",
//     },
//     created_at: "7-2-1999",
//     likes: 1004,
//     replies: 8,
//     islike: true,
//   },
//   {
//     id: 2,
//     content: "anjay gurinjay kura kura ninjay",
//     image: "kura kura.jpg",
//     user: {
//       id: 112,
//       username: "grutul",
//       name: "Diaza lania",
//       profile_picture: "",
//     },
//     created_at: "17-9-1912",
//     likes: 1123,
//     replies: 123,
//     islike: true,
//   },

//   {
//     id: 3,
//     content: "cilok goreng, tahu pletok",
//     image: "cilok.jpg",
//     user: {
//       id: 113,
//       username: "kentung",
//       name: "Renova Lania",
//       profile_picture: "opop.jpg",
//     },
//     created_at: "17-9-1929",
//     likes: 1143,
//     replies: 124,
//     islike: true,
//   },
// ];

// export default new (class ThreadsService {
//   async getAllData(): Promise<any[]> {
//     return ThreadsData;
//   }

//   async getOneThreads(threadId: number): Promise<any> {
//     const thread = ThreadsData.find((thread) => thread.id === threadId);
//     if (!thread) {
//       throw new error("threads not found");
//     }
//     return thread;
//   }
// })();

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
    try {
      const data = req.body;
      const userId = res.locals.loginSession.obj.id;
      const { error, value } = createThreadsSchema.validate(data);
      if (error) return res.status(400).json(error.details[0].message);

      const obj = this.threadRepository.create({
        content: value.content,
        image: value.image,
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
      const { error, value } = updateThreadsSchema.validate(data);
      if (error) return res.status(400).json(error.details[0].message);
      if (data.content) {
        obj.content = data.content;
      }
      if (data.image) {
        obj.image = data.image;
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
