import styled from "styled-components";
import { colors, fonts } from "../themes/index";
import { ModalDropDownCssTypes } from "../../types/ModalDropDownTypes";

export const Container = styled.div<ModalDropDownCssTypes>`
    position: fixed;
    top: ${ props => props.state ? "0px" : "-700px" };
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

    button.close-btn {
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

    .content-filter {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        width: 100%;

        .btns {
            display: flex;
            gap: 5px;

            button {
                width: 80px;
                padding: 10px;
                border-radius: 20px;
                cursor: pointer;
                background-color: ${colors.BtnColor};

                font-family: ${fonts.robo};
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 14px;
                text-align: center;
                color: ${colors.FullWhite};

                &.btn-clear {
                    background-color: ${colors.DangerColor};
                }

                &.btn-all {
                    background-color: ${colors.Deuteranopia.d1};
                }
            }
        }
    }
`;