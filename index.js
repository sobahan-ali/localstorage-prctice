// const addProduct = () => {
//     const productField = document.getElementById('product_field');
//     const quantityField = document.getElementById('product_quantity');
//     const product = productField.value;
//     const quantity = quantityField.value;
//     displayProduct(product, quantity);
//     saveItemToLocalStorage(product, quantity);

// };

// const displayProduct = (product, quantity) => {
//     const productContainer = document.querySelector('#productContainer');
//     const li = document.createElement('li');
//     li.innerText = ` ${product}: ${quantity}`
//     productContainer.appendChild(li);
// };

// const getItemFromLocalStorage = () => {
//     let cart = {};
//     const product = localStorage.getItem('cart');
//     if (product) {
//         cart = JSON.parse(product);
//     }
//     return cart;
// };

// const saveItemToLocalStorage = (product, quantity) => {
//     const cart = getItemFromLocalStorage();
//     cart[product] = quantity;
//     const cartStringified = JSON.stringify(cart);
//     // console.log(cartStringified);
//     localStorage.setItem('cart', cartStringified)

// };

// const displayProductFromLocalStorage = () => {
//     const saveCart = getItemFromLocalStorage();
//     // console.log(saveCart);
//     for (let product in saveCart) {
//         // console.log(product);
//         const quantity = saveCart[product];
//         displayProduct(product, quantity)
//     }
// };

// displayProductFromLocalStorage();
