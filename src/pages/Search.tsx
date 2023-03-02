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
import allPokeView from "../view/pokemonAllView";

import { OpenDataModalContext } from "../contexts/OpenDataModal";

import { searchDataPoke } from "../services/get/searchDataPoke";

const Search = ()=>{
    const [ pokeSearch, setPokeSearch ] = useState("");
    const [ searchResult, setSearchResult ] = useState<pokemonTypes>();
    const [ pokeFileterType, setPokeFileterType ] = useState("");
    const [ pokeFileterRegion, setPokeFileterRegion ] = useState("");
    const [ arrDataAllPokemons, setArrDataAllPokemons ] = useState<pokemonEntriesTypes[]>([]);

    const { SetOpenModal, SetPokemon, SetOpenModalError, SetAllPokemons, allPokemon } = useContext(OpenDataModalContext);

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

    const handlerPokeAll = async ()=>{
        const arrAllObjs = [];

        if(arrDataAllPokemons.length > 0){
            for(let i in arrDataAllPokemons){
                let obj = await searchDataPoke(arrDataAllPokemons[i]);
                arrAllObjs.push(obj);
            }
        }

        SetAllPokemons(arrAllObjs);
    }

    useEffect(()=>{
        let convert;

        if(searchResult != undefined) {
            convert = pokeView.render(searchResult);
            SetPokemon(convert);
            SetOpenModal();
        }

        console.log("Oi: ", allPokeView.render(allPokemon[0]));

    },[searchResult])

    useEffect(()=>{
        handleGetAllPokemons();
    },[]);

    useEffect(()=>{
        handlerPokeAll();
    },[arrDataAllPokemons]);

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
                        {
                            allPokemon.length > 0 &&
                            allPokemon.map((e, k)=>{
                                return(
                                    <CardSearchPoke 
                                        key={k}
                                        image={e.sprites.other.home.front_default as string}
                                        name={e.name}
                                        typing={e.types.length > 0 ? e.types[0].type.name : ""}
                                        valueAttk={e.stats[0].base_stat}
                                        valueDef={e.stats[2].base_stat}
                                    />
                                );
                            })
                        }
                    </div>
                </section>
            </Container>
            <ModalOpenCard />
        </>
    );
}

export default Search;