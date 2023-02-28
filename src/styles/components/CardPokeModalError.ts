import { fonts } from './../themes/fonts';
import styled from "styled-components";
import { colors } from "../themes";

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

    img {
        height: 250px;
        width: auto;
    }

    span {
        font-family: ${fonts.main};
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 14px;
        text-align: center;
        color: ${colors.FullWhite};
        text-transform: uppercase;
        margin-top: 20px;
    }
`;