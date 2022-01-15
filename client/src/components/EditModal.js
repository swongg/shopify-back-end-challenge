import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const EditModal = ({ itemData, handleEdit, setModalOpen }) => {
  const [name, setName] = useState(itemData.name);
  const [stock, setStock] = useState(itemData.stock);
  const [category, setCategory] = useState(itemData.category);
  return (
    <Box>
      <Box padding={2}>
        <Input
          type="string"
          placeholder="Edit Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Box>
      <Box padding={2}>
        <Input
          min="0"
          type="number"
          placeholder="Edit Stock"
          value={stock}
          onChange={(e) => {
            setStock(e.target.value);
          }}
        />
      </Box>
      <Box padding={2}>
        <Input
          type="string"
          placeholder="Edit Category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
      </Box>
      <Button
        onClick={() => {
          handleEdit(name, stock, category);
          setModalOpen(false);
        }}
      >
        Update
      </Button>
    </Box>
  );
};
export default EditModal;
