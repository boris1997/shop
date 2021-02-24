const ui = new UI();

let excess = [];

let productsLimited = []

class UI2 {
    manipulateProductItem(products) {
        products.forEach(item => {
            if (products.indexOf(item) > 11 && products.indexOf(item) < 23) {
                excess = [...excess, item]
                /* console.log(productsLimited) */
                /* const contPrItems = document.querySelector(".__main-products-items");
                console.log(contPrItem) */
                this.createSwitchBtns()
            }
            if (products.indexOf(item) < 12) {
                console.log(item)
                productsLimited = [...productsLimited, item]
                console.log(productsLimited)
                displayProducts(productsLimited)
            }

        })
        console.log(excess)
    }



    createSwitchBtns() {
        const contPrItems = document.querySelectorAll('.container')
        console.log(contPrItems)
        const switchDiv = document.createElement('div')
        console.log(switchDiv)
        switchDiv.classList.add('switchDiv')
        const switchBtn1 = document.createElement('span')
        switchBtn1.classList.add('toggle-first-page')
        switchBtn1.innerHTML = `1`
        const switchBtn2 = document.createElement('span')
        switchBtn2.classList.add('toggle-second-page')
        switchBtn2.innerHTML = `2`

        contPrItems[1].appendChild(switchDiv)
        while (contPrItems[1].children.length > 3) {
            contPrItems[1].removeChild(contPrItems[1].children[3]);
        }
        displayProducts(productsLimited);
        switchDiv.appendChild(switchBtn1)
        switchDiv.appendChild(switchBtn2)
        this.firstPage(switchBtn1)
        this.createNextPages(switchBtn2)
    }

    firstPage(switchBtn1) {
        switchBtn1.addEventListener('click', () => {
            displayProducts(productsLimited)
            ui.getCartButtons()
        })
    }

    createNextPages(switchBtn2) {
        switchBtn2.addEventListener('click', () => {
            let result = '';
            excess.forEach(e => {
                result += ` <div class="__main-item-product">
            <a href="iphone7.html">
                <img src=${e.img} alt="">
                <h2>${e.title}</h2>
            </a>
            <div class="order">
                <div class="addToBasket">
                    <span class="price">${e.price} RUB</span>
                    <button class="bag-btn" data-id=${e.id}>
                    <i class="fas fa-cart-plus fa-2x" ></i>
                   </button>
                </div>
                <a class="fast-purchase btn" data-id=${
                  e.id
                } href="">купить в 1 клик</a>
            </div>
    
        </div>`
            })
            iphoneItems.innerHTML = result;
            ui.getCartButtons()
        })
    }
}



document.addEventListener("DOMContentLoaded", e => {
    const products = new Products();
    const ui2 = new UI2()
    /* LoadPage() */
    products
        .getIphone7()
        .then(products => {
            /* callItems() */
            console.log(products)
            Store.saveProducts(products),
                ui2.manipulateProductItem(products),
                ui.getCartButtons()
        })
});