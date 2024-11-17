

import { renderOrderSummary } from "./checkOut/orderSummary.js";
import { renderPaymentSummary } from "./checkOut/paymentSummary.js";

import { loadProducts ,loadProductsFetch} from "../data/products.js";

import { loadCart } from "../data/cart.js";



//import '../data/cart.class.js';


async function loadPage(){
    try{
        // throw 'error 1';
 
         await loadProductsFetch();
         const value = await new Promise((resolve,reject)=>{
             //throw 'error2'
             loadCart(()=>{
                 //reject('error3');
                 resolve('value3'); 
             });
         });
 
 
     } catch(error){
         console.log('unexpected error . please try again later')
     }

    
    renderOrderSummary();
    renderPaymentSummary();
}


loadPage();



/*Promise.all([
    loadProductsFetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })

]).then(()=>{
    
    renderOrderSummary();
    renderPaymentSummary();
    
});
*/
/*
loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})

*/