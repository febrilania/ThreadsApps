import * as amqp from "amqplib";
import cloudinary from "../libs/cloudinary";
import { Repository } from "typeorm";
import { Threads } from "../entities/Threads";
import { AppDataSource } from "../data-source";

export default new (class ThreadsWorker {
  private readonly ThreadsWorker: Repository<Threads> =
    AppDataSource.getRepository(Threads);

  async create(queueName: string, connection: amqp.Connection) {
    try {
      const channel = await connection.createChannel();
      await channel.assertQueue(queueName);
      await channel.consume(queueName, async (message) => {
        if (message !== null) {
          try {
            const data = JSON.parse(message.content.toString());
            console.log(data.image, "ini data.image");
            const cloudImage = await cloudinary.destination(data.image);
            console.log(cloudImage, "ini cloudimage");

            const obj = this.ThreadsWorker.create({
              content: data.content,
              image: cloudImage.secure_url,
              user: data.user,
            });

            await this.ThreadsWorker.save(obj);
            console.log("threads is created");
            channel.ack(message);
          } catch (error) {
            console.log(error);
          }
        }
      });
    } catch (error) {
      console.log({ message: error });
    }
  }
})();
