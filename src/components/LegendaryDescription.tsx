import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Container } from "../styles/components/LegendaryDescription";

import LegendaryCard from "./LegendaryCard";
import { CustomArrowLeft, CustomArrowRight } from "./CustomArrows";
import ContentStatusElement from "./ContentStatusElement";

import { LegendaryDescriptionTypes } from "../types/LegendaryDescriptionTypes";
import { pokemonAllViewTypes } from "../types/pokemonAllViewTypes";

import pokemonAllView from "../view/pokemonAllView";
import { defaultPoke } from "../data/defaultPokemon";

const LegendaryDescription = ({ legendaryPokes }:LegendaryDescriptionTypes) => {
    const undefinedText = "undefined";
    
    const [ pokeView, setPokeView ] = useState<pokemonAllViewTypes>(defaultPoke);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <CustomArrowRight />,
        prevArrow: <CustomArrowLeft />
    };

    return (
        <Container>
            <div className="topContent">
                <div className="leftArea">
                    <img src={pokeView.sprite} alt="Image pokemon" />
                </div>
                <div className="rightArea">
                    <span className="title">{pokeView.name}</span>
                    <p>{pokeView.flavor_text_entries ? pokeView.flavor_text_entries : undefinedText}</p>
                    <div className="contentStatus">
                        {
                            pokeView.stats.map((e,k)=>{
                                return(
                                    <ContentStatusElement
                                        key={k}
                                        name={e.name}
                                        value={e.value}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="bottomContent">
                <Slider {...settings}>
                    {
                        legendaryPokes?.map((e,k)=>{
                            let url = e.sprites.other.home.front_default !== null ? e.sprites.other.home.front_default as string : Object.values(e.sprites.other)[2].front_default as string;

                            return(
                                <LegendaryCard
                                    key={k}
                                    name={e.name}
                                    src={url}
                                    click={()=>setPokeView(pokemonAllView.render(e))}
                                />
                            );
                        })
                    }
                </Slider>
            </div>
        </Container>
    );
}

export default LegendaryDescription;