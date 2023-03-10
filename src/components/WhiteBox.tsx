import { Container } from "../styles/components/WhiteBox";

import { WhiteBoxTypes } from "../types/WhiteBoxTypes";

const WhiteBox = ({ children, valuePadding, valueWidth, valueGap }:WhiteBoxTypes)=>{
    return(
        <Container
            valuePadding={valuePadding}
            valueWidth={valueWidth}
            valueGap={valueGap}
        >
            {
                children
            }
        </Container>
    );
}

export default WhiteBox;