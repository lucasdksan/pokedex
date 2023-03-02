import { pokemonTypes } from './../types/pokemonTypes';

export default {
    render(value: pokemonTypes){
        const abilities = [];

        abilities.push(value.abilities.map((e)=>{
            return e.ability.name;
        }));

        function selectValueType(){
            const types = [];
            
            let type;

            if(value.types.length == 1){
                type = value.types[0].type.name;
                return type;
            } else {
                types.push(value.types.map((e)=>{
                    return(
                        e.type.name
                    );
                }));

                return types[0];
            }
        }

        function selectValueStats(){
            const stats = [];

            stats.push(value.stats.map((e)=>{
                return {
                    name: e.stat.name,
                    value: e.base_stat
                }
            }));

            return stats[0];
        }

        function selectValueSprite(){
            if(value.sprites.other.home.front_default != null){
                return value.sprites.other.home.front_default;
            } else {
                return Object.values(value.sprites.other)[2].front_default;
            }
        }

        return {
            id: value.id,
            abilities: abilities[0],
            name: value.name,
            sprite: selectValueSprite(),
            types: selectValueType(),
            stats: selectValueStats(),
            generation: value.generation
        }
    },

    renderMany(value: pokemonTypes[]){
        return value.map(e=>this.render(e));
    }
}