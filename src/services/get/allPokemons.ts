import { api } from "../api";

export const getAllPokemons = async ()=>{
    const data = await api.get("/pokedex/1/");
    const resultData = data.data;

    return resultData;
}