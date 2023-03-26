import { Container } from "../styles/components/WhiteBox";

import { WhiteBoxTypes } from "../types/WhiteBoxTypes";

const WhiteBox = ({ children, valuePadding, valueWidth, valueGap, activeClass }:WhiteBoxTypes)=>{
    return(
        <Container
            valuePadding={valuePadding}
            valueWidth={valueWidth}
            valueGap={valueGap}
            className={activeClass ? "modif" : ""}
        >
            {
                children
            }
        </Container>
    );
}

export default WhiteBox;