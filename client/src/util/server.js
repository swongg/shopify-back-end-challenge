import axios from "axios";
import { backendAddress } from "../constants";
axios.defaults.baseURL = backendAddress;

export const getItems = async () => {
  let response = await axios.get("/item").catch((err) => err);
  let inventoryArr = response.data.items;
  return inventoryArr;
};

export const addItem = async (name, stock, category, formData) => {
  let imageUrl = "";
  if (formData.get('image') !== 'null') {
    imageUrl = await uploadImage(formData);
  }

  await axios.post(`/item`, {
    name: name,
    stock: stock,
    category: category,
    imageUrl: imageUrl,
  });
};

export const deleteItem = async (id) => {
  await axios.delete(`/item/${id}`).catch((err) => err);
};

export const editItem = async (id, name, stock, category) => {
  await axios.put(`/item/${id}`, {
    name: name,
    stock: stock,
    category: category,
  });
};

export const uploadImage = async (formData) => {
  let response = await axios
    .post("/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .catch((err) => console.log(err));

  return response.data.imageUrl;
};
