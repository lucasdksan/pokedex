import { pokemonAllSearch } from "./../types/pokemonAllSearch";

const filterType = (pokeFileterType: string, allPokemon: pokemonAllSearch[])=>{
    const filterTypePoke = allPokemon.filter((e)=>{
        for(let i in e.types){
            if(e.types[i].type.name === pokeFileterType.toLowerCase()){
                return e.types[i].type.name === pokeFileterType;
            }
        }
    });

    return filterTypePoke;
}

const filterRegion = (pokeFileterRegion: string, allPokemon: pokemonAllSearch[])=>{
    const filterRegionPoke = allPokemon.filter((e)=>{
        return e.generation === pokeFileterRegion;
    });

    return filterRegionPoke;
}

const filterRT = (pokeFileterType: string, pokeFileterRegion: string, allPokemon: pokemonAllSearch[])=>{
    const filterTRPoke = allPokemon.filter((e)=>{
        for(let i in e.types){
            if(e.types[i].type.name === pokeFileterType.toLowerCase() && e.generation === pokeFileterRegion){
                return e.types[i].type.name === pokeFileterType && e.generation === pokeFileterRegion;
            }
        }
    });

    return filterTRPoke;
}

export { 
    filterType,
    filterRegion,
    filterRT
};