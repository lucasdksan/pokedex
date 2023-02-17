import { LineStatusTypes } from "../types/LineStatusTypes";

import { Container } from "../styles/components/LineStatus";

const LineStatus = ({ value }:LineStatusTypes)=>{
    return(
        <Container widthValue={value}>
            <span></span>
        </Container>
    );
}

export default LineStatus;