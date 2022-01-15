import React from "react";
import Box from "@material-ui/core/Box";
import { deleteItem } from "../util/server";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";

const Item = ({ itemData, setInventoryUpdate, inventoryUpdate }) => {
  const handleDelete = async () => {
    await deleteItem(itemData._id);
    setInventoryUpdate(!inventoryUpdate);
  };

  const handleEdit = () => {};

  return (
    <Box>
      <Typography variant="h5">{`Name: ${itemData.name}`}</Typography>
      <Typography variant="h6">{`Stock: ${itemData.stock}`}</Typography>
      <Typography variant="h6">{`Category: ${itemData.category}`}</Typography>
      <Button>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </Box>
  );
};
export default Item;
