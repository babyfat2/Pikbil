import { Router } from "express";
import { checkDiscount } from "../../controller/service/checkDiscount";
import { getAllCar } from "../../controller/service/getAllCar";
import { getAllDiscount } from "../../controller/service/getAllDiscount";
import { getAllProtectionPlans } from "../../controller/service/getAllProtectionPlans";
import { getCommentByCar } from "../../controller/service/getCommentByCar";
import { getTopCar } from "../../controller/service/getTopCar";

const router = Router();

router.get("/", (req, res) => {
  res.send("Router Service is ok");
});

router.post("/checkDiscount", checkDiscount);
router.get("/getAllCar", getAllCar);
router.get("/getAllDiscount", getAllDiscount);
router.get("/getAllProtectionPlans", getAllProtectionPlans);
router.get("/getCommentByCar", getCommentByCar);
router.get("/getTopCar", getTopCar);

export default router;
