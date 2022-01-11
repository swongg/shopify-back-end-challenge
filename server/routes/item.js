import express from "express";
import {
  createItem,
  deleteItem,
  updateItem,
  getAllItems,
} from "../controllers/item";

const router = express.Router();

router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);
router.get("/", getAllItems);

export default router;
