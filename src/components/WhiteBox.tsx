import { Container } from "../styles/components/WhiteBox";
import { WhiteBoxTypes } from "../types/WhiteBoxTypes";

const WhiteBox = ({ arrSkills, children }:WhiteBoxTypes)=>{
    return(
        <Container>
            {
                children
            }
            {
                typeof arrSkills == "object" ? arrSkills.map((e,k)=>{
                    return(
                        <span key={k}>{e}</span>
                    );
                }) : <span>{arrSkills}</span>
            }
        </Container>
    );
}

export default WhiteBox;