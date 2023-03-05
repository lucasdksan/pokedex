import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Container } from "../styles/components/LegendaryDescription";

import LegendaryCard from "./LegendaryCard";
import { CustomArrowLeft, CustomArrowRight } from "./CustomArrows";
import ContentStatusElement from "./ContentStatusElement";

import { LegendaryDescriptionTypes } from "../types/LegendaryDescriptionTypes";

import pokemonAllView from "../view/pokemonAllView";
import { pokemonAllViewTypes } from "../types/pokemonAllViewTypes";

const LegendaryDescription = ({ legendaryPokes }:LegendaryDescriptionTypes) => {
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
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png" alt="Image pokemon" />
                </div>
                <div className="rightArea">
                    <span className="title">MewTwo</span>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
                    <div className="contentStatus">
                        <ContentStatusElement
                            name="Exemplo"
                            value={48}
                        />
                        <ContentStatusElement
                            name="Exemplo"
                            value={48}
                        />
                        <ContentStatusElement
                            name="Exemplo"
                            value={48}
                        />
                        <ContentStatusElement
                            name="Exemplo"
                            value={48}
                        />
                        <ContentStatusElement
                            name="Exemplo"
                            value={48}
                        />
                        <ContentStatusElement
                            name="Exemplo"
                            value={48}
                        />
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
                                    click={()=>{
                                    }}
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