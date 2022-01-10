import Item from "../models/item";

createItem = async (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide an inventory item",
    });
  }

  const item = new Item(body);
};
