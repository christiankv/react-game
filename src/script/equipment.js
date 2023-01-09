export default class Equipment {
    constructor(piece,  type, weight){
        this.piece = piece
        this.type = type
        this.weight = weight
        if (this.type === "armor"){
            this.def = 10 * weight
        }else if (this.type === "wepon"){
            this.atk = 10 * weight
        }else if (this.type === "none"){
            this.atk = 0
            this.def = 0
        }
    }
  }