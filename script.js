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
// ILBIRS Cart

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
// ILBIRS Seller Product Save

function addProduct(){

let name = document.querySelector(".productName").value;

let price = document.querySelector(".productPrice").value;


let product = {

name: name,

price: price

};


let products = JSON.parse(localStorage.getItem("products")) || [];


products.push(product);


localStorage.setItem("products", JSON.stringify(products));


alert("Товар добавлен!");

}
// Show seller products in marketplace

let sellerProducts = JSON.parse(localStorage.getItem("products")) || [];

let box = document.getElementById("sellerProducts");


if(box){

sellerProducts.forEach(function(product){


box.innerHTML += `

<div class="product">

<h3>${product.name}</h3>

<p>${product.price} сом</p>

<button>
🛒 В корзину
</button>

</div>

`;


});

}
// ILBIRS User Registration

function registerUser(){

let name = document.querySelector(".regName").value;

let email = document.querySelector(".regEmail").value;

let password = document.querySelector(".regPassword").value;


let user = {

name:name,

email:email,

password:password

};


localStorage.setItem("user", JSON.stringify(user));


alert("Аккаунт создан!");

}
// ILBIRS Profile Load

let savedUser = JSON.parse(localStorage.getItem("user"));


let nameBox = document.getElementById("userName");
let emailBox = document.getElementById("userEmail");


if(savedUser && nameBox && emailBox){

nameBox.innerHTML = savedUser.name;

emailBox.innerHTML = "Email: " + savedUser.email;

}



// Logout

function logout(){

localStorage.removeItem("user");

alert("Вы вышли из аккаунта");

window.location.href="login.html";

}
// ILBIRS Show Orders

let ordersBox = document.getElementById("ordersList");

let orders = JSON.parse(localStorage.getItem("orders")) || [];


if(ordersBox && orders.length > 0){


ordersBox.innerHTML = "";


orders.forEach(function(order){


ordersBox.innerHTML += `

<div class="product">

<h3>
${order.name}
</h3>

<p>
Цена: ${order.price}
</p>

<p>
Статус: Новый заказ
</p>

</div>

`;


});


}
// ILBIRS Seller Orders

let sellerBox = document.getElementById("sellerOrders");

let customerOrders = JSON.parse(localStorage.getItem("orders")) || [];


if(sellerBox && customerOrders.length > 0){

sellerBox.innerHTML = "";


customerOrders.forEach(function(order){


sellerBox.innerHTML += `

<div class="product">

<h3>
${order.name}
</h3>

<p>
Цена: ${order.price}
</p>

<p>
Новый заказ 📦
</p>

</div>

`;

});


}
