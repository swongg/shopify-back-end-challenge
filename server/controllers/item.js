import { Item } from "../models/item";
import {ObjectId} from "./utils"

export const createItem = async (req, res) => {
  const item = new Item({
    name: req.body.name,
    stock: req.body.stock,
    category: req.body.category,
  });

  try {
    const existingItem = await Item.findOne({ name: req.body.name });

    if (existingItem) {
      return res.status(400).json({
        success: false,
        error: "Item of that name already exists in the inventory",
      });
    }

    await item.save();

    return res.status(201).json({
      success: true,
      id: item._id,
      message: "Item has been successfully added!",
    });
  } catch (err) {
    return res.status(400).json({
      error: err,
      message: "Item was not added!",
    });
  }
};

export const deleteItem = async (req, res) => {
  console.log('logging the id');
  console.log(ObjectId(req.params.id));
  try {
    const item = await Item.findByIdAndDelete(ObjectId(req.params.id));

    if (!item) {
      return res
        .status(404)
        .json({ success: false, error: "Item with that id not found" });
    }

    return res.status(200).json({ success: true, item });
  } catch (err) {
    return res.status(400).json({ error: err, message: "Item not deleted" });
  }
};

export const updateItem = async (req, res) => {
  const updatedItem = req.body;
  if (!updatedItem) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  try {
    await Item.findByIdAndUpdate(
      ObjectId(req.params.id),
      updatedItem,
      (err, item) => {
        if (!item) {
          return res.status(404).json({ success: false, error: err });
        }
        return res
          .status(200)
          .json({ success: true, id: item._id, message: "Item updated" });
      }
    );
  } catch (err) {
    return res
      .status(400)
      .json({ error: err, message: "Item was not updated" });
  }
};
export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(ObjectId(req.params.id));
    if (!item) {
      return res
        .status(404)
        .json({ success: false, error: "Item with that id not found" });
    }

    return res.status(200).json({ success: true, item });
  } catch (err) {
    return res
      .status(400)
      .json({ error: err, message: "Could not fetch item" });
  }
};

export const getAllItems = async (req, res) => {
  const filter = {};

  try {
    const items = await Item.find(filter);

    return res.status(200).json({ success: true, items });
  } catch (err) {
    return res
      .status(400)
      .json({ error: err, message: "Could not retrieve items in inventory" });
  }
};
