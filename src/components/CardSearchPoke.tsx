import { Container } from "../styles/components/CardSearchPoke";
import { CardSearchPokeTypes } from "../types/CardSearchPokeTypes";
import StatesCircleVal from "./StatesCircleVal";

const CardSearchPoke = ({ name, typing, valueAttk, valueDef, image }: CardSearchPokeTypes)=>{
    return(
        <Container>
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
                                <span key={k}>{e}</span>
                            )
                        }) : <span>{typing}</span>
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