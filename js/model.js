export const state = {
  product: {},
  products: [],
};

export const createProduct = function (product) {
  const newProduct = {
    id: product.id,
    name: product.productName,
    desc: product.desc,
    quantity: product.quantity,
    sku: product.sku,
    price: product.price,
    shipping: product.shipping,
    // this will store it temporary and not work with storage image: URL.createObjectURL(product.image),
    image: product.image,
  };
  state.products.push(newProduct);
  console.log(state.products);
  // console.log(newProduct);
  persistProducts();
  return newProduct;
};

export const updateProduct = function (prod) {};

export const deleteProduct = function (id) {
  state.products = state.products.filter(
    (product) => Number(product.id) !== Number(id)
  );
  console.log("Deleted");
  console.log(state.products);
  persistProducts();
};
const persistProducts = function () {
  localStorage.setItem("Products", JSON.stringify(state.products));
};
//localStorage.clear("Products");
const init = function () {
  const storage = localStorage.getItem("Products");
  if (storage) state.products = JSON.parse(storage);
  // console.table(state.products);
  //persistProducts();
};

// const init = function () {
//   const storage = localStorage.setItem("Products");
//   console.log(storage);
// };
init();
