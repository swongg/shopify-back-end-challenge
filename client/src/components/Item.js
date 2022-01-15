import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { deleteItem, editItem } from "../util/server";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";
import EditModal from "./EditModal";

const Item = ({ itemData, setInventoryUpdate, inventoryUpdate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleDelete = async () => {
    await deleteItem(itemData._id);
    setInventoryUpdate(!inventoryUpdate);
  };

  const handleEdit = async (name, stock, category) => {
    await editItem(itemData._id, name, stock, category);
    setInventoryUpdate(!inventoryUpdate);
  };

  return (
    <Box>
      <Typography variant="h5">{`Name: ${itemData.name}`}</Typography>
      <Typography variant="h6">{`Stock: ${itemData.stock}`}</Typography>
      <Typography variant="h6">{`Category: ${itemData.category}`}</Typography>
      <Button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Edit
      </Button>
      <Button onClick={handleDelete} >
        Delete
      </Button>
      {modalOpen ? <EditModal itemData={itemData} setModalOpen={setModalOpen} handleEdit={handleEdit} /> : <Box />}
    </Box>
  );
};
export default Item;
