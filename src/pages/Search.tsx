import { useContext, useEffect, useState } from "react";

import { Container } from "../styles/pages/Search";

import CustomSelectComponent from "../components/CustomSelectComponent";
import Header from "../components/Header";
import CardSearchPoke from "../components/CardSearchPoke";
import ModalOpenCard from "../components/ModalOpenCard";
import Loading from "../components/Loading";

import { searchPoke } from "../services/get/searchPoke";
import { getAllPokemons } from "../services/get/allPokemons";
import { searchDataPoke } from "../services/get/searchDataPoke";

import {
    CustomSelectComponentDataRegion, 
    CustomSelectComponentDataType 
} from "../data/CustomSelectComponentData";

import { pokemonEntriesTypes } from "../types/pokemonEntriesTypes";
import { pokemonTypes } from "../types/pokemonTypes";
import { pokemonAllSearch } from "../types/pokemonAllSearch";

import pokeView from "../view/pokemonView";
import pokemonAllView from "../view/pokemonAllView";

import { OpenDataModalContext } from "../contexts/OpenDataModal";

import { filterRT, filterRegion, filterType } from "../libs/filterListPokemon";

const Search = ()=>{
    const [ pokeSearch, setPokeSearch ] = useState("");
    const [ pokeFileterType, setPokeFileterType ] = useState("");
    const [ pokeFileterRegion, setPokeFileterRegion ] = useState("");
    const [ openFilter, setOpenFilter ] = useState(false);
    const [ searchResult, setSearchResult ] = useState<pokemonTypes>();
    const [ arrDataAllPokemons, setArrDataAllPokemons ] = useState<pokemonEntriesTypes[]>([]);
    const [ filtedPokemon, setFiltedPokemon ] = useState<pokemonAllSearch[]>([]);

    const { SetOpenModal, SetPokemon, SetOpenModalError, SetAllPokemons, allPokemon } = useContext(OpenDataModalContext);

    const handlePokeSearch = async ()=>{
        let { result, stats } = await searchPoke(pokeSearch);

        if(stats){
            setSearchResult(result);
        } else {
            SetOpenModalError();
        }
    }

    const handleClearFilter = ()=>{
        setOpenFilter(false);
        setFiltedPokemon([]);
    }

    const handlePokeFilter = ()=>{
        if(pokeFileterRegion !== "" || pokeFileterType !== ""){
            if(pokeFileterRegion !== "" && pokeFileterType === "") {
                let arrRegion = filterRegion(pokeFileterRegion, allPokemon);

                setFiltedPokemon(arrRegion);
            }
            else if(pokeFileterRegion === "" && pokeFileterType !== "") {
                let arrType = filterType(pokeFileterType, allPokemon);

                setFiltedPokemon(arrType);
            }
            else {
                let arrRT = filterRT(pokeFileterType, pokeFileterRegion, allPokemon);

                setFiltedPokemon(arrRT);
            }

            setOpenFilter(true);
        } else {
            alert("Selecione um dos elementos de filtragem!!");
        }
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

    const handlerSetPokeId = (key: number)=>{
        const filterPokemon = allPokemon.filter((e)=>{
            return e.id === key;
        });
        const openPokemon = filterPokemon[0];
        const convert = pokemonAllView.convert(openPokemon);

        SetPokemon(convert);
        SetOpenModal();
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

    },[searchResult])

    useEffect(()=>{
        handleGetAllPokemons();
    },[]);

    useEffect(()=>{
        if(allPokemon.length === 0){
            handlerPokeAll();
        }
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
                                placeholder="Search Pok??mon..."
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
                            <button onClick={handleClearFilter} className="btn-clear">Clear</button>
                        </div>
                    </div>
                    <div className="contentList" style={{ display: allPokemon.length > 0 ? "grid" : "flex" }}>
                        {
                            allPokemon.length == 0 &&
                            <Loading
                                h={400}
                                w={400}
                            />
                        }
                        {
                            (allPokemon.length > 0 && !openFilter) &&
                            allPokemon.map((e, k)=>{
                                let arrTypes: string[] = [];
                                let url = e.sprites.other.home.front_default !== null ? e.sprites.other.home.front_default as string : Object.values(e.sprites.other)[2].front_default as string;

                                e.types.forEach((es)=>{
                                    arrTypes.push(es.type.name);
                                });

                                return(
                                    <CardSearchPoke 
                                        key={k}
                                        image={url}
                                        name={e.name}
                                        typing={arrTypes}
                                        valueAttk={e.stats[0].base_stat}
                                        valueDef={e.stats[2].base_stat}
                                        onClick={()=>handlerSetPokeId(e.id)}
                                    />
                                );
                            })
                        }
                        {
                            (filtedPokemon.length > 0 && openFilter) &&
                            filtedPokemon.map((e,k)=>{
                                let arrTypes: string[] = [];
                                let url = e.sprites.other.home.front_default !== null ? e.sprites.other.home.front_default as string : Object.values(e.sprites.other)[2].front_default as string;

                                e.types.forEach((es)=>{
                                    arrTypes.push(es.type.name);
                                });

                                return(
                                    <CardSearchPoke 
                                        key={k}
                                        image={url}
                                        name={e.name}
                                        typing={arrTypes}
                                        valueAttk={e.stats[0].base_stat}
                                        valueDef={e.stats[2].base_stat}
                                        onClick={()=>handlerSetPokeId(e.id)}
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