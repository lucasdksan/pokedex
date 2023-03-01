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
            return colors.PosionPsychicFairyGhostShadow;
        case "psychic":
            return colors.PosionPsychicFairyGhostShadow;
        case "fairy":
            return colors.PosionPsychicFairyGhostShadow;
        case "ghost":
            return colors.PosionPsychicFairyGhostShadow;
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
            return colors.StileDarkRockShadow;
        case "steel":
            return colors.StileDarkRockShadow;
        case "dark":
            return colors.StileDarkRockShadow;
        case "rock":
            return colors.StileDarkRockShadow;
        default:
            return colors.FullWhite;
        break;
    }
}