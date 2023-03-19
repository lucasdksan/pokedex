import { MdKeyboardArrowUp } from "react-icons/md";
import styled from "styled-components";
import { colors } from "../themes";

export const Container = styled.div`
    position: fixed;
    z-index: 20;
    bottom: 40px;
    right: 40px;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    font-size: 20px;

    @keyframes scrollTop{
        from{
            transform: translateY(2px);
        }
        to{
            transform: translateY(-1px);
        }
    }

    button {
        display: flex;
        flex-direction: row;
        align-items: center;

        width: 40px;
        height: 40px;
        border-radius: 50%;

        background: ${colors.Deuteranopia.d1};
        cursor: pointer;
    }
`;

export const ArrowIcon = styled(MdKeyboardArrowUp)`
    font-size: 40px;
    color: ${colors.WhiteColor};
    animation: scrollTop 0.5s alternate ease infinite;
`;