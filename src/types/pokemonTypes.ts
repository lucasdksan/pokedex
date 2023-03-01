import { abilities, defaultType, details, game, group_detail, stat, typing } from "./groupPokeTypes";

export type pokemonTypes = {
    abilities: abilities[];
    base_experience: number;
    forms: defaultType[];
    game_indices: game[];
    height: number;
    held_items: {
        item: defaultType;
        version_details: details[];
    }[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: {
        move: defaultType;
        version_group_details: group_detail[];
    }[];
    name: string;
    order: number;
    past_types: any[];
    species: defaultType;
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
    };
    stats: stat[];
    types: typing[];
    generation: string;
}