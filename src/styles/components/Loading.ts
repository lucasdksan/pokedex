import { LoadingTypesCss } from './../../types/LoadingTypes';
import styled from "styled-components";

export const Container = styled.div<LoadingTypesCss>`
    width: 100%;
    height: ${props => props.fullHeight ? "calc(100vh - 90px)" : "100%"};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;