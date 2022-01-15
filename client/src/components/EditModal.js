import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const EditModal = ({ handleEdit, setModalOpen }) => {
  const [name, setName] = useState("");
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");
  return (
    <Box>
      <Box padding={2}>
        <Input
          type="string"
          placeholder="Edit Name"
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
          onChange={(e) => {
            setStock(e.target.value);
          }}
        />
      </Box>
      <Box padding={2}>
        <Input
          type="string"
          placeholder="Edit Category"
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
