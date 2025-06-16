import express from "express";

const router = express.Router();

import itemRouter from "./routes/item.route";

router.use("/items", itemRouter);

import userRouter from "./routes/user.route";

router.use("/user", userRouter);

export default router;
