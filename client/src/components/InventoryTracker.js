import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { getItems, addItem } from "../util/server";
import Item from "./Item";

const InventoryTracker = () => {
  const [name, setName] = useState("");
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");
  const [inventory, setInventory] = useState([]);
  const [inventoryUpdate, setInventoryUpdate] = useState([false]);

  const clearStates = () => {
    setName("");
    setStock(0);
    setCategory("");
  };

  const handleSubmit = async () => {
    await addItem(name, stock, category);
    setInventoryUpdate(!inventoryUpdate);
    clearStates();
  };

  useEffect(async () => {
    let inventoryArr = await getItems();
    setInventory(inventoryArr);
  }, [inventoryUpdate]);

  return (
    <Box>
      <Box padding={2}>
        <TextField
          required
          id="outlined-required"
          label="Inventory Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Box>
      <Box padding={2}>
        <TextField
          id="outlined-number"
          label="Count"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </Box>
      <Box padding={2}>
        <TextField
          id="outlined-required"
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </Box>
      <Box padding={2}>
        <Button onClick={handleSubmit} variant="outlined">
          Submit
        </Button>
      </Box>

      {inventory.map((item) => (
        <Box key={item._id} padding={2}>
          <Item itemData={item} setInventoryUpdate={setInventoryUpdate} inventoryUpdate={inventoryUpdate} />
        </Box>
      ))}
    </Box>
  );
};
export default InventoryTracker;
