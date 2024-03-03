import * as amqp from "amqplib";

export default new (class RabbitMQConfig {
  async sendToMessage(queueName: string, payload: any): Promise<boolean> {
    try {
      const connection = await amqp.connect(process.env.URL_CONNECT);
      const channel = await connection.createChannel();
      await channel.assertQueue(queueName);
      channel.sendToQueue(queueName, Buffer.from(JSON.stringify(payload)));
      await channel.close();
      await connection.close();
      return null;
    } catch (error) {
      return error;
    }
  }
})();
