import React from "react";
import { pokemonViewTypes } from "./pokemonViewTypes";
import { pokemonAllSearch } from "./pokemonAllSearch";

export type OpenDataModalProviderTypes = {
    children: React.ReactNode;
}

export type OpenDataModalContextTypes = {
    pokemon: pokemonViewTypes;
    openModal: boolean;
    allPokemon: pokemonAllSearch[];
    openModalError: boolean;
    SetOpenModal: ()=>void;
    SetPokemon: (poke: pokemonViewTypes)=>void;
    SetOpenModalError: ()=>void;
    SetAllPokemons: (all:pokemonAllSearch[])=>void;
}