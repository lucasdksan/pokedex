import styled from "styled-components";
import { ColorType } from "../../types/LineStatusTypes";
import { colors } from "../themes";

export const Container = styled.div<ColorType>`
    width: 200px;
    height: 8px;
    border-radius: 8px;
    background-color: ${colors.WhiteColor};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;

    span {
        width: ${props => `${props.widthValue}px`};
        height: 100%;
        background: ${ props => props.colorKey ? props.colorKey : colors.ThirdColor};
    }
`;