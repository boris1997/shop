const clearBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart-popup");
const cartDOMCont = document.querySelector(".cart-popup-content");
const cartDOMheader = document.querySelector(".cart-popup-header");
const cartDOMitems = document.querySelector(".cart-popup-content-items");
const cartDOMfooter = document.querySelector(".cart-popup-content-footer");
const cartBtn = document.querySelector(".fa-shopping-cart");
const clBtn = document.querySelector(".fa-times");
const totalSumCont = document.querySelector(".total-sum-container");
const iphoneItems = document.querySelector(".__main-products-items");

let cart = [];

let cartBtnDOM = [];

let cartItem = {};

/* function callItems() {
  
} */
class UI {
  getCartButtons() {
    const addToCtBtn = [...document.querySelectorAll(".bag-btn")];
    cartBtnDOM = addToCtBtn;
    addToCtBtn.forEach(btn => {
      let id = btn.dataset.id;
      const contPrItems = document.getElementById('__Products')
      id = parseFloat(id);
      let cartId = cart.find(item => item.id === id);
      if (cartId) {
        btn.disabled = true;
        btn.innerHTML = `<i class="far fa-check-circle fa-2x"></i>`;
      }

      btn.addEventListener("click", e => {
        btn.disabled = true;
        btn.innerHTML = `<i class="far fa-check-circle fa-2x"></i>`;
        /*         console.log(btn); */
        Store.getProducts(id);
        cartItem = {
          ...cartItem,
          amount: 1,
          totalPrice: 0
        };
        cart = [...cart, cartItem];
        Store.saveCart();
        this.cartLogic();
      });
    });
  }

  cartLogic() {
    this.showCart();
    this.cartDOMbtnCL();
    this.setCartFooter();
    this.setCartItems();
    this.setCartHeader();
  }

  setCartHeader() {
    if (cartDOMitems.children.length >= 1) {
      cartDOMheader.textContent = "Корзина";
      cartDOMCont.style.transition = "all 0.5s ease-in-out";
      cartDOMCont.classList.remove("empty-cart");
    } else {
      this.changeTextContent();
    }
  }

  cartDOMbtnOP() {
    cartBtn.addEventListener("click", () => {
      this.showCart();
      this.cartDOMbtnCL();
      this.setCartFooter();
    });
  }

  cartDOMbtnCL() {
    clBtn.addEventListener("click", () => {
      this.closeCart();
      if (cartDOMCont.classList.contains("empty-cart")) {
        cartDOMCont.classList.remove("empty-cart");
        cartDOMCont.style.transition = "none";
      }
    });
  }

  showCart() {
    cartDOMCont.classList.add("__show-popup");
    cartDOM.classList.add("visible");
    if (cartDOMitems.children.length === 0) {
      cartDOMCont.classList.add("empty-cart");
    }
    this.setCartItems();
    /* this.setCartTotal(); */
  }

  closeCart() {
    cartDOMCont.classList.remove("__show-popup");
    cartDOM.classList.remove("visible");
    if (cartDOMCont.classList.contains("empty-cart")) {
      cartDOM.style.transition = "none";
    }
  }

  setCartFooter() {
    if (cartDOMitems.children.length >= 1) {
      cartDOMfooter.innerHTML = `
    <h3>Итоговая сумма : <span class="cart-total">0</span><span class="currency">₽</span>  </h3>
    <button class="btn clear-cart">Очистить корзину</button>
    <a href="/order-page.html" class="btn confirm-order">Оформить заказ</a>`;
      this.setCartTotal();
    }
  }

  setCartItems() {
    /* cartDOMfooter. */


    Store.saveCart();
    let result = "";
    cart.forEach(e => {

      result += ` 
        <div data-id=${e.id} class="cart-popup-item">
                      <img src=${e.img} alt="">
                      <div>
                          <h4>${e.title}</h4>
                          <h5>${e.price} RUB</h5>
                          <span data-id=${e.id} class="remove-item">удалить</span>
                      </div>
                      <div>
                          <img data-id=${e.id} src="/img/ld_chevron_up-512.png" class="fas fa-chevron-up"></img>
                          <p class="item-amount">${e.amount}</p>
                          <img  data-id=${e.id} src="/img/ld_chevron_down-512.png" class="fas fa-chevron-down"></i>
                      </div>
                  </div>
        `;
      /* } */
    });
    cartDOMitems.innerHTML = result;
    const cartPopupItem = [...document.querySelectorAll(".cart-popup-item")];
    cartPopupItem.forEach(item => {
      /* console.log(item.firstElementChild) */
      if (item.dataset.id > 196) {
        item.firstElementChild.style.height = "90px";
      }
    });
    /*   console.log(result) */

  }

