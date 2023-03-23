import styled from "styled-components";
import { colors, fonts, sizes } from "../themes";

export const Container = styled.main`
    margin-top: 90px;
    background: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%);
    width: 100vw;
    height: calc(100vh - 90px);

    @media(max-width: 950px){
        height: calc(100vh + 90px);
    }

    section {
        max-width: ${sizes.desk};
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        height: 100%;

        @media(max-width: 1140px){
            flex-direction: column-reverse;
        }

        aside {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 500px;

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
            
            div {
                &.topContent {
                    margin-bottom: 30px;

                    h1 {
                        font-family: ${fonts.main};
                        font-style: normal;
                        font-weight: 400;
                        font-size: 72px;
                        line-height: 84px;
                        letter-spacing: 4px;
                        color: ${colors.BlackColors};

                        @media(max-width: 1140px){
                            text-align: center;
                        }

                        @media(max-width: 770px){
                            font-size: 56px;
                        }

                        @media(max-width: 620px){
                            font-size: 42px;
                            line-height: 49px;
                        }
                    }
                }

                &.middleContent {
                    margin-bottom: 30px;

                    @media(max-width: 1140px){
                        max-width: ${sizes.deskEnd};
                    }

                    @media(max-width: 950px){
                        max-width: ${sizes.tablet};
                    }

                    @media(max-width: 440px){
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                    }

                    p {
                        font-family: ${fonts.main};
                        font-style: normal;
                        font-weight: 400;
                        font-size: 32px;
                        line-height: 37px;
                        color: ${colors.BlackColors};

                        @media(max-width: 1140px){
                            text-align: center;
                        }

                        @media(max-width: 770px){
                            font-size: 26px;
                        }

                        @media(max-width: 620px){
                            line-height: 28px;
                        }
                    }
                }

                &.bottomContent {
                    margin-top: 30px;

                    @media(max-width: 1140px){
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    a {
                        background: ${colors.BtnColor};
                        box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
                        border-radius: 10px;
                        padding: 28px 35px;

                        @media(max-width: 770px){
                            width: 100%;
                            max-width: 320px;
                            text-align: center;
                        }

                        @media(max-width: 440px){
                            max-width: 300x;
                        }

                        span {
                            font-family: ${fonts.main};
                            font-style: normal;
                            font-weight: bold;
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
            height: 600px;
            width: auto;

            @media(max-width: 770px){
                height: 500px;
            }

            @media(max-width: 620px){
                height: 360px;
            }

            @media(max-width: 440px){
                height: 275px;
            }
        }
    }
`;