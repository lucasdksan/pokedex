import styled from "styled-components";
import { ModalDropDownCssTypes } from "../../types/ModalDropDownTypes";

export const Container = styled.div<ModalDropDownCssTypes>`
    position: absolute;
    top: ${ props => props.state ? "0px" : "-100vh" };
    left: 0px;
    z-index: 10000;
    width: 100%;
    height: ${props => typeof props.height === "number" ? `${props.height}px` : `${props.height}`};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 37px 0px;

    background: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%);
    box-shadow: 4px 4px 24px rgba(1, 17, 38, 0.2);
    border-radius: 0px 0px 16px 16px;

    transition: top .5s ease-in-out;

    button {
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
        position: absolute;
        top: 37px;
        right: 30px;
    }

    .containerLinks {
        display: flex;
        flex-direction: column;    
        flex: 1;

        ul {
            margin-top: 30px;

            li {
                display: flex;
                align-items: center;
                justify-content: center;

                a {
                    border: none;
                    padding: 10px 0px;
                }
            }
        }
    }
`;