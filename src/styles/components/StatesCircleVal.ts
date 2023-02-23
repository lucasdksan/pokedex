import styled from "styled-components";
import { colors, fonts } from "../themes";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    .circle {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 3px solid ${colors.DarkColor};

        display: flex;
        align-items: center;
        justify-content: center;

        strong {
            font-family: ${fonts.main};
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            text-align: center;
            color: #212121;
        }
    }

    span {
        font-family: ${fonts.main};
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: ${colors.GrayColorText};
    }
`;