import { api } from "../api";

export const searchPoke = async (valueSearch:string)=>{
    try {
        const data = await api.get(`/pokemon/${valueSearch}`);
        const result = data.data;

        return result;
    } catch(error){
        console.log("Console Log: ", error);
    }
}