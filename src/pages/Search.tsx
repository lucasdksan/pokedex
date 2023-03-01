import { useContext, useEffect, useState } from "react";

import CustomSelectComponent from "../components/CustomSelectComponent";
import Header from "../components/Header";
import { Container } from "../styles/pages/Search";
import CardSearchPoke from "../components/CardSearchPoke";
import ModalOpenCard from "../components/ModalOpenCard";

import { searchPoke } from "../services/get/searchPoke";
import { getAllPokemons } from "../services/get/allPokemons";

import {
    CustomSelectComponentDataRegion, 
    CustomSelectComponentDataType 
} from "../data/CustomSelectComponentData";

import { pokemonEntriesTypes } from "../types/pokemonEntriesTypes";
import { pokemonTypes } from "../types/pokemonTypes";

import pokeView from "../view/pokemonView";
import { OpenDataModalContext } from "../contexts/OpenDataModal";

const Search = ()=>{
    const [ pokeSearch, setPokeSearch ] = useState("");
    const [ searchResult, setSearchResult ] = useState<pokemonTypes>();
    const [ pokeFileterType, setPokeFileterType ] = useState("");
    const [ pokeFileterRegion, setPokeFileterRegion ] = useState("");
    const [ arrDataAllPokemons, setArrDataAllPokemons ] = useState<pokemonEntriesTypes[]>([]);

    const { SetOpenModal, SetPokemon, SetOpenModalError } = useContext(OpenDataModalContext);

    const handlePokeSearch = async ()=>{
        let { result, stats } = await searchPoke(pokeSearch);

        if(stats){
            setSearchResult(result);
        } else {
            SetOpenModalError();
        }
    }

    const handlePokeFilter = ()=>{

    }

    const handleGetAllPokemons = async ()=>{
        const allPokemons = await getAllPokemons();
        
        setArrDataAllPokemons(allPokemons.pokemon_entries);
    }
    
    const handlePokeFilterChangeType = (key:string)=>{
        setPokeFileterType(key);
    }

    const handlePokeFilterChangeRegion = (key:string)=>{
        setPokeFileterRegion(key);
    }

    useEffect(()=>{
        let convert;

        if(searchResult != undefined) {
            convert = pokeView.render(searchResult);
            SetPokemon(convert);
            SetOpenModal();
        }
    },[searchResult])

    useEffect(()=>{
        handleGetAllPokemons();
    },[]);

    return(
        <>
            <Header />
            <Container>
                <section>
                    <h1>+1000 <strong>Pokemons</strong> for you to choose your favorite</h1>
                    <div className="containerSearch">
                        <div className="contentInput">
                            <input 
                                type="text" 
                                placeholder="Search Pokémon..."
                                value={pokeSearch}
                                onChange={(e)=>setPokeSearch(e.target.value.toLowerCase())}
                            />
                            <button onClick={handlePokeSearch}>Search</button>
                        </div>
                        <div className="lineOptions">
                            <CustomSelectComponent 
                                arrOptions={CustomSelectComponentDataType}
                                firstElement="Type"
                                onChange={handlePokeFilterChangeType}
                            />
                            <CustomSelectComponent 
                                arrOptions={CustomSelectComponentDataRegion}
                                firstElement="Region"
                                onChange={handlePokeFilterChangeRegion}
                            />
                            <button onClick={handlePokeFilter}>Filter</button>
                        </div>
                    </div>
                    <div className="contentList">
                        <CardSearchPoke 
                            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
                            name="Ditto"
                            typing={["Normal", "Grass"]}
                            valueAttk={150}
                            valueDef={48}
                        />
                        <CardSearchPoke 
                            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
                            name="Ditto"
                            typing="Normal"
                            valueAttk={48}
                            valueDef={48}
                        />
                        <CardSearchPoke 
                            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
                            name="Ditto"
                            typing={["Fire", "Grass"]}
                            valueAttk={150}
                            valueDef={48}
                        />
                        <CardSearchPoke 
                            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
                            name="Ditto"
                            typing={["Ice", "Grass"]}
                            valueAttk={150}
                            valueDef={48}
                        />
                        <CardSearchPoke 
                            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
                            name="Ditto"
                            typing={["Ghost", "Grass"]}
                            valueAttk={150}
                            valueDef={48}
                        />
                        <CardSearchPoke 
                            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
                            name="Ditto"
                            typing={["Rock", "Grass"]}
                            valueAttk={150}
                            valueDef={48}
                        />
                        <CardSearchPoke 
                            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
                            name="Ditto"
                            typing={["Fairy", "Grass"]}
                            valueAttk={150}
                            valueDef={48}
                        />
                        <CardSearchPoke 
                            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
                            name="Ditto"
                            typing={["Water", "Grass"]}
                            valueAttk={150}
                            valueDef={48}
                        />
                        <CardSearchPoke 
                            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
                            name="Ditto"
                            typing={["Water", "Grass"]}
                            valueAttk={150}
                            valueDef={48}
                        />
                    </div>
                </section>
            </Container>
            <ModalOpenCard />
        </>
    );
}

export default Search;