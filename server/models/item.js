import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
});

export const Item = mongoose.model("Item", itemSchema);
