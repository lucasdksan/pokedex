import WhiteBox from "./WhiteBox";

import { Container } from "../styles/components/CardPokeModal";
import StatesCircleVal from "./StatesCircleVal";

const CardPokeModal = ()=>{
    return(
        <Container>
            <div className="leftArea">
                <div className="areaImgs">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png" alt="Pokémon Image" />
                </div>
                <div className="areaTypes">
                    <span>Normal</span>
                    <span>Fire</span>
                </div>
            </div>
            <div className="rightArea">
                <div className="topCard">
                    <strong>Ditto</strong>
                    <span>Generation 1</span>
                    <div className="circleCode">
                        23
                    </div>
                </div>
                <div className="middleCard">
                    <WhiteBox arrSkills="Mimica" >
                        <em>Abilities</em>
                    </WhiteBox>
                </div>
                <div className="bottomCard">
                    <WhiteBox>
                        <StatesCircleVal 
                            name="Defense"
                            value={48}
                        />
                    </WhiteBox>
                    <WhiteBox>
                        <StatesCircleVal 
                            name="Attack"
                            value={150}
                        />
                    </WhiteBox>
                    <WhiteBox>
                        <StatesCircleVal 
                            name="Sp Defense"
                            value={90}
                        />
                    </WhiteBox>
                    <WhiteBox>
                        <StatesCircleVal 
                            name="Sp Attack"
                            value={150}
                        />
                    </WhiteBox>
                </div>
            </div>
        </Container>
    );
}

export default CardPokeModal;