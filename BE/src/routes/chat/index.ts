import { Router } from "express";
import { getMyRoomChat } from "../../controller/chat/getMyRoomChat";


const router = Router();

router.get("/", (req, res) => {
  res.send("Router Chat is ok");
});

router.get("/getMyRoomChat", getMyRoomChat);

export default router;
