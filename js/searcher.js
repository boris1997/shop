let productInputValue;
const openEngineBtn = document.querySelector(".search-icon");
const navItemsContainer = document.querySelector(".nav-items");
const navItems = document.querySelector(".items");
class Searcher {
    getSearchBtn() {
        openEngineBtn.addEventListener("click", e => {
            e.target.classList.add("dissapear");
            navItems.classList.add("dissapear");
            this.createSearchEngine();
        });
    }

    createSearchEngine() {
        const searchEngine = document.createElement("div");
        searchEngine.classList.add("search-engine");
        searchEngine.classList.add("__nav-item");

        searchEngine.innerHTML = `
        <input  class="input-search" placeholder="поиск" type="text">
        <a href="/searching-page.html"  class="search-products">Найти</a>
        <img class="close-engine"  src="/img/fa-times-white.png" alt="">
        `;
        navItemsContainer.insertBefore(searchEngine, cartBtnCont);

        this.backToNavigation(searchEngine);
    }

    backToNavigation(searchEngine) {
        const closeEngineBtn = document.querySelector(".close-engine");
        closeEngineBtn.addEventListener("click", () => {
            navItems.classList.remove("dissapear");
            openEngineBtn.classList.remove("dissapear");
            searchEngine.remove();
        });
    }

    getSearchInput() {
        /*  const input = document.querySelector('.input-search') */
        body.addEventListener('click', e => {
            if (e.target.classList.contains('search-products')) {
                this.searchProduct();
            }
        })
        body.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                location = "/searching-page.html"
                this.searchProduct();
            }
        })

    }



    searchProduct() {
        const searchInput = document.querySelector('.input-search')
        productInputValue = searchInput.value
        StoreFilter.saveInputValue(productInputValue)
        /* this.displayFoundedProducts(productInputValue) */
    }

    /* displayFoundedProducts(productInputValue) {
        Store.getAllProducts(productInputValue)
    } */
}

class searchFilter {
    async getAllProducts() {
        const allProductsFile = await fetch("Products.json");
        const data = await allProductsFile.json();
        let objectProducts = data.productItems
        objectProducts = objectProducts.map(item => {
            const {
                id
            } = item.sys

            const {
                category,
                title,
                img,
                price
            } = item.fields

            return {
                id,
                category,
                title,
                img,
                price
            }

        })
        return objectProducts
    }
}

class StoreFilter {

    static saveInputValue(productInputValue) {
        localStorage.setItem("searchedProduct", JSON.stringify(productInputValue));
    }

    static getInputValue() {
        return (
            (lookedForProducts = JSON.parse(localStorage.getItem("searchedProduct")))
        );
    }

    static saveAllProducts(data) {
        localStorage.setItem("allProducts", JSON.stringify(data));
    }
}

document.addEventListener("DOMContentLoaded", e => {
    const searcher = new Searcher();
    searcher.getSearchBtn();
    searcher.getSearchInput();
});


/* class StoreSearch {
    static saveInputValue(productInfo) {
        localStorage.setItem('searchedProduct', JSON.stringify(productInfo))
    }
} */