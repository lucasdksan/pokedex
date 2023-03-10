import { colors } from "../styles/themes";

export const selectColorsForTypeShadow = (type: string)=>{
    const typeConvert = type.toLowerCase();

    switch(typeConvert){
        case "ice":
            return colors.IceWaterShadow;
        case "water":
            return colors.IceWaterShadow;
        case "eletric":
            return colors.EletricShadow;
        case "electric":
            return colors.EletricShadow;
        case "ground":
            return colors.GroundShadow;
        case "poison":
            return colors.PosionPsychicShadow;
        case "psychic":
            return colors.PosionPsychicShadow;
        case "fairy":
            return colors.FairyShadow;
        case "ghost":
            return colors.GhostShadow;
        case "normal":
            return colors.NormalFlyingShadow;
        case "flying":
            return colors.NormalFlyingShadow;
        case "fire":  
            return colors.FireFightingShadow;
        case "fighting":  
            return colors.FireFightingShadow;
        case "dragon":
            return colors.DragonShadow;
        case "grass":
            return colors.GrassBugShadow;
        case "bug":
            return colors.GrassBugShadow;
        case "stile":
            return colors.StileRockShadow;
        case "steel":
            return colors.StileRockShadow;
        case "dark":
            return colors.DarkShadow;
        case "rock":
            return colors.StileRockShadow;
        default:
            return colors.FullWhite;
        break;
    }
}