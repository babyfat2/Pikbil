import { Router } from "express";
import {
  loginValidation,
  signupValidation,
} from "../../middleware/inputValidation";
import { handleErrors } from "../../middleware/handleErrors";
import { login } from "../../controller/auth/login";
import { register } from "../../controller/auth/register";
const router = Router();

router.get("/", (req, res) => {
  res.send("auth is ok");
});
router.post("/login", loginValidation, handleErrors, login);
router.post("/register", signupValidation, handleErrors, register);

export default router;
