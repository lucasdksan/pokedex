import styled from "styled-components";
import { colors, fonts, sizes } from "../themes";

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${colors.ThirdColor};
    box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
    height: 90px;
    padding: 15px 0px;
    position: fixed;
    top: 0px;
    z-index: 9999;
    width: 100vw;
`;

export const ContentBody = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    max-width: ${sizes.desk};
`;

export const LeftArea = styled.div`
    width: 158px;
    height: auto;
`;

export const RightArea = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;  

export const Nav = styled.nav`
    display: block;
`;

export const ContentOptions = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Elements = styled.li`
    padding: 0px 30px;

    &:first-child {
        margin-left: 0px;
    }

    &:last-child {
        margin-right: 0px;
    }

    a {
        font-family: ${fonts.main};
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 29px;
        color: ${colors.BlackColors};
        padding: 15px 0px;
        border-bottom: 3px solid ${colors.ThirdColor};
        border-top: 3px solid ${colors.ThirdColor};

        &:hover {
            cursor: pointer;
            border-bottom: 3px solid ${colors.DarkColor};
        }
    }
`;