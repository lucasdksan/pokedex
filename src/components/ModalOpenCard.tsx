import { useContext } from "react";

import { OpenDataModalContext } from "../contexts/OpenDataModal";

import CardPokeModal from "./CardPokeModal";

import { Container } from "../styles/components/ModalOpenCard";

import closeIcon from "../assets/search/closeIcon.svg";

const ModalOpenCard = ()=>{
    const { openModal, SetOpenModal } = useContext(OpenDataModalContext);

    return(
        <Container
            open={openModal}
        >
            <span 
                className="closeIcon"
                onClick={SetOpenModal}
            >
                <img src={closeIcon} alt="Close icon"/>
            </span>
            <CardPokeModal />
        </Container>
    );
}

export default ModalOpenCard;