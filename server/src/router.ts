import express from "express";
import { checkAuth, checkAge } from "./middlewares/jwt.middleware";

const router = express.Router();

import itemRouter from "./routes/item.route";

router.use("/items", itemRouter);

import userRouter from "./routes/user.route";

router.use("/user", userRouter);

import authRouter from "./routes/auth.route";

router.use("/auth", authRouter);

router.get("/test", checkAuth, checkAge, (req, res) => {
  res.status(200).send("Hello You, You're older than 18");
});

export default router;
