const body = document.getElementById('body')
console.log(body)

function LoadPage(categoryLink, mainPathClass, pathCustomClass, productLink, categoryName, productModelLink, productModelName) {

    body.innerHTML = ` <header>
    <div id="nav-contacts">
        <div class="container">
            <div class="nav-contacts-content">

                <ul class="social-icons">
                    <li class="header_nav_li"><a href=""><i class="fab fa-vk"></i></a></li>
                    <li class="header_nav_li"><a href=""><i class="fab fa-facebook-f"></i></a></li>
                    <li class="header_nav_li"><a href=""><i class="fab fa-instagram"></i></a></li>
                </ul>
                <ul class="shop-info">
                    <li class="header_nav_li"><a href="">Информация о магазине</a></li>
                    <li class="header_nav_li"><a href="">Новости</a></li>
                    <li class="header_nav_li"><a href="">Оплата и доставка</a></li>
                    <li class="header_nav_li"><a href="">Обратная связь</a></li>
                </ul>
                <span class="number">+7(919)411-46-04</span>
            </div>
        </div>
    </div>

    <div id="navbar">
            <div class="container">
                <div class="nav-items">
                    <div class="navbar-toggler">
                        <div class="nav-toggle-item"></div>
                        <div class="nav-toggle-item"></div>
                        <div class="nav-toggle-item"></div>
                    </div>
                    <div class="logo">
                        <img src="/img/косой шрифт.png" alt="" srcset="" />
                    </div>
                    <ul class="items">
                        <li>
                            <a class="hov" href="/phones/phones.html">СМАРТФОНЫ</a>
                            <ul class="titles">
                                <li class="brand">
                                    <a href="/phones/iphone/iphones.html">Iphone</a>
                                    <i class="fas fa-caret-right"></i>
                                    <ul class="models">
                                        <li><a href="/phones/iphone/iphone-7.html">Iphone 7</a></li>
                                        <li><a href="/phones/iphone/iphone-7+.html">Iphone 7+</a></li>
                                        <li><a href="/phones/iphone/iphone-8.html">Iphone 8</a></li>
                                        <li><a href="/phones/iphone/iphone-8+.html">Iphone 8+</a></li>
                                        <li><a href="/phones/iphone/iphone-x.html">Iphone X</a></li>
                                        <li><a href="/phones/iphone/iphone-xr.html">Iphone XR</a></li>
                                        <li><a href="/phones/iphone/iphone-xs.html">Iphone XS</a></li>
                                        <li><a href="/phones/iphone/iphone-xs-max.html">Iphone XS MAX</a></li>
                                    </ul>
                                </li>
                                <li class="brand">
                                    <a href="/phones/samsung/samsung.html">Samsung</a><i class="fas fa-caret-right"></i>
                                    <ul class="models">
                                        <li><a href="/phones/samsung/samsung-galaxy-s-8.html"> Samsung Galaxy S8</a>
                                        </li>
                                        <li><a href="/phones/samsung/samsung-galaxy-s-8+.html">Samsung Galaxy S8+</a>
                                        </li>
                                        <li><a href="/phones/samsung/samsung-galaxy-s-9.html">Samsung Galaxy S9</a></li>
                                        <li><a href="/phones/samsung/samsung-galaxy-s-9+.html">Samsung Galaxy S9+</a>
                                        </li>
                                        <li><a href="/phones/samsung/samsung-galaxy-s-10.html">Samsung Galaxy S10</a>
                                        </li>
                                        <li>
                                            <a href="/phones/samsung/samsung-galaxy-s-10+.html">Samsung Galaxy S10+</a>
                                        </li>
                                        <li>
                                            <a href="/phones/samsung/samsung-galaxy-s-10-e.html">Samsung Galaxy S10e</a>
                                        </li>
                                        <li>
                                            <a href="/phones/samsung/samsung-galaxy-note-8.html">Samsung Galaxy note
                                                8</a>
                                        </li>
                                        <li>
                                            <a href="/phones/samsung/samsung-galaxy-note-9.html">Samsung Galaxy note
                                                9</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="brand">
                                    <a href="/phones/xiaomi/xiaomi.html">Xiaomi</a><i class="fas fa-caret-right"></i>
                                    <ul class="models">
                                        <li><a href="/phones/xiaomi/xiaomi-mi-a2.html">Xiaomi mi a2</a></li>
                                        <li>
                                            <a href="/phones/xiaomi/xiaomi-mi-a2-lite.html">Xiaomi mi a2 lite</a>
                                        </li>
                                        <li><a href="/phones/xiaomi/xiaomi-redmi-6a.html">Xiaomi redmi 6a</a></li>
                                        <li><a href="/phones/xiaomi/xiaomi-redmi-7.html">Xiaomi redmi 7</a></li>
                                        <li>
                                            <a href="/phones/xiaomi/xiaomi-redmi-note-6-pro.html">Xiaomi redmi note 6
                                                pro</a>
                                        </li>
                                        <li>
                                            <a href="/phones/xiaomi/xiaomi-redmi-note7.html">Xiaomi redmi note 7</a>
                                        </li>
                                        <li><a href="/phones/xiaomi//xiaomi-mi-8.html">Xiaomi mi 8</a></li>
                                        <li><a href="/phones/xiaomi/xiaomi-mi-8-lite.html">Xiaomi mi 8 lite</a></li>
                                        <li><a href="/phones/xiaomi/xiaomi-mi-8-se.html">Хiаоми Mi 8 se</a></li>
                                        <li><a href="/phones/xiaomi/xiaomi-redmi-go.html">Xiaomi Redmi Go</a></li>
                                    </ul>
                                </li>
                                <li class="brand">
                                    <a href="/phones/xiaomi/xiaomi.html">Huawei</a><i class="fas fa-caret-right"></i>
                                    <ul class="models">
                                        <li><a href="/phones/huawei/huawei-p-30-lite.html">Huawei p 30 lite</a></li>
                                        <li>
                                            <a href="/phones/huawei/huawei-p-30.html">Huawei p 30</a>
                                        </li>
                                        <li><a href="/phones/huawei/huawei-p-smart-z.html">Huawei p smart z</a></li>
                                        <li><a href="/phones/huawei/huawei-p-smart.html">Huawei p smart</a></li>
                                        <li>
                                            <a href="/phones/huawei/huawei-y-5.html">Huawei y 5</a>
                                        </li>
                                        <li>
                                            <a href="/phones/huawei/huawei-y-6.html">Huawei y 6</a>
                                        </li>
                                        <li><a href="/phones/huawei/huawei-y-7.html">Huawei y 7</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="hov" href="/headphones/headPhones.html">НАУШНИКИ</a>
                            <ul class="titles">
                                <li class="brand">
                                    <a href="/headphones/wireheadphones.html">Проводные</a>
                                </li>
                                <li class="brand">
                                    <a href="/headphones/wirelessheadphones.html">Безпроводные</a>
                                </li>
                            </ul>
                        </li>

                        <!-- <li>
                            <a class="hov" href="phones.html">АКСЕСУАРЫ</a>
                            <ul class="titles">
                                <li class="brand">
                                    <a href="iphones.html">Зарядные утройства</a>
                                    <i class="fas fa-caret-right"></i>
                                    <ul class="models">
                                        <li><a href="iphone7.html">Проводные</a></li>
                                        <li><a href="iphone7+.html">Безпроводные</a></li>
                                        <li><a href="iphone8.html">Powerbank</a></li>
                                    </ul>
                                </li>
                                <li class="brand">
                                    <a href="samsung.html">Стекла</a><i class="fas fa-caret-right"></i>
                                    <ul class="models">
                                        <li><a href="sgalaxyS8.html"> Samsung Galaxy S8</a></li>
                                        <li><a href="sgalaxyS8+.html">Samsung Galaxy S8+</a></li>
                                        <li><a href="sgalaxyS9.html">Samsung Galaxy S9</a></li>
                                        <li><a href="sgalaxyS9+.html">Samsung Galaxy S9+</a></li>
                                        <li><a href="sgalaxyS10.html">Samsung Galaxy S10</a></li>
                                        <li>
                                            <a href="sgalaxyS10+.html">Samsung Galaxy S10+</a>
                                        </li>
                                        <li>
                                            <a href="sgalaxyS10e.html">Samsung Galaxy S10e</a>
                                        </li>
                                        <li>
                                            <a href="sgalaxynote8.html">Samsung Galaxy note 8</a>
                                        </li>
                                        <li>
                                            <a href="sgalaxynote9.html">Samsung Galaxy note 9</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="brand">
                                    <a href="Xiaomi.html">Чехлы</a><i class="fas fa-caret-right"></i>
                                    <ul class="models">
                                        <li><a href="XiaomiMiA2.html">Xiaomi mi a2</a></li>
                                        <li>
                                            <a href="XiaomiMiA2Lite.html">Xiaomi mi a2 lite</a>
                                        </li>
                                        <li><a href="XiaomiRedmi6a.html">Xiaomi redmi 6a</a></li>
                                        <li><a href="XiaomiRedmi7.html">Xiaomi redmi 7</a></li>
                                        <li>
                                            <a href="XiaomiRedmiNote6Pro.html">Xiaomi redmi note 6 pro</a>
                                        </li>
                                        <li>
                                            <a href="XiaomiRedmiNote7.html">Xiaomi redmi note 7</a>
                                        </li>
                                        <li><a href="XiaomiMi8.html">Xiaomi mi 8</a></li>
                                        <li><a href="XiaomiMi8Lite.html">Xiaomi mi 8 lite</a></li>
                                        <li><a href="XiaomiMi8Se.html">Хiаоми Mi 8 se</a></li>
                                        <li><a href="XiaomiRedmiGo.html">Xiaomi Redmi Go</a></li>
                                    </ul>
                                </li>

                            </ul>
                        </li> -->
                    </ul>
                    <div class="search-btn __nav-item">
                        <img class="search-icon" src="/img/search-icon.png" alt="" />
                    </div>

                    <!-- <div class="search-engine">
        
                                    <input class="input-search" placeholder="поиск" type="text">
                                    <button class="search-products">Найти</button>
                                    <img class="close-engine" src="/img/fa-times-white.png" alt="">
                                </div> -->

                    <div class="cart">
                        <a class="shopping-cart" href="#">
                            <img class="fa-shopping-cart" src="/img/cart-icon.png" alt="" /></a>

                        <div class="total-sum-container"></div>
                    </div>
                </div>
            </div>
        </div>
</header>

<div class="sidebar-navbar">
<div class="sidebar-layout">
    <img src="/img/fa-times.png" alt="" class="fa-times-sidebar" />
    <img class="back" src="/img/left-black.png" alt="">
    <div class="sidebar_content_container">
        <div class="sidebar_content">
            <ul class="main_sidebar_items">
                <li class="sidebar_main_li" data-target="catalog">Каталог</li>
                <li class="sidebar_main_li">Информация о магазине</li>
                <li class="sidebar_main_li">Новости</li>
                <li class="sidebar_main_li">Оплата и Доставка</li>
                <li class="sidebar_main_li">Обратная связь</li>
                <li class="sidebar_main_li">+7(919)411-46-04</li>
                <li class="sidebar_main_li" data-target="searcher"><img class="search-icon"
                        src="/img/search-icon-black.png" alt="" /><span>Поиск</span> </li>
            </ul>
            <ul class="secondary_sidebar_items" data-target="catalog">
                <li class="sidebar_main_li"><a href="phones.html">Смартфоны</a></li>
                <li class="sidebar_main_li"><a href="/headPhones/headPhones.html">Наушники</a></li>
            </ul>
            <div class="secondary_sidebar_items search-engine" data-target="searcher">
                <input class="input-search" placeholder="поиск" type="text">
                <a href="/searching-page.html" class="search-products">Найти</a>
                <img class="close-engine" src="/img/fa-times-white.png" alt="">
            </div>
        </div>
    </div>
</div>
</div>

    <div class="cart-popup">
        <div class="cart-popup-content">
            <img src="/img/fa-times.png" alt="" class="fa-times" />
            <h1 class="cart-popup-header">Корзина</h1>
            <div class="cart-popup-content-items">

            </div>
            <div class="cart-popup-content-footer"></div>

        </div>
    </div>

    <div id="__Products">
        <div class="container ">
            <div class="path-items">
                <a href="/index.html"><i class="fas fa-home fa-2x"></i></a>
                <h2 class="__pathProductsItems"><a href=${categoryLink}>${mainPathClass}</a> </h2>
                <h2 class="__pathProductsItems ${pathCustomClass}"><a href=${productLink}>${categoryName}</a> </h2>
                <h2 class="__pathProductsItems"><a href=${productModelLink}>${productModelName}</a> </h2>
            </div>
            <div class="__main-products-items grid">

            </div>
        </div>
    </div>

    <footer>
        <div class="container medium">
            <div class="__main-footer-items">
                <div class="footer-item company-info">
                    <div>Косой Переулок</div>
                    <div>
                        <ul>
                            <li class="__footer-li"> <a href="">О компании</a></li>
                            <li class="__footer-li"> <a href="">Новости</a></li>
                            <li class="__footer-li"> <a href="">Оферта</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-item">
                    <div>Каталог</div>
                    <div>
                        <ul>
                            <li class="__footer-li"><a href="">Смартфоны</a></li>
                            <li class="__footer-li"><a href="">Наушники</a></li>
                            <li class="__footer-li"><a href="">Чехлы</a></li>
                            <li class="__footer-li"><a href="">Зарядные Устройства</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-item">
                    <div>Помощь</div>
                    <div>
                        <ul>
                            <li class="__footer-li"><a href="">Доставка и оплата</a></li>
                            <li class="__footer-li"><a href="">Гарантия и сервис</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-item">


                    <a href=""><i class="fab fa-vk"></i></a>
                    <a href=""><i class="fab fa-facebook-f"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                </div>
                <div class="footer-item feedback">

                    © «Косой переулок», <span class="date"></span>

                </div>
            </div>
        </div>
    </footer>
    `

}