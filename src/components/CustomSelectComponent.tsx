import { Container } from "../styles/components/CustomSelectComponent";
import { CustomSelectComponentTypes } from "../types/CustomSelectComponentTypes";

const CustomSelectComponent = ({ arrOptions, firstElement, onChange }:CustomSelectComponentTypes)=>{
    return(
        <Container
            onChange={(e)=>onChange(e.target.value)}
        >
            <option>{firstElement}</option>
            {
                arrOptions.map((e,k)=>{
                    return(
                        <option key={k} value={e.key}>{e.value}</option>
                    );
                })
            }
        </Container>
    );
}

export default CustomSelectComponent;