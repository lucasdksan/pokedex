export type pokemonAllViewTypes = {
    id: number;
    abilities: string[],
    name: string;
    sprite: string;
    types: string[] | string;
    stats: {
        name: string;
        value: number;
    }[];
    generation: string;
    legendary: boolean;
    flavor_text_entries: string;
    genera: string;
}