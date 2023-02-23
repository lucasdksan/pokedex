import { ModalOpenCardCss } from './../../types/ModalOpenCardTypes';
import styled from "styled-components";
import { colors, fonts, sizes } from "../themes";

export const Container = styled.section<ModalOpenCardCss>`
    display: ${props => props.open ? "flex" : "none"};
    visibility: ${props => props.open ? "visible" : "hidden"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    background: rgba(37,33,3,0.5);
    width: 100vw;
    height: 100vh;
    z-index: 9999;

    .closeIcon {
        opacity: 1;
        
        img {
            opacity: 1;
        }
    }
`;