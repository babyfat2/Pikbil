import { Router } from "express";
import { checkDiscount } from "../../controller/service/checkDiscount";

const router = Router();

router.get("/", (req, res) => {
  res.send("Router Service is ok");
});

router.post("/checkDiscount", checkDiscount)

export default router;
