import express from "express";

const router = express.Router();

import { hashPassword } from "../middlewares/argon.middleware";
import { checkEmail } from "../middlewares/checkEmail.middleware";
import { add } from "../modules/user/userActions";
import validateUser from "../validation/userValidation";

router.post("/register", validateUser, checkEmail, hashPassword, add);

export default router;
