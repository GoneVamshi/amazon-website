export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){

   cart=[{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity:2,
        deliveryOptionId:'1'
    },{
        productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity:1,
        deliveryOptionId:'2'
    }];
}

export function addtoCart(productId,quantity){

    let matchingItem;

    cart.forEach((item)=>{
        if(productId === item.productId){
            matchingItem = item
        }
    })

    if(matchingItem){
        matchingItem.quantity+=quantity
    }
    else{
        cart.push({
            productId:productId,
            quantity:quantity,
            deliveryOptionId:'1'
        })
    }

    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function  removeCart(productId){
    const newCart=[];
    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem)
        }
    });

    cart = newCart;

    saveToStorage();
}

export function updateQuantity(productId,newQuantity){
    let matchingItem;

    cart.forEach((cartItem)=>{
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });
    matchingItem.quantity = newQuantity;

    saveToStorage();
}

export function updateDeliveryOption(productId,deliveryOptionId){
    let matchingItem;
    cart.forEach((cartItem)=>{
        if(productId === cartItem.productId){
            matchingItem = cartItem
        }
    })
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}

export function loadCart(fun){
    const xhr = new XMLHttpRequest();
   
    xhr.addEventListener('load',()=>{
    
     fun();
    })
   
    xhr.open('GET', 'https://supersimplebackend.dev/cart');
   
    xhr.send();
}

export function resetCart() {
    cart = [];
    saveToStorage();
}


