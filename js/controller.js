import * as model from "./model.js";
import productview from "./view.js";
const addProductBtn = document.querySelector(".addProduct");
const addProduct = async function (FormData) {
  const newProduct = await model.createProduct(FormData);
  console.log(newProduct);
};
productview._handleformInput(addProduct);
