import { Router } from "express";
import { updateProfile } from "../../controller/user/updateProfile";
import { changePassword } from "../../controller/user/changePassword";
import { addCheckout } from "../../controller/user/addCheckout";
import { getMyTrip } from "../../controller/user/getMyTrip";
const router = Router();

router.get("/", (req, res) => {
  res.send("Router User is ok");
});

router.post("/updateProfile", updateProfile);
router.post("/changePassword", changePassword);
router.post("/addCheckout", addCheckout);
router.get("/getMyTrip", getMyTrip);

export default router;
