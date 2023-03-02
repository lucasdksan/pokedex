import { abilities, stat, typing } from "./groupPokeTypes";

type flavor_text_entrie = {
    flavor_text: string;
    language: {
        name: string,
        url: string;
    };
    version: {
        name: string,
        url: string;
    };
}

type gen = {
    genus: string;
    language: {
        name: string,
        url: string;
    };
}

export type pokemonAllSearch = {
    name: string,
    generation: string,
    legendary: boolean,
    id: number,
    abilities: abilities[],
    sprites: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
        other: {
            dream_world: {
                front_default: string | null;
                front_female: string | null;
            };
            home: {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            official_artwork: {
                front_default: string | null;
                front_shiny: string | null;
            }
        }
        version: any;
    },
    stats: stat[],
    types: typing[];
    flavor_text_entries: flavor_text_entrie[];
    genera: gen[];
}