import styled from "styled-components";
import { colors, fonts } from "../themes";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    .topContent {
        display: flex;
        flex-direction: row;

        @media(max-width: 770px){
            flex-direction: column;
            align-items: center;
        }

        .leftArea {
            width: 60%;
            height: auto;

            @media(max-width: 1200px){
                width: 45%;
            }

            @media(max-width: 950px) {
                width: 40%;
            }

            @media(max-width: 770px) {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 60%;
            }

            img {
                width: 60%;
                height: auto;

                @media(max-width: 1200px){
                    width: 100%;
                }
            }
        }

        .rightArea {
            width: 40%;
            height: auto;

            @media(max-width: 1200px){
                width: 55%;
            }

            @media(max-width: 950px) {
                width: 60%;
            }

            @media(max-width: 770px) {
                width: 100%;
            }

            span.title {
                font-family: ${fonts.main};
                font-style: normal;
                font-weight: 400;
                font-size: 72px;
                line-height: 84px;
                letter-spacing: 4px;
                color: ${colors.WhiteThird};

                @media(max-width: 950px) {
                    font-size: 68px;
                    line-height: 80px;
                }

                @media(max-width: 620px) {
                    font-size: 60px;
                    line-height: 72px;
                }
            }

            p {
                font-family: ${fonts.sub};
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: ${colors.FullWhite};

                @media(max-width: 950px) {
                    font-size: 14px;
                    line-height: 18px;
                }
            }

            .contentStatus {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                gap: 40px;
                margin-top: 20px;
            }
        }
    }

    .bottomContent {
        margin-top: 40px;
        width: 100%;
        height: 200px;
    }
`;