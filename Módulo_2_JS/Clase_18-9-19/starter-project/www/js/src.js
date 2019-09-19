'use strict';

const names = ['willy', 'Ivan', 'Ramiro'];
const eyeColor = ['azul', 'marron', 'azul'];
const height = ['bajo', 'alto', 'alto'];
const tatooed = [true, false, false];
const tip = [{ height: 'alto' }, { eyeColor: 'marron' }, { tatooed: false }];

class person {
  constructor(name) {
    this.name = name;
  }
}
class suspect extends person {
  #tip;
  constructor(name, eyeColor, height, tatooed) {
    super(name);
    this.names = names;
    this.eyeColor = eyeColor;
    this.height = height;
    this.tatooed = tatooed;
    this.#tip = tip;
  }
  confes(){
      return this.#tip;
  }
}

const suspects = names.map ((name,index)=>{
    return new suspect(name,eyeColor[index],height[index],tatooed[index],tip[index]);
});
class gadget extends person {
     function investigate() = 

}

console.log(suspects);




/*
class sospechoso {
  constructor(names, eyeColor, height, tatooed) {
    this.names = names;
    this.eyeColor = eyeColor;
    this.height = height;
    this.tatooed = tatooed;
  }
  posible() {
    return this.names + this + eyeColor + this.height + this.tatooed;
  }
}
*/
/*
const test = {
a=5;
b=7;

};

console.log(Object.keys(test));
*/
