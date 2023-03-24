import { createContext, useState } from "react";

import { ModalMobileContextTypes, ModalMobileProviderTypes } from "../types/ModalMobileProviderTypes";

export const ModalMobileContext = createContext({} as ModalMobileContextTypes);

export const ModalMobileProvider = ({ children }:ModalMobileProviderTypes)=>{
    const initialState = false;
    const [ state, setState ] = useState(initialState);
    const [ stateOthers, setStateOthers ] = useState(initialState);

    return(
        <ModalMobileContext.Provider
            value={{
                setStateOthers,
                setState,
                state,
                stateOthers
            }}
        >
            {
                children
            }
        </ModalMobileContext.Provider>
    );
}