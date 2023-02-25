import WhiteBox from "./WhiteBox";

import { Container } from "../styles/components/CardPokeModal";
import StatesCircleVal from "./StatesCircleVal";
import LineStatus from "./LineStatus";

const CardPokeModal = ()=>{
    const arrSkills = ["Mimin", "Max"];

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
                    <WhiteBox
                        valuePadding="20px 30px"
                        valueWidth="100%"
                        valueGap
                    >
                        <em>Abilities: </em>
                        <div className="containerSkills">
                            {
                                typeof arrSkills == "object" ? arrSkills.map((e,k)=>{
                                    return(
                                        <span key={k} className={k > 0 ? "space" : ""}>{e}</span>
                                    );
                                }) : <span>{arrSkills}</span>
                            }
                        </div>
                    </WhiteBox>
                    <WhiteBox
                        valuePadding="10px 30px"
                        valueWidth="100%"
                        valueGap
                    >
                        <div className="containerLine">
                            <span>Healthy Points</span>
                            <strong>140</strong>
                            <LineStatus 
                                value={140}
                                color="linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)"
                            />
                        </div>
                    </WhiteBox>
                </div>
                <div className="bottomCard">
                    <WhiteBox 
                        valueWidth="150px"
                        valuePadding="10px 20px"
                    >
                        <StatesCircleVal 
                            name="Defense"
                            value={48}
                        />
                    </WhiteBox>
                    <WhiteBox
                        valueWidth="150px"
                        valuePadding="10px 20px"
                    >
                        <StatesCircleVal 
                            name="Attack"
                            value={150}
                        />
                    </WhiteBox>
                    <WhiteBox
                        valueWidth="150px"
                        valuePadding="10px 20px"
                    >
                        <StatesCircleVal 
                            name="Sp Defense"
                            value={90}
                        />
                    </WhiteBox>
                    <WhiteBox
                        valueWidth="150px"
                        valuePadding="10px 20px"
                    >
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