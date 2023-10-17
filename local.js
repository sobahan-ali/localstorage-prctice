

const addProduct = () => {
    const product = document.querySelector('#name').value;
    const quantity = document.querySelector('#quantity').value;
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity)
};


const displayProduct = (product, quantity) => {
    const container = document.querySelector('#container');

    const li = document.createElement('li');
    li.innerText = `${product}:  ${quantity}`;

    container.appendChild(li);
};

const storedProduct = () => {
    let cart = {};
    const storedProduct = localStorage.getItem('cart');
    if (storedProduct) {
        cart = JSON.parse(storedProduct);
    }
    return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
    const cart = storedProduct();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);

};

const displayProductFromLocalStorage = () => {
    const products = storedProduct();
    console.log(products);
    for (let pro in products) {
        console.log(pro);
        const quantity = products[pro];
        displayProduct(pro, quantity);
    }
};

displayProductFromLocalStorage();