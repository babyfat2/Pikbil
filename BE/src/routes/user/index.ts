import { Router } from "express";
import { updateProfile } from "../../controller/user/updateProfile";
import { changePassword } from "../../controller/user/changePassword";
const router = Router();

router.get("/", (req, res) => {
  res.send("Router User is ok");
});

router.post("/updateProfile", updateProfile);
router.post("/changePassword", changePassword);

export default router;
