const addProduct = ()=>{

    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value='';
    quantityField.value='';
    console.log(product,quantity);
    displayProduct(product,quantity);
    saveProductLocalStorage(product, quantity);

};

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container')
     const li = document.createElement ('li');
     li.innerHTML=`${product}: ${quantity}`;
     ul.appendChild(li);
};

const getStoredShoppingCard =() => {
    let cart = {};
    const storedCard = localStorage.getItem('cart');
    
    if(storedCard){
         cart = JSON.parse(storedCard);
    }
    return cart;



}

const saveProductLocalStorage = (product,quantity) =>{

  const cart = getStoredShoppingCard();
  cart[product]= quantity;
  const cartStringField = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringField );

}

const showDisplay = () =>{
const saveCard = getStoredShoppingCard();
console.log(saveCard);
for(const product in saveCard){
    const quantity = saveCard[product];
    console.log(product, quantity)
    displayProduct(product,quantity);
}

}

showDisplay();