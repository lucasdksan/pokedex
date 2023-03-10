import { useContext } from "react";

import { OpenDataModalContext } from "../contexts/OpenDataModal";

import CardPokeModal from "./CardPokeModal";
import CardPokeModalError from "./CardPokeModalError";

import { Container } from "../styles/components/ModalOpenCard";

import closeIcon from "../assets/search/closeIcon.svg";

const ModalOpenCard = ()=>{
    const { openModal, SetOpenModal, openModalError, SetOpenModalError } = useContext(OpenDataModalContext);

    function handleCloseModal(){
        if(openModal){
            SetOpenModal();
        }
        if(openModalError){
            SetOpenModalError();
        }
    }

    return(
        <Container
            open={openModal || openModalError}
        >
            <span 
                className="closeIcon"
                onClick={handleCloseModal}
            >
                <img src={closeIcon} alt="Close icon"/>
            </span>
            { openModal && <CardPokeModal /> }
            { openModalError && <CardPokeModalError /> }
        </Container>
    );
}

export default ModalOpenCard;