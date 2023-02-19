import styled from "styled-components";

export const Container = styled.span`
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: auto;

    &::before,
    &::after {
        display: none;
    }

    &.slick-prev {
        left: -40px;
    }

    &.slick-next{
        right: -45px;
    }
`;