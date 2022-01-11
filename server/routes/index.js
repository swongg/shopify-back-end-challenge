import item from "./item";
import express from "express";

const router = express.Router();
router.use("/item", item);

export default router;
