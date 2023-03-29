import { useContext } from "react";

import { Container } from "../styles/components/ModalDropDown";

import { ModalDropDownTypes } from "../types/ModalDropDownTypes";

import { ModalMobileContext } from "../contexts/ModalMobile";

import iconBtnClose from "../assets/header/closeIcon.svg";

const ModalDropDown = ({ children, height, state }:ModalDropDownTypes)=>{
    const { setState, setStateOthers } = useContext(ModalMobileContext);

    const handleCloseModal = ()=>{
        setState(false);
        setStateOthers(false);
    }

    return(
        <Container 
            height={height}
            state={state}
        >
            <button className="close-btn" onClick={handleCloseModal}>
                <img src={iconBtnClose} alt="Icon Close" />
            </button>
            {
                children
            }
        </Container>
    );
}

export default ModalDropDown;