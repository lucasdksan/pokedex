import { colors } from "../styles/themes";

export const selectColorsForType = (type: string)=>{
    switch(type){
        case "Ice":
            return colors.IceWater;
        case "Water":
            return colors.IceWater;
        case "Eletric":
            return colors.Eletric;
        case "Ground":
            return colors.Ground;
        case "Posion":
            return colors.PosionPsychicFairyGhost;
        case "Psychic":
            return colors.PosionPsychicFairyGhost;
        case "Fairy":
            return colors.PosionPsychicFairyGhost;
        case "Ghost":
            return colors.PosionPsychicFairyGhost;
        case "Normal":
            return colors.NormalFlying;
        case "Flying":
            return colors.NormalFlying;
        case "Fire":  
            return colors.FireFightingDragon;
        case "Fighting":  
            return colors.FireFightingDragon;
        case "Dragon":
            return colors.FireFightingDragon;
        case "Grass":
            return colors.GrassBug;
        case "Bug":
            return colors.GrassBug;
        case "Stile":
            return colors.StileDarkRock;
        case "Dark":
            return colors.StileDarkRock;
        case "Rock":
            return colors.StileDarkRock;
        default:
            return colors.FullWhite;
        break;
    }
}