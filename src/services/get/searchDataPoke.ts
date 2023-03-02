import { pokemonEntriesTypes } from "../../types/pokemonEntriesTypes";

export const searchDataPoke = async (pokeValue: pokemonEntriesTypes)=>{
    const data = await( await fetch(pokeValue.pokemon_species.url) ).json();
    const moreData = await( await fetch(data.varieties[0].pokemon.url) ).json();

    let pokeObj = {
        name: data.name,
        generation: data.generation.name,
        legendary: data.is_legendary,
        id: data.id,
        abilities: moreData.abilities,
        sprites: moreData.sprites,
        stats: moreData.stats,
        types: moreData.types,
        flavor_text_entries: data.flavor_text_entries,
        genera: data.genera
    };

    return pokeObj;
}