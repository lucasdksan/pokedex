import { pokemonAllSearch } from "../types/pokemonAllSearch";

export default {
    render(unity: pokemonAllSearch){
        const abilities = [];

        abilities.push(unity.abilities.map((e)=>{
            return e.ability.name;
        }));

        function selectValueType(){
            const types = [];
            
            let type;

            if(unity.types.length == 1){
                type = unity.types[0].type.name;
                return type;
            } else {
                types.push(unity.types.map((e)=>{
                    return(
                        e.type.name
                    );
                }));

                return types[0];
            }
        }

        function selectValueStats(){
            const stats = [];

            stats.push(unity.stats.map((e)=>{
                return {
                    name: e.stat.name,
                    value: e.base_stat
                }
            }));

            return stats[0];
        }

        function selectValueSprite(){
            if(unity.sprites.other.home.front_default != null){
                return unity.sprites.other.home.front_default;
            } else if( Object.values(unity.sprites.other)[2].front_default != null ) {
                return Object.values(unity.sprites.other)[2].front_default as string;
            } else {
                return "";
            }
        }

        function selectValueText(){
            const arr:string[] = [];
            let text;

            for(let len = 0; len > unity.flavor_text_entries.length; len++){
                text = unity.flavor_text_entries[len].flavor_text;
            }

            unity.flavor_text_entries.forEach((e)=>{
                if(e.language.name === "en"){
                    arr.push(e.flavor_text)
                }
            });

            return arr[0];
        }

        function selectValueGen(){
            const arrGen:string[] = [];

            unity.genera.forEach((e)=>{
                if(e.language.name === "en"){
                    arrGen.push(e.genus)
                }
            });

            return arrGen[0];
        }

        return {
            id: unity.id,
            abilities: abilities[0],
            name: unity.name,
            sprite: selectValueSprite(),
            types: selectValueType(),
            stats: selectValueStats(),
            generation: unity.generation,
            legendary: unity.legendary,
            flavor_text_entries: selectValueText(),
            genera: selectValueGen(),
        }
    },

    renderMany(value: pokemonAllSearch[]){
        return value.map(e=> {
            console.log("render: ", this.render(e))
            this.render(e);
        });
    }
}