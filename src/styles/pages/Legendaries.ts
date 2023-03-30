import styled from "styled-components";
import { colors, fonts, sizes } from "../themes";

export const Container = styled.main`
    margin-top: 90px;
    width: 100vw;
    padding: 0px 10px;
    background-color: ${colors.DarkColor};

    section {
        max-width: ${sizes.desk};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 0 auto;

        @media(max-width: 1200px){
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

        @media(max-width: 500px){
            max-width: ${sizes.mobileEnd};
        }

        .containerTitle {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            padding: 20px 0px;
            border-bottom: 1px solid ${colors.WhiteColor};
            margin-bottom: 30px;

            h2 {
                font-family: ${fonts.main};
                font-style: normal;
                font-weight: 400;
                font-size: 72px;
                line-height: 84px;
                letter-spacing: 4px;
                color: ${colors.WhiteColor};

                @media(max-width: 500px) {
                    font-size: 45px;
                    line-height: 50px;
                }
            }
        }
    }
`;