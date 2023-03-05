import { selectColorsForType } from "../libs/selectColorsForType";
import { Container } from "../styles/components/CardSearchPoke";
import { CardSearchPokeTypes } from "../types/CardSearchPokeTypes";
import StatesCircleVal from "./StatesCircleVal";

const CardSearchPoke = ({ name, typing, valueAttk, valueDef, image, arrKey }: CardSearchPokeTypes)=>{
    function handlerModifyColor(color?:string){
        if(color){
            return selectColorsForType(color);
        }
        else if(typeof typing == "string"){
            return selectColorsForType(typing);
        } else if(typeof typing == "object"){
            return selectColorsForType(typing[0]);
        }

        return "#FFFFFF";
    }

    return(
        <Container 
            colorCss={handlerModifyColor()}
            onClick={()=>{console.log("Oi lucas: ", arrKey)}}
        >
            <div className="leftArea">
                <span className="cardName">{name}</span>
                <div className="containerStates">
                    <StatesCircleVal 
                        name="Attack"
                        value={valueAttk}
                    />
                    <StatesCircleVal 
                        name="Defense"
                        value={valueDef}
                    />
                </div>
                <div className="containerType">
                    {
                        (typeof typing == "object") ? typing.map((e,k)=>{
                            return(
                                <span 
                                    style={{backgroundColor: handlerModifyColor(e)}}
                                    key={k}
                                >
                                    {e}
                                </span>
                            )
                        }) : <span style={{backgroundColor: handlerModifyColor()}}>{typing}</span>
                    }
                </div>
            </div>
            <div className="rightArea">
                <img src={image} alt="Image Pokémon" />
            </div>
        </Container>
    );
}

export default CardSearchPoke;