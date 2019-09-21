'use strict';
/*
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
     constructor (name){
         super (name);
     } 
     investigate(suspects){

     }

}

console.log(suspects);
const myDetective =new Detective
*/

class animal {
    constructor (especie){
        this.especie = especie;
    }
}

class gallina extends animal {
    constructor (){
        super("gallina");
    }
}

class zorro extends animal {
    constructor (){
        super("zorro");
    }
}

class habitacion {
    constructor(animal1, animal2){
    this.animal1 = animal1;
    this.animal2 = animal2}


salida() {
     if( this.animal1 instanceof gallina && this.animal2 instanceof gallina){
         return {...this,animal3: new gallina()};
     }else if(this.animal1 instanceof zorro && this.animal2 instanceof zorro){
            return {...this,animal3: new zorro()}
     }else { 
                let posicion = this.animal1 instanceof zorro ? "animal1" : "animal2"
                return this[posicion];
            }
     }
}






const miZorro = new zorro();
const miotrozorro = new zorro ();
const migallina = new gallina();
const miotragallina = new gallina();
const mihabitacion = new habitacion( miZorro, miotrozorro);

console.log(mihabitacion.salida())


