
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";
import { blockJWT, protect } from "./src/middleware/auth";
import authRouter from "./src/routes/auth";
import userRouter from "./src/routes/user";
import actionsRouter from "./src/routes/actions";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

export const sessionMiddleWare = session({
  secret: process.env.SECRET as string,
  resave: false,
  saveUninitialized: false,
});
app.set("trust proxy", 1);
app.use(sessionMiddleWare);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World Faaaaaaaaaaar!')
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.use("/api/auth", authRouter);
app.use("/api/actions",blockJWT, protect, actionsRouter);
app.use("/api/user",blockJWT, protect, userRouter);

