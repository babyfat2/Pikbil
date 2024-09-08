import { Router } from "express";
import { addCar } from "../../controller/actions/addCar";
const router = Router();

router.get("/", (req, res) => {
  res.send("Router User is ok");
});


export default router;
