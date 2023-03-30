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
            return colors.NormalShadow;
        case "flying":
            return colors.FlyingShadow;
        case "fire":  
            return colors.FireShadow;
        case "fighting":  
            return colors.FightingShadow;
        case "dragon":
            return colors.DragonShadow;
        case "grass":
            return colors.GrassShadow;
        case "bug":
            return colors.BugShadow;
        case "stile":
            return colors.StileShadow;
        case "steel":
            return colors.StileShadow;
        case "dark":
            return colors.DarkShadow;
        case "rock":
            return colors.RockShadow;
        default:
            return colors.FullWhite;
        break;
    }
}