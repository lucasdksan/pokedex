import { Container } from "../styles/components/CardPokeModalError";

import imageEyesSpin from "../assets/modalError/pokemonDefeated.png";

const CardPokeModalError = ()=>{
    return(
        <Container>
            <img src={imageEyesSpin} alt="Defeated Pokemon Image" />
            <span>The Pokémon entered does not exist!</span>
        </Container>
    );
}

export default CardPokeModalError;