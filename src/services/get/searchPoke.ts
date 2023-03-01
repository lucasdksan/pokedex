import { api } from "../api";

export const searchPoke = async (valueSearch:string)=>{
    try {
        const data = await api.get(`/pokemon/${valueSearch}`);
        const generation = await (await fetch(data.data.species.url)).json();
        const results = data.data;

        let result = {...results, generation: generation.generation.name }

        return { result, stats: true };
    } catch(error){
        return { stats: false, result: null };
    }
}