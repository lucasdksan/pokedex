export type pokemonViewTypes = {
    id: number;
    abilities: string[];
    name: string;
    sprite: string;
    types: string | string[];
    stats: {
        name: string;
        value: number;
    }[];
    generation: string;
}