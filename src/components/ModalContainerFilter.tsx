import { useEffect } from "react";

import { Container } from "../styles/components/ModalContainerFilter";

import { ModalContainerFilterTypes } from "../types/ModalContainerFilterTypes";

const ModalContainerFilter = ({ arr, label, arrSelected, elementCheck, setArrSelected, setElementCheck }:ModalContainerFilterTypes)=> {
    const handleChangeInput = (value: string)=>{
        const arrTEMP = [...arrSelected];

        if(!arrSelected.includes(value)) {
            arrTEMP.push(value);

            setArrSelected(arrTEMP);
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            setElementCheck(false);
        }, 500);
    },[elementCheck]);

    return(
        <Container>
            <span>{label}</span>
            <hr />
            <div className="containerInputs">
                {
                    arr.map((e,k)=>{
                        return(
                            <div className="unity" key={k}>
                                <input 
                                    onChange={(e)=>{handleChangeInput(e.target.value)}} 
                                    id={`${e.key}-key`} 
                                    value={e.key} 
                                    type="checkbox" 
                                    checked={elementCheck}
                                />
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