let canvas = document.querySelector(".constructor-canvas");
let casse = document.querySelector(".case");
let casse2 = document.querySelector(".case2");
let casse3 = document.querySelector(".case3");
let casse4 = document.querySelector(".case4");

let background_1 = document.querySelector(".background_1");
let background_2 = document.querySelector(".background_2");
let background_3 = document.querySelector(".background_3");

canvas.width = 568;
canvas.height = 1144;
let ctx = canvas.getContext("2d");
/* ctx.fillStyle = "#09f"; */
/* let ctx2 = canvas.getContext("2d"); */
/* ctx.drawImage(casse3, 0, 0, 568, 1144); */

ctx.drawImage(background_3, 0, 0, 568, 1144);
ctx.globalCompositeOperation = "destination-atop";
ctx.drawImage(casse4, 0, 0, 568, 1144);
ctx.drawImage(casse, 0, 0, 568, 1144);
ctx.globalCompositeOperation = "source-atop";
ctx.drawImage(casse2, 0, 0, 568, 1144);

/* ctx.drawImage(casse3, 0, 50, 568, 1094); */

/* ctx.drawImage(casse3, 0, 0, 568, 1144); */
/* console.log(ImageData.ctx) */

/* ctx.filStyle = '#000000';
ctx.fillRect(0, 0, 568, 1144) */

/* ctx.fillRect(0, 0, 568, 1144) */

/* const pattern = ctx.createPattern(background_1, 'repeat');
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, 568, 1144) */
