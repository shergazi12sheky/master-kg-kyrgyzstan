// ILBIRS MARKETPLACE

// Издөө функциясы

function searchProduct() {
    let text = document.querySelector("input").value;

    if(text === "") {
        alert("Введите название товара или услуги");
    } else {
        alert("Поиск: " + text);
    }
}


// Корзина

let cart = 0;

let buttons = document.querySelectorAll(".product button");

buttons.forEach(function(button){

    button.onclick = function(){

        cart++;

        alert("Товар добавлен в корзину. Товаров: " + cart);

    }

});
