import { Container } from "../styles/components/ModalContainerFilter";

import { ModalContainerFilterTypes } from "../types/ModalContainerFilterTypes";

const ModalContainerFilter = ({ arr, label }:ModalContainerFilterTypes)=> {
    return(
        <Container>
            <span>{label}</span>
            <hr />
            <div className="containerInputs">
                {
                    arr.map((e,k)=>{
                        return(
                            <div className="unity" key={k}>
                                <input id={`${e.key}-key`} value={e.key} type="checkbox" />
                                <label htmlFor={`${e.key}-key`}>{e.value}</label>
                            </div>
                        );
                    })
                }
            </div>
        </Container>
    );
}

export default ModalContainerFilter;