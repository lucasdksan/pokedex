import styled from "styled-components";
import { ColorType } from "../../types/LineStatusTypes";
import { colors } from "../themes";

const convertPixes = (value: number)=>{
    console.log("value: ", value)

    let result = value/2;

    console.log("result: ", result)

    return `${result}px`;
}

export const Container = styled.div<ColorType>`
    width: 200px;
    height: 8px;
    border-radius: 8px;
    background-color: ${colors.WhiteColor};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;

    @media (max-width: 620px){
        width: ${props => props.resp ? "100px" : "200px"};
    }

    span {
        width: ${props => `${props.widthValue}px`};
        height: 100%;
        background: ${ props => props.colorKey ? props.colorKey : colors.ThirdColor};

        @media (max-width: 620px) {
            width: ${props => props.resp ? convertPixes(props.widthValue) : `${props.widthValue}px`};
        }
    }
`;