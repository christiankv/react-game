import {useEffect, useState } from "react"
import Equipment from "./script/equipment";
import Caracter from "./script/caracter";
import styled from "styled-components";






function App() {
const [player, setplayer] = useState(new Caracter("nano"))

const setupstats = ()=>{
  setplayer((prev)=>({
    ...prev, 
    stats: {
      hp : prev.atributes.end * 10,
      maxhp : prev.atributes.end * 10,
      stamina : prev.atributes.end * 25,
      atk : prev.atributes.str * 5 + prev.equip.wepon.atk,
      def : prev.atributes.str * 2 * prev.atributes.end + prev.equip.helm.def + prev.equip.body.def + prev.equip.boots.def + prev.equip.gloves.def,
      spd : prev.atributes.agi * 20,
      carryWeight : prev.atributes.str*prev.atributes.end/2+ 10 

     }
    }))
}

const training = (atribute)=>{
  switch (atribute){
    case "str":
      setplayer((prev)=>({
        ...prev, 
        atributes: {...prev.atributes, str: prev.atributes.str +1 }
        }))
        setupstats()
    break
    case "agi":
      setplayer((prev)=>({
        ...prev, 
        atributes: {...prev.atributes, agi: prev.atributes.agi +1 }
        }))
        setupstats()
      break
      case "end":
      setplayer((prev)=>({
        ...prev, 
        atributes: {...prev.atributes, end: prev.atributes.end +1 }
        }))
        setupstats()
      break
  }
}

let helm = new Equipment ("helm", "wepon", .25)
console.log(player);
return(
    <div className="App">
      <SheetContainer>
        <h2>{player.name}</h2>
        <AtributeContainer>
      <p>
      str: {player.atributes.str}
      <button onClick={()=>training("str")}>str</button>
      </p>
      <p>
      end:{player.atributes.end}
      <button onClick={()=>training("end")}>end</button>

      </p>
      <p>
      agi:{player.atributes.agi}
      <button onClick={()=>training("agi")}>agi</button>
      </p> 
        </AtributeContainer>
      <StatContainer>
        <p>atk: {player.stats.atk}</p>
        <p>def: {player.stats.def}</p>
        <p>spd: {player.stats.spd}</p>
        <p>hp: {player.stats.hp}/{player.stats.maxhp}</p>
        <p>carry weight: {player.stats.carryWeight}</p>
      </StatContainer>
      </SheetContainer>

    </div>
  );
}

export default App;


const SheetContainer = styled.div`
display: flex;
flex-direction: column;
border: solid red 1px;
width: 150px;
align-items: center;

`
const AtributeContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1rem;
justify-content: center
`

const StatContainer = styled.div`

`