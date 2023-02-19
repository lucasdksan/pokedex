import { Container } from "../styles/components/LegendaryCard";
import { LegendaryCardTypes } from "../types/LegendaryCardTypes";

import pokeBall from "../assets/legendary/pokeball.svg";

const LegendaryCard = ({ name, src }:LegendaryCardTypes)=>{
    return(
        <Container>
            <img className="pokeMainImage" src={src} alt="Pokémon Image" />
            <div className="nameArea">
                <span>{name}</span>
                <img src={pokeBall} alt="Pokeball icon" />
            </div>
        </Container>
    );
}

export default LegendaryCard;