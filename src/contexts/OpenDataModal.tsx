import { createContext, useState } from "react";
import { OpenDataModalProviderTypes, OpenDataModalContextTypes  } from "../types/OpenDataModalProviderTypes";
import { pokemonViewTypes } from "../types/pokemonViewTypes";

export const OpenDataModalContext = createContext({} as OpenDataModalContextTypes);

export const OpenDataModalProvider = ({ children }:OpenDataModalProviderTypes)=>{
    const initialPokemon = {
        id: 4,
        abilities: ["blaze", "solar-power"],
        name: "charmander",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
        types: "fire",
        stats: [
            {
                name: "hp",
                value: 39
            },
            {
                name: "attack",
                value: 52
            },
            {
                name: "defense",
                value: 43
            },
            {
                name: "special-attack",
                value: 60
            },
            {
                name: "special-defense",
                value: 50
            },
            {
                name: "speed",
                value: 65
            }
        ],
        generation: "generation-i"
    }

    const [ pokemon, setPokemon ] = useState<pokemonViewTypes>(initialPokemon);
    const [ openModal, setOpenModal ] = useState(false);
    const [ openModalError, setOpenModalError ] = useState(false);

    function SetPokemon(poke: pokemonViewTypes){
        setPokemon(poke);
    }

    function SetOpenModal(){
        setOpenModal(!openModal);
    }

    function SetOpenModalError(){
        setOpenModalError(!openModalError);
    }

    return(
        <OpenDataModalContext.Provider
            value={{
                pokemon,
                SetPokemon,
                openModal,
                SetOpenModal,
                openModalError,
                SetOpenModalError
            }}
        >
            {
                children
            }
        </OpenDataModalContext.Provider>
    );
}