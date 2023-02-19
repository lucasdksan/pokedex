import { CustomArrowProps } from "react-slick";

import { Container } from "../styles/components/CustomArrows";

import left from "../assets/legendary/arrowLeft.svg";
import right from "../assets/legendary/arrowRight.svg";

const CustomArrowLeft = ({ className, style, onClick }:CustomArrowProps)=>{
    return(
        <Container
            className={className}
            style={{ ...style}}
            onClick={onClick}
        >
            <img src={left} alt="Arrow Icon" />
        </Container>
    );
}

const CustomArrowRight = ({ className, style, onClick }:CustomArrowProps)=>{
    return(
        <Container
            className={className}
            style={{ ...style}}
            onClick={onClick}
        >
            <img src={right} alt="Arrow Icon" />
        </Container>
    );
}

export { CustomArrowLeft, CustomArrowRight };