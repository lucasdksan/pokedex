import styled from "styled-components";
import { colors, fonts } from "../themes/index";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    flex: 1;
    padding: 20px 40px;

    span {
        font-family: ${fonts.rubik};
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 27px;
        color: ${colors.BlackColors};
    }

    hr {
        margin: 10px 0px;
        background-color: ${colors.FullWhite};
    }

    .containerInputs {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px 20px;

        .unity {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 8px;

            input {

            }

            label {
                font-family: ${fonts.sub};
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: ${colors.BlackColors};
            }
        }
    }
`;