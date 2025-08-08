import * as model from "./model.js";
import productview from "./view.js";

const addProduct = function (FormData) {
  const newProduct = model.createProduct(FormData);
  console.log(newProduct);
};
const fetchProd = function (id) {
  const prod = model.state.products.find(
    (product) => product.id === Number(id)
  );
  return prod;
};

const loadingProduct = function (id) {
  let prod = fetchProd(id);
  productview._loadProduct(prod);
};

const editProductHandler = function (id) {
  let prod = fetchProd(id);
  productview._updateProduct(prod);
};

const deleteProductHandler = function (id) {
  let prod = fetchProd(id);
  productview._deleteProduct(prod);
};

const deleteProduct = function (id) {
  model.deleteProduct(id);
};

const updateProduct = function (id) {
  const index = state.products.findIndex(
    (product) => product.id === Number(id)
  );
  console.log(index);
};
console.log(model.state.products);

productview._handleformInput(updateProduct);
productview._handleformInput(addProduct);
productview._;
productview._loadAllProducts(model.state.products);
productview._handleProductCLick(
  loadingProduct,
  editProductHandler,
  deleteProductHandler,
  updateProduct,
  deleteProduct
);
