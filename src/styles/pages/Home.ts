import styled from "styled-components";
import { colors, fonts, sizes } from "../themes";

export const Container = styled.main`
    margin-top: 90px;
    background: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%);
    width: 100vw;
    height: 100vh;

    section {
        max-width: ${sizes.desk};
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;

        aside {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 500px;
            
            div {
                &.topContent {
                    margin-bottom: 30px;

                    h1 {
                        font-family: "Karla";
                        font-style: normal;
                        font-weight: 400;
                        font-size: 72px;
                        line-height: 84px;
                        letter-spacing: 4px;
                        color: ${colors.BlackColors};

                        strong {

                        }
                    }
                }

                &.middleContent {
                    margin-bottom: 30px;

                    p {
                        font-family: ${fonts.main};
                        font-style: normal;
                        font-weight: 400;
                        font-size: 32px;
                        line-height: 37px;
                        color: ${colors.BlackColors};
                    }
                }

                &.bottomContent {
                    margin-top: 30px;

                    a {
                        background: ${colors.BtnColor};
                        box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
                        border-radius: 10px;
                        padding: 28px 35px;

                        span {
                            font-family: ${fonts.main};
                            font-style: normal;
                            font-weight: 700;
                            font-size: 23px;
                            line-height: 27px;
                            text-align: center;
                            color: ${colors.DarkColor};
                        }
                    }
                }
            }
        }

        img {
            margin-right: -25%;
        }
    }
`;