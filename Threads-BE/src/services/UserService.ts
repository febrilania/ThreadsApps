import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { Request, Response } from "express";
import {
  createUserSchema,
  updateUserSchema,
} from "../utils/validator/UserValidation";
import { request } from "http";

export default new (class UserService {
  private readonly userRepository: Repository<User> =
    AppDataSource.getRepository(User);

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.userRepository.find();
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const { error, value } = createUserSchema.validate(data);
      if (error) return res.status(400).json(error.details[0].message);

      const obj = this.userRepository.create({
        full_name: value.full_name,
        username: value.username,
        email: value.email,
        password: value.password,
      });
      const user = await this.userRepository.save(obj);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id, 10);
      const obj = await this.userRepository.findOne({
        where: {
          id,
        },
      });
      const data = req.body;
      const { error, value } = updateUserSchema.validate(data);
      if (error) return res.status(400).json(error.details[0].message);
      if (data.username) {
        obj.username = data.username;
      }
      if (data.full_name) {
        obj.full_name = data.full_name;
      }
      if (data.password) {
        obj.password = data.password;
      }
      if (data.email) {
        obj.email = data.email;
      }

      const user = await this.userRepository.save(obj);
      res.status(200).json(user);
    } catch (error) {}
  }

  async findOne(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const user = await this.userRepository.findOne({
        where: {
          id,
        },
      });
      if (!user) return res.status(400).json({ message: "id not found" });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const user = await this.userRepository.delete(id);
      if (!user) return res.status(400).json({ message: "acoountnot found" });
      res.status(200).json({ message: `account ${user} succesfully deleted` });
    } catch (error) {
      res.status(500).json(error);
    }
  }
})();
