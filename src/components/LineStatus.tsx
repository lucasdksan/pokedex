import { LineStatusTypes } from "../types/LineStatusTypes";

import { Container } from "../styles/components/LineStatus";

const LineStatus = ({ value, color }:LineStatusTypes)=>{
    return(
        <Container widthValue={value} colorKey={color}>
            <span></span>
        </Container>
    );
}

export default LineStatus;