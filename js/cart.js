const clearBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart-popup");
const cartDOMCont = document.querySelector(".cart-popup-content");
const cartDOMitems = document.querySelector(".cart-popup-content-items");
const cartDOMtotal = document.querySelector(".cart-total");
const cartBtn = document.querySelector('.fa-shopping-cart');
const cartBtnCont = document.querySelector('.cart')
const totalSumCont = document.querySelector('.total-sum-container')

let cart = [];

let cartItem = {};

class UI {
    getCartButton() {
        cartBtn.addEventListener('click', () => {
            this.cartLogic()
        })
    }

    cartLogic() {

        cartDOMCont.classList.add("__show-popup");
        cartDOM.classList.add("visible");
        const closeBtn = document.querySelector(".fa-times");
        closeBtn.addEventListener("click", () => {
            this.closeCart();
        });

        this.setCartItems();
        this.setCartTotal();
        /* this.manipulateDOMitems(cartDOMitems, addToCtBtn, cartDOMCont, cartDOM); */
        cartDOMitems
    }

    setCartItems() {
        let result = "";
        cart.forEach(e => {
            result += ` 
        <div data-id=${e.id} class="cart-popup-item">
                      <img src=${e.img} alt="">
                      <div>
                          <h4>${e.title}</h4>
                          <h5>${e.price}</h5>
                          <span data-id=${
                            e.id
                          } class="remove-item">удалить</span>
                      </div>
                      <div>
                          <i data-id=${e.id} class="fas fa-chevron-up"></i>
                          <p class="item-amount">${e.amount}</p>
                          <i data-id=${e.id} class="fas fa-chevron-down"></i>
                      </div>
                  </div>
        `;
        });
        console.log(result)

        cartDOMitems.innerHTML = result;
        console.log()
    }

    setCartTotal() {

        let resultP = 0;
        let resultA = 0;
        cart.forEach(e => {
            resultP += parseFloat(e.price) * e.amount;
            resultA += e.amount
        });
        cartDOMtotal.innerHTML = resultP;
        this.CartTotalAmount(resultA)
        this.CartTotalSum(resultP)
    }

    CartTotalAmount(resultA) {
        const totalAmount = document.createElement('span')
        totalAmount.classList.add('cart-items-amount')
        totalAmount.innerHTML = resultA;
        cartBtnCont.appendChild(totalAmount)
        if (totalAmount.previousElementSibling.classList.contains('cart-items-amount')) {
            totalAmount.previousElementSibling.remove()
        }

        if (resultA < 1) {
            cartBtnCont.removeChild(totalAmount)
        }
    }

    CartTotalSum(resultP) {
        const containerSum = document.createElement('div')
        containerSum.classList.add('total-sum-item')
        const totalSum = document.createElement('span')
        totalSum.classList.add('total-sum')
        totalSum.innerHTML = `Итого: <br> ${resultP} р.`;
        totalSumCont.appendChild(containerSum)
        containerSum.appendChild(totalSum)

        if (containerSum.previousElementSibling) {
            if (containerSum.previousElementSibling.classList.contains('total-sum-item')) {
                containerSum.previousElementSibling.remove()
            }
        }
        console.log(containerSum)

        if (resultP < 1) {
            totalSumCont.removeChild(containerSum)
        }

    }

    manipulateDOMitems() {


        clearBtn.addEventListener("click", () => {
            console.log(cart)
            while (cartDOMitems.children.length > 0) {
                cartDOMitems.removeChild(cartDOMitems.children[0]);
            }
            let cartId = cart.map(item => item.id);
            cartId.forEach(id => this.removeItem(id));
            this.closeCart();
        });

        cartDOMCont.addEventListener("click", e => {

            console.log(e.target)
            if (e.target.classList.contains("remove-item")) {
                let remove = e.target;

                let id = remove.dataset.id
                id = parseFloat(id)
                this.removeItem(id);
                if (cart.length === 0) {
                    this.closeCart();

                }
            }
            if (e.target.classList.contains("fa-chevron-up")) {
                let incrItem = e.target;
                console.log(cart)
                cart.find(item => {
                    let id = incrItem.dataset.id;
                    id = parseFloat(id);
                    if (item.id === id) {
                        item.amount += 1,
                            incrItem.nextElementSibling.textContent = item.amount;

                    }
                });

                Store.saveCart();
                this.setCartTotal();
            }
            if (e.target.classList.contains("fa-chevron-down")) {
                let decItem = e.target;
                console.log(decItem)
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
                                console.log(cart);
                            }
                        }
                    }
                });

                Store.saveCart();
                this.setCartTotal();
            }
        });
    }

    removeItem(id) {
        cart = cart.filter(item => item.id != id);

        this.setCartItems();
        this.setCartTotal();
        Store.saveCart();

    }
    closeCart() {
        cartDOMCont.classList.remove("__show-popup");
        cartDOM.classList.remove("visible");
    }
}

class Store {

    static saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    static getCart() {
        return localStorage.getItem("cart") ?
            (cart = JSON.parse(localStorage.getItem("cart"))) : [];
        console.log(cart);
    }
}

document.addEventListener("DOMContentLoaded", e => {
    const ui = new UI();
    Store.getCart();
    ui.getCartButton();
    ui.setCartTotal();
    ui.manipulateDOMitems()
});

/* document.addEventListener('DOMContentLoaded', e => {
    const ui = new UI;
    ui.getCartButtons()
}) */