  setCartTotal() {
    const cartDOMtotal = document.querySelector(".cart-total");
    let resultP = 0;
    let resultA = 0;
    cart.forEach(e => {
      resultP += parseFloat(e.price) * e.amount;
      resultA += e.amount;
      e.totalPrice = parseFloat(e.price) * e.amount;
      Store.saveCart();
    });
    cartDOMtotal.innerHTML = resultP;
    this.CartTotalAmount(resultA);
    this.CartTotalSum(resultP);
  }

  CartTotalAmount(resultA) {
    const totalAmount = document.createElement("span");
    totalAmount.classList.add("cart-items-amount");
    totalAmount.innerHTML = resultA;
    cartBtnCont.appendChild(totalAmount);
    if (
      totalAmount.previousElementSibling.classList.contains("cart-items-amount")
    ) {
      totalAmount.previousElementSibling.remove();
    }

    if (resultA < 1) {
      cartBtnCont.removeChild(totalAmount);
    }
  }

  CartTotalSum(resultP) {
    const containerSum = document.createElement("div");
    containerSum.classList.add("total-sum-item");
    const totalSum = document.createElement("span");
    totalSum.classList.add("total-sum");
    totalSum.innerHTML = `Итого: <br> ${resultP} р.`;
    totalSumCont.appendChild(containerSum);
    containerSum.appendChild(totalSum);

    if (containerSum.previousElementSibling) {
      if (
        containerSum.previousElementSibling.classList.contains("total-sum-item")
      ) {
        containerSum.previousElementSibling.remove();
      }
    }

    if (resultP < 1) {
      totalSumCont.removeChild(containerSum);
    }
  }

  manipulateDOMitems() {
    cartDOMCont.addEventListener("click", e => {
      if (e.target.classList.contains("remove-item")) {
        let remove = e.target;

        let id = remove.dataset.id;
        id = parseFloat(id);
        this.removeItem(id);
        if (cart.length === 0) {
          this.closeCart();
          this.deleteCartFooter();
          this.removeTransition();
          this.changeTextContent();
          /* this.changeHeader() */
        }
      }
      if (e.target.classList.contains("clear-cart")) {
        let cartId = cart.map(item => item.id);
        cartId.forEach(id => this.removeItem(id));
        while (cartDOMitems.children.length > 0) {
          cartDOMitems.removeChild(cartDOMitems.children[0]);
        }
        this.closeCart();
        this.deleteCartFooter();
        this.removeTransition();
        this.changeTextContent();
        /* this.changeHeader() */
      }
      if (e.target.classList.contains("fa-chevron-up")) {
        let incrItem = e.target;
        cart.find(item => {
          let id = incrItem.dataset.id;
          id = parseFloat(id);
          if (item.id === id) {
            (item.amount += 1),
              (incrItem.nextElementSibling.textContent = item.amount);
          }
        });

        Store.saveCart();
        this.setCartTotal();
      }
      if (e.target.classList.contains("fa-chevron-down")) {
        let decItem = e.target;
        let id = decItem.dataset.id;
        id = parseFloat(id);
        cart.find(item => {
          if (item.id === id) {
            if (item.amount > 1) {
              item.amount--;
              decItem.previousElementSibling.textContent = item.amount;
            } else {
              this.removeItem(id);
              if (cart.length === 0) {
                this.closeCart();
                this.deleteCartFooter();
                this.removeTransition();
                this.changeTextContent();
              }
            }
          }
        });

        Store.saveCart();
        this.setCartTotal();
      }
    });
  }

  removeTransition() {
    cartDOM.style.transition = "none";
    cartDOMCont.style.transition = "none";
  }

  deleteCartFooter() {
    cartDOMfooter.innerHTML = "";
  }

  changeTextContent() {
    cartDOMheader.textContent = "Ваша корзина пуста";
  }

  removeItem(id) {
    cart = cart.filter(item => item.id != id);
    Store.saveCart();
    this.inableDOMbtn(id);
    this.setCartItems();
    this.setCartTotal();
  }

  inableDOMbtn(id) {
    cartBtnDOM.find(btn => {
      let idBtn = btn.dataset.id;
      idBtn = parseFloat(idBtn);
      if (idBtn === id) {
        btn.disabled = false;
        btn.innerHTML = ` <i class="fas fa-cart-plus fa-2x" ></i>`;
      }
    });
  }
}

class Store {
  static saveProducts(products) {
    sessionStorage.setItem("products", JSON.stringify(products));
  }
  static getProducts(id) {
    let products = JSON.parse(sessionStorage.getItem("products"));
    id = parseFloat(id);

    return (cartItem = products.find(item => item.id === id));
  }

  static saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  static getCart() {
    return localStorage.getItem("cart") ?
      (cart = JSON.parse(localStorage.getItem("cart"))) : [];
  }
}

document.addEventListener("DOMContentLoaded", e => {
  const ui = new UI();
  Store.getCart();
  ui.cartDOMbtnOP();
  ui.manipulateDOMitems();
  ui.setCartItems();
  ui.setCartFooter();
  ui.setCartHeader();
  /* ui.setCartTotal(); */
});