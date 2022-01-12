import express from "express";
import {
  createItem,
  deleteItem,
  updateItem,
  getItemById,
  getAllItems,
} from "../controllers/item";

const router = express.Router();

router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);
router.get("/:id", getItemById);
router.get("/", getAllItems);

export default router;
