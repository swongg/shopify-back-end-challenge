import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { backendAddress } from "../constants";
import Item from "./Item";
import axios from "axios";

axios.defaults.baseURL = backendAddress;

const InventoryTracker = () => {
  const [name, setName] = useState("");
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");
  const [inventory, setInventory] = useState([]);

  const clearStates = () => {
    setName("");
    setStock(0);
    setCategory("");
  };

  const handleSubmit = () => {
    axios.post(`/item`, {
      name: name,
      stock: stock,
      category: category,
    });
    clearStates();
  };

  useEffect(() => {
    axios
      .get("/item")
      .then((res) => {
        let inventoryArr = res.data.items;
        setInventory(inventoryArr);
      })
      .catch((err) => err);
  });

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
          <Item itemData={item} />
        </Box>
      ))}
    </Box>
  );
};
export default InventoryTracker;
