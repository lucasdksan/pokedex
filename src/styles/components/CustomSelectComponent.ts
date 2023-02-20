import styled from "styled-components";
import { colors, fonts } from "../themes";

export const Container = styled.select`
    border: none;
    background: ${colors.WhiteSecondColor};
    box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
    border-radius: 4px;
    padding: 5px 30px;
    margin: 0px 20px;

    &:first-child {
        margin-left: 0px;
    }

    &:last-child {
        margin-right: 0px;
    }
`;