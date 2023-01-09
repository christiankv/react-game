import Equipment from "./equipment"

let none = new Equipment ("none", "none", 0)

console.log(none);
export default class Caracter {
    constructor(name){
        this.name = name

        this.atributes = {
            str : 1,
            end : 1,
            agi : 1 

        }
        this.exp = {
            str : 0,
            end : 0,
            agi : 0
        }
        this.equip = {
                helm : none,
                body : none,
                boots: none,
                gloves: none,
                wepon: none,
              }
              
        this.stats = {
            hp : this.atributes.end * 10,
            maxhp : this.atributes.end * 10,
            stamina : this.atributes.end * 25,
            atk : this.atributes.str * 5 + this.equip.wepon.atk,
            def : this.atributes.str * 2 * this.atributes.end + this.equip.helm.def + this.equip.body.def + this.equip.boots.def + this.equip.gloves.def,
            spd : this.atributes.agi * 20,
            carryWeight : this.atributes.str*this.atributes.end/2+ 10 
        }
        
    }


    }
  