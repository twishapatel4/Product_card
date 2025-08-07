const addProductBtn = document.querySelector(".addProduct");
const form = document.querySelector(".form");
class productview {
  _handleformInput() {
    addProductBtn.addEventListener("click", function () {
      console.log(this);
      console.log("btn");
      const data = [...new FormData(form)];
      console.log(data);
    });
  }
}
export default new productview();
