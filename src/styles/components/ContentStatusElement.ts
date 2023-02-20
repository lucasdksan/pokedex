import styled from "styled-components";
import { colors, fonts } from "../themes";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;

    span {
        font-family: ${fonts.main};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${colors.WhiteThird};
    }

    strong {
        font-family: ${fonts.main};
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${colors.WhiteThird};
    }
`;