import styled from "styled-components";
import { colors, fonts, sizes } from "../themes";

export const Container = styled.div`
    margin-top: 90px;
    width: 100vw;
    height: 100vh;
    padding: 40px 10px;
    background-color: ${colors.FullWhite};

    section {
        max-width: ${sizes.desk};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 0 auto;

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
        }

        div {
            &.containerSearch {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                width: 100%;

                input {
                    background: ${colors.WhiteSecondColor};
                    box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.2);
                    border-radius: 40px;
                    width: 100%;
                    height: 50px;
                    padding: 15px 30px;
                    margin-bottom: 25px;
                }

                .lineOptions {
                    padding: 0px 30px;

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

            }
        }
    }
`;