import http from "http";
import express from "express";
import SocketService from "./services/socket";
import { startConsumer } from "./services/kafka";

const app: express.Application = express();

async function init() {
  startConsumer().then(() => {
    console.log("[Kafka] Consumer started");
  });
  const socketService = new SocketService();

  const httpServer = http.createServer(app);

  socketService.io.attach(httpServer);

  const PORT = process?.env.PORT || 8000;
  httpServer.listen(PORT, () => {
    console.log(`[HTTP] Server running on port ${PORT}`);
  });

  socketService.initListeners();
}

init().catch((error) => {
  console.error(error);
  process.exit(1);
});
