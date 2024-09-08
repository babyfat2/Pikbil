import { Router } from "express";
import { addCar } from "../../controller/actions/addCar";
const router = Router();

router.get("/", (req, res) => {
  res.send("Actions is ok");
});

router.post("/addCar", addCar);

export default router;
