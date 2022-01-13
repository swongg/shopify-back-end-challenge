import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const InventoryTracker = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState("");

  const clearStates = () => {
    setName("");
    setCount(0);
    setCategory("");
  };

  const handleSubmit = () => {
    clearStates();
  };

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
          value={count}
          onChange={(e) => setCount(e.target.value)}
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
    </Box>
  );
};
export default InventoryTracker;
