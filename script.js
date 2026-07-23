// ILBIRS MARKETPLACE JAVASCRIPT


// Корзина

let cart = 0;


let buttons = document.querySelectorAll(".product button");


buttons.forEach(function(button){

button.onclick = function(){

cart++;

alert("Товар добавлен в корзину: " + cart);

}

});




// Поиск товаров

function searchProducts(){

let input = document
.getElementById("searchInput")
.value
.toLowerCase();


let products = document
.querySelectorAll(".product");


products.forEach(function(product){


let text = product
.innerText
.toLowerCase();


if(text.includes(input)){

product.style.display = "block";

}else{

product.style.display = "none";

}


});

}// ILBIRS Marketplace Search

function searchProducts(){

let input = document
.getElementById("searchInput")
.value
.toLowerCase();


let products = document
.querySelectorAll(".product");


products.forEach(function(product){


let name = product
.innerText
.toLowerCase();


if(name.includes(input)){

product.style.display = "block";

}else{

product.style.display = "none";

}


});

}
