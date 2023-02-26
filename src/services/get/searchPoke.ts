import { api } from "../api";

export const searchPoke = async (valueSearch:string)=>{
    const data = await api.get(`/pokemon/${valueSearch}`);
    const result = data.data;

    return result;
}