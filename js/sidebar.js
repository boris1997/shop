const sidebar = document.querySelector('.sidebar-navbar');

sidebar.innerHTML = `
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
                        <li class="sidebar_main_li"><a href="/phones/phones.html">Смартфоны</a></li>
                        <li class="sidebar_main_li"><a href="/headPhones/headPhones.html">Наушники</a></li>                    </ul>
                    <div class="secondary_sidebar_items search-engine" data-target="searcher">
                        <input class="input-search" placeholder="поиск" type="text">
                        <a href="/searching-page.html" class="search-products">Найти</a>
                        <img class="close-engine" src="/img/fa-times-white.png" alt="">
                    </div>
                </div>
            </div>
        </div>
`