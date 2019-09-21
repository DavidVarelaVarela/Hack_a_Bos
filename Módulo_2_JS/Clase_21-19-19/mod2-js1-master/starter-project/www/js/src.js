'use strict';

class item{
    constructor ( name, price) {
        this.name =name;
        this.price =price;
    
    }
 } 

class user {
    constructor(name){
        this.name=name;
        this.cart=[];
        this.cart.amount =[];

    }
    addToCart(item){
this.cart.push(item);
    }
}

class shop{
    static checkout(user){

    for(let  i =0; i < user.cart.length; 1++) {
        let cantidad = user.cart.filter(item => {
            return user.cart [i].name === item.name;
        });
            user.cart.amount[user.cart[i].name] = cantidad.length;
      }
      console.log ("ITEM" | "UNITS" | "PRICE" | "TOTAL");

        }
        )


const pepe =new user ("pepe");
const shoes = new item ("shoes, 800");
pepe.addToCart(shoes);
pepe.addToCart(shoes);
shop.checkout(pepe);
console.log(pepe.cart);







