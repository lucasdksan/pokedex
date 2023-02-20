import styled from "styled-components";
import { colors, fonts } from "../themes";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;

    .topContent {
        display: flex;
        flex-direction: row;

        .leftArea {
            width: 60%;
            height: auto;

            img {
                width: 60%;
                height: auto;
            }
        }

        .rightArea {
            width: 40%;
            height: auto;

            span.title {
                font-family: ${fonts.main};
                font-style: normal;
                font-weight: 400;
                font-size: 72px;
                line-height: 84px;
                letter-spacing: 4px;
                color: ${colors.WhiteThird};
            }

            p {
                font-family: ${fonts.sub};
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: ${colors.FullWhite};
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