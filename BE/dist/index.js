"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionMiddleWare = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_session_1 = __importDefault(require("express-session"));
const auth_1 = require("./src/middleware/auth");
const auth_2 = __importDefault(require("./src/routes/auth"));
const user_1 = __importDefault(require("./src/routes/user"));
const actions_1 = __importDefault(require("./src/routes/actions"));
const service_1 = __importDefault(require("./src/routes/service"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const redis_1 = require("redis");
const node_cron_1 = __importDefault(require("node-cron"));
const auto_1 = require("./src/auto");
let redisClient = (0, redis_1.createClient)({
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
let redisStore = new connect_redis_1.default({
    client: redisClient,
    prefix: "Travel:",
});
node_cron_1.default.schedule('* * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('running a task every minute');
    yield (0, auto_1.updateDataInDB)();
}));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
exports.sessionMiddleWare = (0, express_session_1.default)({
    secret: process.env.SECRET,
    resave: false,
    store: redisStore,
    saveUninitialized: false,
});
app.set("trust proxy", 1);
app.use(exports.sessionMiddleWare);
app.get('/', (req, res) => {
    res.send('Hello World Faaaaaaaaaaar!');
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
app.use("/api/auth", auth_2.default);
app.use("/api/actions", auth_1.blockJWT, auth_1.protect, actions_1.default);
app.use("/api/user", auth_1.blockJWT, auth_1.protect, user_1.default);
app.use("/api/service", service_1.default);
