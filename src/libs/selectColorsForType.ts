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
        case "posion":
            return colors.PosionPsychicFairyGhost;
        case "psychic":
            return colors.PosionPsychicFairyGhost;
        case "fairy":
            return colors.PosionPsychicFairyGhost;
        case "ghost":
            return colors.PosionPsychicFairyGhost;
        case "normal":
            return colors.NormalFlying;
        case "flying":
            return colors.NormalFlying;
        case "fire":  
            return colors.FireFightingDragon;
        case "fighting":  
            return colors.FireFightingDragon;
        case "dragon":
            return colors.FireFightingDragon;
        case "grass":
            return colors.GrassBug;
        case "bug":
            return colors.GrassBug;
        case "stile":
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