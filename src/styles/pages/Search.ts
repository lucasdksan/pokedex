import styled from "styled-components";
import { colors, fonts, sizes } from "../themes";

export const Container = styled.div`
    margin-top: 90px;
    width: 100vw;
    height: auto;
    padding: 40px 10px;
    background-color: ${colors.FullWhite};

    section {
        max-width: ${sizes.desk};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 0 auto;

        @media(max-width: 1140px){
            max-width: ${sizes.deskEnd};
        }

        @media(max-width: 950px){
            max-width: ${sizes.tablet};
        }

        @media(max-width: 770px){
            max-width: ${sizes.tabletEnd};
        }

        @media(max-width: 620px){
            max-width: ${sizes.mobile};
        }
    
        @media(max-width: 440px){
            max-width: ${sizes.mobileEnd};
        }

        h1 {
            font-family: ${fonts.main};
            font-style: normal;
            font-weight: 400;
            font-size: 35px;
            line-height: 41px;
            text-align: center;
            letter-spacing: 3px;
            color: ${colors.BlackColors};
            margin-bottom: 20px;

            @media(max-width: 620px){
                font-size: 24px;
                line-height: 28px;
            }
        }

        div {
            &.containerSearch {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                width: 100%;
                margin-bottom: 15px;

                .contentInput {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: auto;
                    position: relative;
                    margin-bottom: 25px;

                    input {
                        background: ${colors.WhiteSecondColor};
                        box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.2);
                        border-radius: 40px;
                        width: 100%;
                        height: 50px;
                        padding: 15px 30px;
                    }

                    button {
                        right: 20px;
                        position: absolute;
                        width: 100px;
                        height: 40px;
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
                    }
                }

                .lineOptions {
                    padding: 0px 30px;

                    @media(max-width: 620px) {
                        display: none;
                    }

                    button {
                        width: 100px;
                        padding: 10px 30px;
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
                            margin-left: 20px;

                            @media(max-width: 950px) {
                                margin-left: 10px;
                            }
                        }

                        &.btn-all {
                            background-color: ${colors.Deuteranopia.d1};
                            margin-left: 20px;
                            width: auto;

                            @media(max-width: 950px) {
                                margin-left: 10px;
                            }
                        }
                    }

                    select,
                    option {
                        font-family: ${fonts.sub};
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 20px;
                        text-align: center;
                        color: ${colors.BlackColors};
                    }

                    select {
                        border: none;
                        background: ${colors.WhiteSecondColor};
                        box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
                        border-radius: 4px;
                        padding: 5px 30px;
                        margin: 0px 20px;

                        @media(max-width: 950px) {
                            margin: 0px 10px;
                        }

                        &:first-child {
                            margin-left: 0px;
                        }

                        &:last-child {
                            margin-right: 0px;
                        }
                    }
                }
            }

            &.contentList {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
                margin-bottom: 20px;

                @media(max-width: 1140px){
                    gap: 15px 8px;
                }

                @media(max-width: 950px){
                    grid-template-columns: repeat(2, 1fr);
                    gap: 24px 20px;
                }

                @media(max-width: 770px){
                    gap: 15px;
                }

                @media(max-width: 620px) {
                    grid-template-columns: repeat(1, 1fr);
                    width: 100%;
                }
            }
        }

        .btn-more {
            padding: 10px 30px;
            border-radius: 15px;
            background-color: ${colors.BtnColor};

            font-family: ${fonts.robo};
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 14px;
            text-align: center;
            color: ${colors.FullWhite};
            transition: all 1;

            &:hover {
                transition: all 1;
                background-color: ${colors.DarkBtnColor};
                cursor: pointer;
            }
        }
    }
`;