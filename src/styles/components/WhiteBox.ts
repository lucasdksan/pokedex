import { WhiteBoxTypesCss } from "../../types/WhiteBoxTypes";

import styled from "styled-components";
import { colors } from "../themes";

export const Container = styled.div<WhiteBoxTypesCss>`
    background-color: ${colors.FullWhite};
    box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    border-radius: 8px;
    padding: ${ props => props.valuePadding ? props.valuePadding : "5px" };
    width: ${ props => props.valueWidth ?  props.valueWidth : "auto"};
    gap: ${ props => props.valueGap ? "5px" : "0px" };
`;