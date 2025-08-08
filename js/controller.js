import * as model from "./model.js";
import productview from "./view.js";

const addProduct = function (FormData) {
  const newProduct = model.createProduct(FormData);
  console.log(newProduct);
};

const loadingProduct = function (id) {
  const prod = model.state.products.find(
    (product) => product.id === Number(id)
  );
  console.log(prod);
  productview._loadProduct(prod);
};

const editProduct = function (id) {};

console.log(model.state.products);

productview._handleformInput(addProduct);
productview._loadAllProducts(model.state.products);
productview._handleProductCLick(loadingProduct);
productview._updateProduct(editProduct);
