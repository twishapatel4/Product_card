export const state = {
  product: {},
  products: [],
};

export const createProduct = function (product) {
  const newProduct = {
    id: Math.random() * 100000,
    name: product.name,
    desc: product.desc,
    quantity: product.quantity,
    sku: product.sku,
    price: product.price,
    image: product.image,
    shipping: product.shipping,
  };
  state.products.push(newProduct);
  return newProduct;
};

export const LoadProducts = function () {};

export const updateProduct = function () {};

export const deleteProduct = function () {};
