import { LineStatusTypes } from "../types/LineStatusTypes";

import { Container } from "../styles/components/LineStatus";

const LineStatus = ({ value, color, resp }:LineStatusTypes)=>{
    return(
        <Container resp={resp ? resp : false} widthValue={value} colorKey={color}>
            <span></span>
        </Container>
    );
}

export default LineStatus;