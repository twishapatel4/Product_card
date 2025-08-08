const addProductBtn = document.querySelector(".addProduct");
const updateProductBtn = document.querySelector(".UpdateProduct");
const deleteProductBtn = document.querySelector(".DeleteProduct");
const productList = document.querySelector(".productList");
// const productLink = document.querySelector(".product_link");
const title = document.querySelector(".mode");
const form = document.querySelector(".form");
const formContent = document.querySelector(".form-main");
const displayProduct = document.querySelector(".displayProduct");

class productview {
  _handleformInput(handler, Updatehandler, id = null) {
    addProductBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // console.log(this);
      // console.log("btn");
      /* This was working without images but when you upload image and the use url.objectcreateurl it gives error cause it is stored as temporary blob object
      const dataArr = [...new FormData(form)];
      const data = Object.fromEntries(dataArr);*/
      const formData = new FormData(form);
      let flag = false;
      let image = formData.get("image");
      let data;
      if (id) flag = true;
      if (image && image.size > 0) {
        const reader = new FileReader();
        reader.onload = function () {
          data = {
            id: id ?? Date.now().toString(),
            productName: formData.get("productName"),
            desc: formData.get("desc"),
            quantity: formData.get("quantity"),
            sku: formData.get("sku"),
            price: formData.get("price"),
            shipping: formData.get("shipping"),
            image: reader.result,
          };
          if (flag) {
            Updatehandler(data, id);
            return;
          }
          handler(data);
        };
        reader.readAsDataURL(image);
        return;
      } else {
        data = {
          id: id ?? Date.now().toString(),
          productName: formData.get("productName"),
          desc: formData.get("desc"),
          quantity: formData.get("quantity"),
          sku: formData.get("sku"),
          price: formData.get("price"),
          shipping: formData.get("shipping"),
          image: "",
        };
        handler(data);
      }
    });
  }
  _loadAllProducts(products) {
    const HTML = products
      .map(
        (product) =>
          `<li class="preview">
      <a class="product_link" href="#${product.id}" data-id="${product.id}">

          <img  class="preview__fig" src=${product.image} alt="Test" />
          <div class="product_details">
          <h4 class="product_name"> ${product.name}</h4>
          <svg class="edit"data-id="${product.id}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>

          <svg class="delete" data-id="${product.id}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</div>
      </a>
    </li>`
      )
      .join(" ");
    productList.innerHTML = HTML;
  }

  _handleProductCLick(
    handlerView,
    handlerUpdate,
    handlerDelete,
    updateProd,
    DeleteProd
  ) {
    productList.addEventListener("click", function (e) {
      // if (!flag) return;
      const edit = e.target.closest(".edit");
      const deleteIcon = e.target.closest(".delete");
      const Product = e.target.closest(".product_link");
      if (edit) {
        console.log("Edit btn");
        const productId = edit.dataset.id;
        console.log(productId);
        handlerUpdate(productId);
        updateProductBtn.addEventListener("click", function () {
          updateProd(productId);
        });
        title.textContent = "Updating";
        return;
      }
      if (deleteIcon) {
        console.log("Delete btn");
        const productId = deleteIcon.dataset.id;
        console.log(productId);
        handlerDelete(productId);
        title.textContent = "Are you sure you want to Delete the product?";
        deleteProductBtn.addEventListener("click", function () {
          console.log("Delete");
          DeleteProd(productId);
        });
        return;
      }
      if (Product) {
        console.log(Product);
        const productId = Product.dataset.id;
        console.log(productId);
        handlerView(productId);
        title.textContent = "Reading Mode";
        return;
      }
    });
  }

  _loadProduct(prod) {
    console.log("in load product");
    formContent.classList.add("hidden");
    displayProduct.classList.remove("hidden");
    const HTML = `Name: ${prod.name}<br/>
    <img src="${prod.image}"/>
    `;
    displayProduct.innerHTML = HTML;
    console.log("HTML Added");
    addProductBtn.classList.add("hidden");
    updateProductBtn.classList.add("hidden");
    deleteProductBtn.classList.add("hidden");
  }
  _updateProduct(prod) {
    updateProductBtn.classList.remove("hidden");
    deleteProductBtn.classList.add("hidden");
    addProductBtn.classList.add("hidden");
    formContent.classList.remove("hidden");
  }
  _deleteProduct(prod) {
    updateProductBtn.classList.add("hidden");
    displayProduct.classList.remove("hidden");
    deleteProductBtn.classList.remove("hidden");
    addProductBtn.classList.add("hidden");
    formContent.classList.add("hidden");
  }
}
export default new productview();
