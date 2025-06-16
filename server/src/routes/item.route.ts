import express from "express";

const router = express.Router();

import itemActions from "../modules/item/itemActions";

router.get("/", itemActions.browse);
router.get("/:id", itemActions.read);
router.post("/", itemActions.add);

export default router;
