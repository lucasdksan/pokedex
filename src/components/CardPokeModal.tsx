import { useContext } from "react";

import WhiteBox from "./WhiteBox";
import StatesCircleVal from "./StatesCircleVal";
import LineStatus from "./LineStatus";

import { Container } from "../styles/components/CardPokeModal";

import { OpenDataModalContext } from "../contexts/OpenDataModal";

import { selectColorsForType } from "../libs/selectColorsForType";
import { selectColorsForTypeShadow } from "../libs/selectColorsForTypeShadow";

const CardPokeModal = ()=>{
    const { pokemon } = useContext(OpenDataModalContext);

    console.log(pokemon)

    function handlerSelectColor(shadow: boolean){
        if(shadow){
            if(typeof pokemon.types == "object"){
                return selectColorsForTypeShadow(pokemon.types[0]);
            } else {
                return selectColorsForTypeShadow(pokemon.types);
            }
        } else {
            if(typeof pokemon.types == "object"){
                return selectColorsForType(pokemon.types[0]);
            } else {
                return selectColorsForType(pokemon.types);
            }
        }
        
    }

    function handlePokeGeneration(){
        const [ gen, cod ] = pokemon.generation.split("-");

        return cod.toUpperCase();
    }

    return(
        <Container 
            bg_color={handlerSelectColor(false)}
            bg_color_shadow={handlerSelectColor(true)}
        >
            <div className="leftArea">
                <div className="areaImgs">
                    <img src={pokemon.sprite as string} alt="Pokémon Image" />
                </div>
                <div className="areaTypes">
                    {
                        typeof pokemon.types == "object" ? pokemon.types.map((e,k)=>{
                            return(
                                <span 
                                    key={k} 
                                    className={k > 0 ? "space" : ""}
                                >{e}</span>
                            );
                        }) : <span>
                                {pokemon.types}
                            </span>
                    }
                </div>
            </div>
            <div className="rightArea">
                <div className="topCard">
                    <strong>{pokemon.name}</strong>
                    <span>Generation {handlePokeGeneration()}</span>
                    <div className="circleCode">
                        {pokemon.id}
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
                                typeof pokemon.abilities == "object" ? pokemon.abilities.map((e,k)=>{
                                    return(
                                        <span key={k} className={k > 0 ? "space" : ""}>{e}</span>
                                    );
                                }) : <span>{pokemon.abilities}</span>
                            }
                        </div>
                    </WhiteBox>
                    <WhiteBox
                        valuePadding="10px 15px"
                        valueWidth="100%"
                        valueGap
                    >
                        <div className="content">
                            <div className="containerLine">
                                <span>Healthy Points</span>
                                <strong>{pokemon.stats[0].value}</strong>
                                <LineStatus 
                                    value={pokemon.stats[0].value}
                                    color="linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)"
                                />
                            </div>
                            <div className="containerLine">
                                <span>Speed Points</span>
                                <strong>{pokemon.stats[5].value}</strong>
                                <LineStatus 
                                    value={pokemon.stats[5].value}
                                />
                            </div>
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
                            value={pokemon.stats[2].value}
                        />
                    </WhiteBox>
                    <WhiteBox
                        valueWidth="150px"
                        valuePadding="10px 20px"
                    >
                        <StatesCircleVal 
                            name="Attack"
                            value={pokemon.stats[1].value}
                        />
                    </WhiteBox>
                    <WhiteBox
                        valueWidth="150px"
                        valuePadding="10px 20px"
                    >
                        <StatesCircleVal 
                            name="Sp Defense"
                            value={pokemon.stats[4].value}
                        />
                    </WhiteBox>
                    <WhiteBox
                        valueWidth="150px"
                        valuePadding="10px 20px"
                    >
                        <StatesCircleVal 
                            name="Sp Attack"
                            value={pokemon.stats[3].value}
                        />
                    </WhiteBox>
                </div>
            </div>
        </Container>
    );
}

export default CardPokeModal;