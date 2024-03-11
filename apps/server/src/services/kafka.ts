import { Kafka, Producer } from "kafkajs";
import fs from "fs";
import path from "path";
import "dotenv/config.js";
import prisma from "./prisma";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: [process.env.KAFKA_BROKER || "localhost:9092"],
  ssl: {
    ca: [fs.readFileSync(path.resolve("./certs/ca.pem"), "utf-8")],
  },
  sasl: {
    mechanism: "plain",
    // mechanism: "scram-sha-512",
    username: process.env.KAFKA_USERNAME || "default",
    password: process.env.KAFKA_PASSWORD || "password",
  },
});

let producer: Producer | null = null;

export async function createProducer() {
  if (producer) return producer;
  const _producer = kafka.producer();
  await _producer.connect();
  producer = _producer;
  return producer;
}

export async function startConsumer() {
  const consumer = kafka.consumer({ groupId: "default" });
  await consumer.connect();
  await consumer.subscribe({ topic: "messages", fromBeginning: true });

  console.log("[Kafka] Consumer started");

  await consumer.run({
    autoCommit: true,
    // autoCommitInterval: 5000,
    eachMessage: async ({ topic, partition, pause, message }) => {
      if (!message.value) return;
      console.log({
        value: message.value?.toString(),
      });
      try {
        await prisma.message.create({
          data: {
            content: message.value?.toString(),
          },
        });
      } catch (error) {
        console.log(
          "[Kafka] Error occurred while consuming message from Kafka Broker"
        );
        console.error(error);
        pause();
        console.log("[Kafka] Pausing consumer for 60 seconds");
        setTimeout(() => {
          console.log("[Kafka] Resuming consumer");
          consumer.resume([{ topic }]);
        }, 60 * 1000);
      }
    },
  });
}

export async function produceMessage(topic: string, message: string) {
  const _producer = await createProducer();
  await _producer.send({
    topic,
    messages: [{ key: `message-${Date.now()}`, value: message }],
  });
}

export default kafka;
