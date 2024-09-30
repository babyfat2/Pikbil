import { Router } from "express";
import { updateProfile } from "../../controller/user/updateProfile";
import { changePassword } from "../../controller/user/changePassword";
import { addCheckout } from "../../controller/user/addCheckout";
import { getMyTrip } from "../../controller/user/getMyTrip";
import { addReviewCar } from "../../controller/user/addReviewCar";
import { changeAvatar } from "../../controller/user/changeAvatar";
import { upload } from "../../middleware/multer";
const router = Router();

router.get("/", (req, res) => {
  res.send("Router User is ok");
});

router.post("/updateProfile", updateProfile);
router.post("/changePassword", changePassword);
router.post("/changeAvatar", upload.single("photo"), changeAvatar);
router.post("/addCheckout", addCheckout);
router.post("/addReviewCar", addReviewCar);
router.get("/getMyTrip", getMyTrip);


export default router;
