import { Server } from "socket.io";

import { Redis } from "ioredis";

import { produceMessage } from "./kafka";

import "dotenv/config.js";

const pub = new Redis({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT || "6379"),
  username: process.env.REDIS_USERNAME,
  password: process.env.REDIS_PASSWORD,
});
const sub = new Redis({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT || "6379"),
  username: process.env.REDIS_USERNAME,
  password: process.env.REDIS_PASSWORD,
});

class SocketService {
  private socketIO: Server;

  constructor() {
    console.log("[SocketIO] Initialized");
    this.socketIO = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });
    sub.subscribe("messages");
  }

  get io() {
    return this.socketIO;
  }

  public initListeners() {
    this.socketIO.on("connect", (socket) => {
      console.log(`[SocketIO] User connected: ${socket.id}`);

      socket.on("event:message", async (data: { message: string }) => {
        console.log(`[SocketIO] Received message: ${data.message}`);
        await pub.publish(
          "messages",
          JSON.stringify({ message: data.message })
        );
        console.log(`[Redis] Published message to Redis Channel: messages`);
      });

      sub.on("message", async (channel, message) => {
        if (channel === "messages") {
          socket.emit("event:message", message);
          await produceMessage("messages", message);
          console.log(
            `[Kafka] Produced message to Kafka Broker, Channel: ${channel}`
          );
        }
      });

      socket.on("disconnect", () => {
        console.log(`[SocketIO] User disconnected: ${socket.id}`);
      });
    });
  }

  public sendToAll(event: string, data: any) {
    this.socketIO.emit(event, data);
  }
}

export default SocketService;
