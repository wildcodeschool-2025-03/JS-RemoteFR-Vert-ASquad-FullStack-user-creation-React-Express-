import express from "express";
import { checkEmailAndStoreUserData } from "../middlewares/checkEmail.middleware";
import { login } from "../modules/auth/authActions";

const router = express.Router();
console.log("authRouter");
// Ajouter étape validation des données (1er middleware)
router.post("/login", checkEmailAndStoreUserData, login);

export default router;
