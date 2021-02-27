const hNav = [...document.querySelectorAll(".header_nav_li")];
const items = document.querySelectorAll(".hov");
const names = document.querySelectorAll(".titles");
const item = document.querySelectorAll(".brand");
const models = document.querySelectorAll(".models");
const date = document.querySelector(".date");
const cartBtnCont = document.querySelector(".cart");
const footerItem = [...document.querySelectorAll(".__footer-li")];
const navbarToggler = document.querySelector(".navbar-toggler");
const navToggleItem = document.querySelectorAll(".nav-toggle-item");
const sidebarNavbar = document.querySelector(".sidebar-navbar");
const sidebarLayout = document.querySelector(".sidebar-layout");
const sidebarContent = document.querySelector(".sidebar_content");
const sidebarMainLi = document.querySelectorAll(".sidebar_main_li");
const secondarySidebarItems = document.querySelectorAll(".secondary_sidebar_items");
const closeSidebar = document.querySelector(".fa-times-sidebar");

const back = document.querySelector(".back");

const arr = Array.from(items);
const arr2 = Array.from(names);
const arrItem = Array.from(item);
const arrModels = Array.from(models);

footerItem.forEach(item => item.addEventListener("mouseover", opac2));
footerItem.forEach(item => item.addEventListener("mouseout", Reverseopac2));
hNav.forEach(item => item.addEventListener("mouseover", opac3));
hNav.forEach(item => item.addEventListener("mouseout", Reverseopac3));

function opac2() {
  footerItem.find(item => {
    if (footerItem.indexOf(item) != footerItem.indexOf(this)) {
      item.style.opacity = 0.5;
    }
  });
}

function Reverseopac2() {
  footerItem.find(item => {
    if (footerItem.indexOf(item) != footerItem.indexOf(this)) {
      item.style.opacity = 1;
    }
  });
}

function opac3() {
  hNav.find(item => {
    if (hNav.indexOf(this) != hNav.indexOf(item)) {
      item.style.opacity = 0.7;
    }
  });
}

function Reverseopac3() {
  hNav.find(item => {
    if (hNav.indexOf(item) != hNav.indexOf(this)) {
      item.style.opacity = 1;
    }
  });
}

const time = new Date();
date.textContent = time.getUTCFullYear();

function opac() {
  arr.find(item => {
    if (arr.indexOf(item) != arr.indexOf(this)) {
      item.style.opacity = "0.5";
    }
  });
}

function opacReverse() {
  arr.find(item => {
    if (arr.indexOf(item) != arr.indexOf(this)) {
      item.style.opacity = "1";
    }
  });
}

function manipulation(arrayMain, arrSecond, LexicalThis, visibility) {
  arrayMain[arrSecond.indexOf(LexicalThis)].style.visibility = visibility;
}

function show() {
  manipulation(arr2, arr, this, "visible");
}

function show2() {
  manipulation(arr2, arr2, this, "visible");
}

function show3() {
  if ((arrModels.indexOf(this) >= 0) & (arrModels.indexOf(this) <= 2)) {
    arr2[0].style.visibility = "visible";
  }
}

function showModels() {
  manipulation(arrModels, arrItem, this, "visible");
}

function showModels2() {
  manipulation(arrModels, arrModels, this, "visible");
}

function vanishModels() {
  manipulation(arrModels, arrItem, this, "hidden");
}

function vanishModels2() {
  manipulation(arrModels, arrModels, this, "hidden");
}

function vanish() {
  manipulation(arr2, arr, this, "hidden");
}

function vanish2() {
  manipulation(arr2, arr2, this, "hidden");
}

function vanish3() {
  if ((arrModels.indexOf(this) >= 0) & (arrModels.indexOf(this) <= 2)) {
    arr2[0].style.visibility = "hidden";
  }
}


class Toggler {

  ToggleRotation() {
    navbarToggler.addEventListener("mouseover", this.rotate);
    navbarToggler.addEventListener("mouseout", this.rotateReverse);
  }

  rotate() {
    this.children[0].style.transform = "rotate(45deg)" + "translateY(16px)";
    this.children[1].style.display = "none";
    this.children[2].style.transform = "rotate(-45deg)" + "translateY(-16px)";
    this.children[0].style.marginLeft = "7px";
    this.children[2].style.marginLeft = "7px";
  }

  rotateReverse() {
    this.children[0].style.transform = "rotate(-180deg)" + "translateY(0)";
    this.children[1].style.display = "block";
    this.children[2].style.transform = "rotate(180deg)" + "translateY(0)";
    this.children[0].style.marginLeft = "0";
    this.children[2].style.marginLeft = "0";
  }

  sidebarLogic() {
    this.sidebarRevealing();
    this.sidebarHide();
    this.sidebarResize();
    this.manipulateSidebarItem();
  }

  sidebarRevealing() {
    navbarToggler.addEventListener("click", this.translate);
  }

  sidebarHide() {
    closeSidebar.addEventListener("click", this.hide);
  }

  manipulateSidebarItem() {

    sidebarMainLi.forEach(item => {
      item.addEventListener('click', () => {
        this.translateItems(item);
      })
    })
    this.returnItem();
  }

  translateItems(item) {
    secondarySidebarItems.forEach(e => {
      if (e.dataset.target === item.dataset.target && !e.classList.contains('appear')) {
        sidebarContent.style.transform = 'translateX(-100%)';
        e.classList.add('appear');
        back.style.visibility = 'visible';
        back.style.opacity = '1';
      }
      back.addEventListener('click', () => {
        sidebarContent.style.transform = 'translateX(0)';
        e.classList.remove('appear');
      })
    })
  }

  sidebarResize() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        this.hide();
      }
    })
  }

  returnItem() {
    back.addEventListener('click', () => {
      sidebarContent.style.transform = 'translateX(0)';
      this.translateItems(back)
    })
  }

  translate() {
    sidebarNavbar.classList.add("visible");
    sidebarLayout.classList.add("__show-popup");
  }

  hide() {
    sidebarNavbar.classList.remove("visible");
    sidebarLayout.classList.remove("__show-popup");
  }

}


arr.forEach(item => item.addEventListener("mouseover", show));
arr.forEach(item => item.addEventListener("mouseover", opac));
arr.forEach(item => item.addEventListener("mouseout", opacReverse));
arr.forEach(item => item.addEventListener("mouseout", vanish));
arr2.forEach(item => item.addEventListener("mouseover", show2));
arr2.forEach(item => item.addEventListener("mouseout", vanish2));
arrModels.forEach(item => item.addEventListener("mouseout", vanish3));
arrItem.forEach(item => item.addEventListener("mouseover", showModels));
arrModels.forEach(item => item.addEventListener("mouseover", showModels2));
arrModels.forEach(item => item.addEventListener("mouseover", show3));
arrItem.forEach(item => item.addEventListener("mouseout", vanishModels));
arrModels.forEach(item => item.addEventListener("mouseout", vanishModels2));
/* navbarToggler.addEventListener("mouseover", rotate);  
navbarToggler.addEventListener("mouseout", rotateReverse); 
navbarToggler.addEventListener("click", translate); */
/* for (var i = 0; i < items.length; i++) {
    items[i].onmouseover = show           for loop(the same as forEach loop highter)
} */

document.addEventListener('DOMContentLoaded', () => {
  const toggler = new Toggler;
  toggler.ToggleRotation();
  toggler.sidebarLogic();
})