import { Container } from "../styles/components/StatesCircleVal";
import { StatesCircleValTypes } from "../types/StatesCircleValTypes";

const StatesCircleVal = ({ name, value }:StatesCircleValTypes)=>{
    return(
        <Container>
            <div className="circle">
                <strong>{value}</strong>
            </div>
            <span>{name}</span>
        </Container>
    );
}

export default StatesCircleVal;