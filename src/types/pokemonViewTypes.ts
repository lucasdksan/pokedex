export type pokemonViewTypes = {
    id: number;
    abilities: string[];
    name: string;
    sprite: string | null;
    types: string | string[];
    stats: {
        name: string;
        value: number;
    }[];
    generation: string;
}