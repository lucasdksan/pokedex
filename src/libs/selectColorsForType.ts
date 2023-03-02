import { colors } from "../styles/themes";

export const selectColorsForType = (type: string)=>{
    const typeConvert = type.toLowerCase();

    switch(typeConvert){
        case "ice":
            return colors.IceWater;
        case "water":
            return colors.IceWater;
        case "eletric":
            return colors.Eletric;
        case "electric":
            return colors.Eletric;
        case "ground":
            return colors.Ground;
        case "poison":
            return colors.PosionPsychic;
        case "psychic":
            return colors.PosionPsychic;
        case "fairy":
            return colors.Fairy;
        case "ghost":
            return colors.Ghost;
        case "normal":
            return colors.NormalFlying;
        case "flying":
            return colors.NormalFlying;
        case "fire":  
            return colors.FireFighting;
        case "fighting":  
            return colors.FireFighting;
        case "dragon":
            return colors.Dragon;
        case "grass":
            return colors.GrassBug;
        case "bug":
            return colors.GrassBug;
        case "stile":
            return colors.StileDarkRock;
        case "steel":
            return colors.StileDarkRock;
        case "dark":
            return colors.StileDarkRock;
        case "rock":
            return colors.StileDarkRock;
        default:
            return colors.FullWhite;
        break;
    }
}