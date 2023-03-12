export type CardSearchPokeTypes = {
    name: string;
    valueAttk: number;
    valueDef: number;
    typing: string[] | string;
    image: string;
    onClick: (e?:number)=>void;
}

export type CardSearchPokeTypesCss = {
    colorCss: string;
}