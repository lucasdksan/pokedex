import styled from "styled-components";
import { colors, fonts, sizes } from "../themes";

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.DangerColor};

    section {
        max-width: ${sizes.desk};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 0 auto;

        div {
            &.containerTitle {
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;

                h1 {
                    font-family: ${fonts.main};
                    font-style: normal;
                    font-weight: 700;
                    font-size: 450px;
                    color: rgba(0, 0, 0, 0.5);
                }

                img {
                    position: absolute;
                    transform: scale(.75);
                }
            }

            &.bottomContainer {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                p {
                    font-family: ${fonts.main};
                    font-style: normal;
                    font-weight: 700;
                    font-size: 48px;
                    line-height: 56px;
                    color: ${colors.WhiteSecondColor};

                    span {
                        color: ${colors.BlackColors};
                    }
                }

                a {
                    background: ${colors.YellowColor};
                    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
                    border-radius: 10px;
                    padding: 18px 75px;

                    font-family: ${fonts.main};
                    font-style: normal;
                    font-weight: 700;
                    font-size: 23px;
                    line-height: 27px;
                    color: ${colors.DarkColor};

                    margin-top: 30px;
                }
            }
        }
    }
`;