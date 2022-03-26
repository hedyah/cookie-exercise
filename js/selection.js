
let shoppingCart = [];

function addItem(item) {
    let parent = document.parentElement
    let imgSrc = parent.querySelector('img').getAttribute('src');
    let itemName = parent.querySelector('h3').innerText;
}

function updateCart() {
    Cookies.set("shoppingCart", shoppingCart);
}
shoppingCart.push(itemName,imgSrc);
console.log(shoppingCart);
updateCart();