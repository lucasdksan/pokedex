import styled from "styled-components";
import { colors, fonts, sizes } from "../themes";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(215.78deg, #B57E10 -124.09%, #B57E10 -78.76%, #F9DF7B -35.76%, #FFF3A6 8.4%, #F9DF7B 50.24%, #B57E10 99.06%);
    border-radius: 18px;
    overflow: hidden;
    width: 130px;
    height: 180px;

    .pokeMainImage {
        width: 100%;
        height: auto;
    }

    .nameArea {
        display: flex;
        height: 50px;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 8px;
        border-radius: 18px 18px 0px 0px;
        background-color: ${colors.FullWhite};

        span {
            font-family: ${fonts.robo};
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            color: ${colors.Deuteranopia.d6};
        }

        img {
            width: 20px;
            height: 20px;
        }
    }
`;