import { useState } from "react";

import CardPokeModal from "./CardPokeModal";
import { Container } from "../styles/components/ModalOpenCard";

import closeIcon from "../assets/search/closeIcon.svg";

const ModalOpenCard = ()=>{
    const [ open, setOpen ] = useState(true);

    return(
        <Container
            open={open}
        >
            <span 
                className="closeIcon"
                onClick={()=>setOpen(false)}
            >
                <img src={closeIcon} alt="Close icon"/>
            </span>
            <CardPokeModal />
        </Container>
    );
}

export default ModalOpenCard;