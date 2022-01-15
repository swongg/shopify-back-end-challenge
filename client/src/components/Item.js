import React from "react";
import Box from "@material-ui/core/Box";
import { backendAddress } from "../constants";
import axios from "axios";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";

axios.defaults.baseURL = backendAddress;

const Item = ({ itemData }) => {
  return (
    <Box>
      <Typography variant="h5">{`Name: ${itemData.name}`}</Typography>
      <Typography variant="h6">{`Stock: ${itemData.stock}`}</Typography>
      <Typography variant="h6">{`Count: ${itemData.category}`}</Typography>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </Box>
  );
};
export default Item;
