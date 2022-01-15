import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { backendAddress } from "../constants";
import axios from "axios";

axios.defaults.baseURL = backendAddress;

const Item = ({ itemData }) => {
  return (
    <Box>
      <p>{itemData.name}</p>{" "}
    </Box>
  );
};
export default Item;
