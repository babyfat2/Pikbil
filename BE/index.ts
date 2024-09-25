import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";
import { blockJWT, protect } from "./src/middleware/auth";
import authRouter from "./src/routes/auth";
import userRouter from "./src/routes/user";
import actionsRouter from "./src/routes/actions";
import serviceRouter from "./src/routes/service";
import chatRouter from "./src/routes/chat";
import RedisStore from "connect-redis";
import { createClient } from "redis";
import cron from "node-cron";
import { updateDataInDB } from "./src/auto";
import http from 'http';
import configureSocket from "./src/lib/socket";

let redisClient = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  },
});

redisClient.connect().catch(console.error);
redisClient.on("ready", () => {
  console.log("Client is ready");
  // redisClient.flushDb().then((e) => {
  //   console.log("flush", e);
  // });
});

redisClient.on("error", (err) => {
  console.error("Error occurred:", err);
});

let redisStore = new RedisStore({
  client: redisClient,
  prefix: "Travel:",
});

cron.schedule('* * * * *', async () => {
  console.log('running a task every minute');
  await updateDataInDB();
});

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

export const sessionMiddleWare = session({
  secret: process.env.SECRET as string,
  resave: false,
  store: redisStore,
  saveUninitialized: false,
});
app.set("trust proxy", 1);
app.use(sessionMiddleWare);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World Faaaaaaaaaaar!')
});

const port = process.env.PORT || 8000;

const server = http.createServer(app);

// Thiết lập socket
configureSocket(server);

server.listen(port, () => {
  console.log('Server is running on port 3000');
});

app.use("/api/auth", authRouter);
app.use("/api/actions", blockJWT, protect, actionsRouter);
app.use("/api/user", blockJWT, protect, userRouter);
app.use("/api/service", serviceRouter);
app.use("/api/chat",blockJWT, protect,  chatRouter);