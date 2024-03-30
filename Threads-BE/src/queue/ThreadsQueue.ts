import { Request, Response } from "express";
import { createThreadsSchema } from "../utils/validator/threadsValidation";
import RabbitMQConfig from "../libs/rabbitmq";

export default new (class ThreadsQueue {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = {
        content: req.body.content,
        image: res.locals.filename,
      };

      const { error, value } = createThreadsSchema.validate(data);
      if (error) return res.status(400).json(error.details[0].message);

      const user = res.locals.loginSession;
      const payload = {
        content: value.content,
        image: value.image,
        user: {
          id: user.obj.id,
          full_name: user.obj.full_name,
          username: user.obj.username,
          photo_profile: user.obj.photo_profile,
        },
      };

      const errorQueue = await RabbitMQConfig.sendToMessage(
        process.env.QUEUE_NAME,
        payload
      );
      if (errorQueue) return res.status(500).json({ message: errorQueue });

      return res.status(201).json({
        message: "thread is queued!!",
        data: payload,
      });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
})();
