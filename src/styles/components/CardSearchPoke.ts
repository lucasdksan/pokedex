import styled from "styled-components";
import { CardSearchPokeTypesCss } from "../../types/CardSearchPokeTypes";
import { colors, fonts } from "../themes";

export const Container = styled.div<CardSearchPokeTypesCss>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.WhiteColor};
    filter: drop-shadow(4px 4px 4px rgba(33, 33, 33, 0.1));
    border-radius: 8px;
    width: 350px;
    height: 150px;
    overflow: hidden;
    cursor: pointer;

    @media(max-width: 1140px){
        width: 300px;
    }

    @media(max-width: 950px) {
        width: 350px;
    }

    @media(max-width: 770px){
        width: 285px;
    }

    @media(max-width: 620px) {
        width: 100%;
    }
    
    .leftArea {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 45%;
        height: 100%;
        flex: 1;

        .cardName {
            font-family: ${fonts.main};
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;
            color: ${colors.DarkColor};
            text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
            margin-bottom: 10px;
        }

        .containerStates {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
        }

        .containerType {
            display: flex;
            gap: 5px;

            span {
                font-family: ${fonts.robo};
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                text-align: center;
                color: ${colors.FullWhite};

                box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
                border-radius: 12px;
                padding: 5px 15px;

                @media(max-width: 1140px){
                    padding: 5px 10px;
                }
            }
        }
    }

    .rightArea {
        display: flex;
        width: 55%;
        height: 100%;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.colorCss};

        img {
            height: 100%;
            width: auto;
        }
    }
`;