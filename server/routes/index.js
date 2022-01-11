import item from "./item";
import express from "express";

const router = express.Router();
router.use(`${process.env.BASE_API_URL}/item`, item);

export default router;
