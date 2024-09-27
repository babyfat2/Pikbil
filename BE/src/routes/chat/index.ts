import { Router } from "express";
import { getMyRoomChat } from "../../controller/chat/getMyRoomChat";
import { getChatById } from "../../controller/chat/getChatById";
import { firstMessage } from "../../controller/chat/firstMessage";


const router = Router();

router.get("/", (req, res) => {
  res.send("Router Chat is ok");
});

router.get("/getMyRoomChat", getMyRoomChat);
router.get("/getChatById", getChatById);
router.post("/firstMessage", firstMessage);

export default router;
