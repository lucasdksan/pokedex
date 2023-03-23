import { Container } from "../styles/components/ModalDropDown";

import { ModalDropDownTypes } from "../types/ModalDropDownTypes";

const ModalDropDown = ({ children }:ModalDropDownTypes)=>{
    return(
        <Container>
            {
                children
            }
        </Container>
    );
}

export default ModalDropDown;