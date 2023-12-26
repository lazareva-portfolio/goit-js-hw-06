'use strict';


class Storage {
    #items;


    constructor(items = []){
        this.#items = items;
    }
    getItems(){
        return this.#items;
    }
    addItem(newItem){
        this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
        this.#items = this.#items.filter(item => item !== itemToRemove);
    }

}



const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

   // numbers.filter(number => number % 2 != 0);

   // const result = words.filter((word) => word.length > 6);
 // removeItem(itemToRemove){
  // if(this.#items.includes(itemToRemove)){
   //     this.#items.splice(this.#items.indexOf(itemToRemove) - 1, 1);
  //  }
