import { Router } from "express";
import { checkDiscount } from "../../controller/service/checkDiscount";
import { getAllCar } from "../../controller/service/getAllCar";

const router = Router();

router.get("/", (req, res) => {
  res.send("Router Service is ok");
});

router.post("/checkDiscount", checkDiscount);
router.get("/getAllCar", getAllCar);

export default router;
