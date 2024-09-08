import { Router } from "express";
import { updateProfile } from "../../controller/user/updateProfile";
const router = Router();

router.get("/", (req, res) => {
  res.send("Router User is ok");
});

router.post("/updateProfile", updateProfile);

export default router;
