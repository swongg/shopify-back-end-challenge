import item from "./item";
import image from "./image";
import express from "express";

const router = express.Router();
router.use("/item", item);
router.use("/image", image);

export default router;
