import { read } from "fs";
import { Repository } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "../data-source";
import { validate } from "../utils/validator/validation";
import { registerSchema } from "../utils/validator/authValidation";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export default new (class AuthService {
  private readonly authRepository: Repository<User> =
    AppDataSource.getRepository(User);

  async regiter(data) {
    const isValid = validate(registerSchema, data);

    const checkUser = await this.authRepository.countBy({
      username: isValid.username,
    });
    if (checkUser !== 0) throw new Error("username already exist");

    const hash = await bcrypt.hash(isValid.password, 10);

    await this.authRepository.save({
      username: isValid.username,
      full_name: isValid.full_name,
      password: hash,
    });

    const get = await this.authRepository.findOne({
      where: { username: isValid.username },
    });
    const token = jwt.sign({ id: get.id, username: get.username }, "apayah", {
      expiresIn: "3d",
    });
    return {
      message: "Account Succesfully Created",
      user: {
        id: get.id,
        username: get.username,
      },
      token: token,
    };
  }
})();
