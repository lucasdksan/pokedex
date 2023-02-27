import React from "react";
import { pokemonViewTypes } from './pokemonViewTypes';

export type OpenDataModalProviderTypes = {
    children: React.ReactNode;
}

export type OpenDataModalContextTypes = {
    pokemon: pokemonViewTypes;
    openModal: boolean;
    SetOpenModal: ()=>void;
    SetPokemon: (poke: pokemonViewTypes)=>void;
}