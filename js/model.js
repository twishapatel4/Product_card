export const state = {
  product: {},
  products: [],
};

export const createProduct = function (product) {
  const newProduct = {
    id: Math.random() * 100000,
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
