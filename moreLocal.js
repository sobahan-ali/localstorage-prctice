const addedProduct = () => {
    const product = document.querySelector('#productName').value;
    const quantity = document.querySelector('#productQuantity').value;
    displayForUser(product, quantity);
    saveProductInLocalStorage(product, quantity);
};

const displayForUser = (product, quantity) => {
    const productContainer = document.getElementById('productContainer');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`
    productContainer.appendChild(li);
};


const getStoredProductFromLocalStorage = () => {
    let cart = {};
    const isStored = localStorage.getItem('cart');
    if (isStored) {
        cart = JSON.parse(isStored);
        // console.log(cart);
    }
    return cart;
};

const saveProductInLocalStorage = (product, quantity) => {
    const isStored = getStoredProductFromLocalStorage();
    console.log(product, quantity);
    isStored[product] = quantity;
    const stringify = JSON.stringify(isStored);
    localStorage.setItem('cart', stringify);


};

const displayProductFromLocalStorage = () => {
    const product = getStoredProductFromLocalStorage();
    for (let p in product) {
        const quantity = product[p];
        displayForUser(p, quantity);
    }
};

displayProductFromLocalStorage()

