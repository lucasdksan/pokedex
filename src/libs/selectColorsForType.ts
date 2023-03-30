import { colors } from "../styles/themes";

export const selectColorsForType = (type: string)=>{
    const typeConvert = type.toLowerCase();

    switch(typeConvert){
        case "ice":
            return colors.Ice;
        case "water":
            return colors.Water;
        case "eletric":
            return colors.Eletric;
        case "electric":
            return colors.Eletric;
        case "ground":
            return colors.Ground;
        case "poison":
            return colors.Posion;
        case "psychic":
            return colors.Psychic;
        case "fairy":
            return colors.Fairy;
        case "ghost":
            return colors.Ghost;
        case "normal":
            return colors.Normal;
        case "flying":
            return colors.Flying;
        case "fire":  
            return colors.Fire;
        case "fighting":  
            return colors.Fighting;
        case "dragon":
            return colors.Dragon;
        case "grass":
            return colors.Grass;
        case "bug":
            return colors.Bug;
        case "stile":
            return colors.Stile;
        case "steel":
            return colors.Stile;
        case "dark":
            return colors.Dark;
        case "rock":
            return colors.Rock;
        default:
            return colors.FullWhite;
        break;
    }
}