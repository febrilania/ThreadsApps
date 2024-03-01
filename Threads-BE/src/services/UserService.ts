import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { Request, Response } from "express";
import {
  createUserSchema,
  loginUserSchema,
  updateUserSchema,
} from "../utils/validator/UserValidation";
import bcrypt = require("bcrypt");

import jwt = require("jsonwebtoken");

export default new (class UserService {
  private readonly userRepository: Repository<User> =
    AppDataSource.getRepository(User);

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.userRepository.find({
        order: {
          id: "DESC",
        },
      });
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
      const hashPassword = await bcrypt.hash(value.password, 10);

      const obj = this.userRepository.create({
        full_name: value.full_name,
        username: value.username,
        email: value.email,
        password: hashPassword,
      });
      const emailRequire = await this.userRepository.findOne({
        where: {
          email: value.email,
          username: value.username,
        },
      });

      if (emailRequire)
        return res.status(400).json({ message: "email/username sudah ada" });

      const user = await this.userRepository.save(obj);
      return res.status(200).json(user);
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
    } catch (error) {
      return res.status(500).json(error);
    }
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

  async login(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const { value, error } = loginUserSchema.validate(data);
      if (error) return res.status(400).json(error.details[0].message);

      const checkEmail = await this.userRepository.findOne({
        where: {
          email: value.email,
        },
      });
      if (!checkEmail) {
        return res.status(401).json({ message: "email tidak terdaftar" });
      }
      const checkPassword = await bcrypt.compare(
        value.password,
        checkEmail.password
      );
      if (!checkPassword) {
        return res.status(401).json({ message: "Password Salah" });
      }
      const obj = this.userRepository.create({
        id: checkEmail.id,
        full_name: checkEmail.full_name,
        username: checkEmail.username,
        email: checkEmail.email,
      });
      const token = jwt.sign({ obj }, "apambuh", { expiresIn: "1h" });
      return res.status(200).json({ message: "login succes", token, obj });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async check(req: Request, res: Response): Promise<Response> {
    try {
      const userLogin = res.locals.loginSession.obj.id;
      const user = await this.userRepository.findOne({
        where: {
          id: userLogin,
        },
      });
      return res.status(200).json({ message: "token is valid", user });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
})();
