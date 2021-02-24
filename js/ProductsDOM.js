const productsDOM = document.getElementById('__Products');

productsDOM.innerHTML = `
<div class="container">
    <div class="path-items">
        <a href="/index.html"><i class="fas fa-home fa-2x"></i></a>
        <h2 class="__pathProductsItems"><a href="/phones/phones.html">НАУШНИКИ</a></h2>
    </div>
    <div class="__main-products-items">
        <div class="__main-item-product">
            <a href="/phones/iphone/iphones.html">
                <img src="/img/headPhones/headPhonesWire/Sennheiser-CX-300-II.png" alt="" />
                <h2>Проводные наушники</h2>
            </a>
        </div>
        <div class="__main-item-product">
            <a href="/phones/samsung/samsung.html">
                <img src="/img/headPhones/headPhonesWireLess/headphones-3.png" alt="" />
                <h2>Беспроводные наушники</h2>
            </a>
        </div>
    </div>
</div>

`