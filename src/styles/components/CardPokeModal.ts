import styled from "styled-components";
import { CardPokeModalTypesCss } from "../../types/CardPokeModalTypes";
import { colors, fonts } from "../themes";

export const Container = styled.div<CardPokeModalTypesCss>`
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    width: 100%;
    max-width: 800px;
    height: 380px;
    background: ${props => props.bg_color};

    .leftArea {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 40%;
        height: 100%;
        box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);

        .areaImgs {
            flex: 1;
            img {
                width: 100%;
                height: auto;
            }
        }

        .areaTypes {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            bottom: 20px;
            right: 20px;
            
            span {
                font-family: ${fonts.robo};
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                text-align: center;
                color: ${colors.DarkColor};

                border-radius: 12px;
                box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
                padding: 5px 10px;
                background-color: white;
            }
        }
    }

    .rightArea {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;
        width: 60%;
        height: 100%;
        padding: 30px 20px;
        background: linear-gradient(180deg, ${props=>props.bg_color_shadow}, 42.19%, transparent 100%);

        .topCard {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            strong {
                font-family: ${fonts.main};
                font-style: normal;
                font-weight: 700;
                font-size: 36px;
                line-height: 42px;
                color: ${colors.WhiteThird};
                text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
            }

            span {
                font-family: ${fonts.sub};
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 30px;
                text-align: center;
                color: ${colors.WhiteThird};
            }

            .circleCode {
                width: 42px;
                height: 42px;
                border-radius: 50%;
                background-color: ${colors.ThirdColor};
                display: flex;
                align-items: center;
                justify-content: center;

                font-family: ${fonts.main};
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;

                text-align: center;
                color: ${colors.BlackColors};
            }
        }

        .middleCard {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 5px;
            gap: 10px;
            
            em {
                font-family: ${fonts.main};
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                color: ${colors.BlackColors};
            }

            span {
                font-family: ${fonts.sub};
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: ${colors.BlackColors};

                &.space {
                    margin-left: 10px;
                }
            }

            .content {
                display: flex;
                justify-content: space-between;
                width: 100%;

                .containerLine {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;

                    span {
                        font-family: ${fonts.main};
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 19px;
                        color: ${colors.BlackColors};
                    }

                    strong {
                        font-family: ${fonts.main};
                        font-style: normal;
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 19px;
                        color: ${colors.BlackColors};
                    }
                }
            }
        }
        
        .bottomCard {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            gap: 10px;
        }
    }
`;