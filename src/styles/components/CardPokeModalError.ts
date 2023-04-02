import styled from "styled-components";
import { colors, fonts, sizes } from "../themes";

export const Container = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    width: 100%;
    max-width: 800px;
    height: 380px;
    background: linear-gradient(180deg,#732119 42.19%,${colors.Eletric} 100%);

    @media(max-width: 768px){
        max-width: ${sizes.tabletEnd};
    }

    @media(max-width: 590px){
        max-width: ${sizes.mobile};
    }

    @media(max-width: 430px){
        max-width: ${sizes.mobileEnd};
    }

    img {
        height: 250px;
        width: auto;

        @media(max-width: 590px){
            height: 220px;
        }

        @media(max-width: 430px){
            height: 170px;
        }
    }

    span {
        font-family: ${fonts.main};
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 15px;
        text-align: center;
        color: ${colors.FullWhite};
        text-transform: uppercase;
        margin-top: 20px;

        @media(max-width: 590px){
            line-height: 25px;
        }

        @media(max-width: 430px){
            font-size: 18px;
        }
    }
`;