import { useContext } from "react";

import { Container } from "../styles/components/ModalDropDown";

import { ModalDropDownTypes } from "../types/ModalDropDownTypes";

import { ModalMobileContext } from "../contexts/ModalMobile";

import iconBtnClose from "../assets/header/closeIcon.svg";

const ModalDropDown = ({ children, height }:ModalDropDownTypes)=>{
    const { setState, state } = useContext(ModalMobileContext);

    const handleCloseModal = ()=>{
        setState(false);
    }

    return(
        <Container 
            height={height}
            state={state}
        >
            <button onClick={handleCloseModal}>
                <img src={iconBtnClose} alt="Icon Close" />
            </button>
            {
                children
            }
        </Container>
    );
}

export default ModalDropDown;