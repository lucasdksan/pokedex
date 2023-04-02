import { useContext, useEffect, useState } from "react";

import { Container } from "../styles/pages/Search";

import CustomSelectComponent from "../components/CustomSelectComponent";
import Header from "../components/Header";
import CardSearchPoke from "../components/CardSearchPoke";
import ModalOpenCard from "../components/ModalOpenCard";
import Loading from "../components/Loading";
import UpButton from "../components/UpButton";
import ModalDropDown from "../components/ModalDropDown";

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
import { ModalMobileContext } from "../contexts/ModalMobile";

import { filterRT, filterRegion, filterType } from "../libs/filterListPokemon";
import { personalAlert } from "../libs/alertPkt";
import ModalContainerFilter from "../components/ModalContainerFilter";

const Search = () => {
    const [pokeSearch, setPokeSearch] = useState("");
    const [pokeFileterType, setPokeFileterType] = useState("");
    const [pokeFileterRegion, setPokeFileterRegion] = useState("");
    const [openFilter, setOpenFilter] = useState(false);
    const [loadingMorePoke, setLoadingMorePoke] = useState(false);
    const [len, setLen] = useState(18);
    const [searchResult, setSearchResult] = useState<pokemonTypes>();
    const [arrDataAllPokemons, setArrDataAllPokemons] = useState<pokemonEntriesTypes[]>([]);
    const [tempAllPokemon, setTempAllPokemon] = useState<pokemonAllSearch[]>([]);
    const [filtedPokemon, setFiltedPokemon] = useState<pokemonAllSearch[]>([]);
    const [arrTypePoke, setArrTypePoke] = useState<string[]>([]);
    const [arrRegionPoke, setArrRegionPoke] = useState<string[]>([]);
    const [clearType, setClearType] = useState<boolean>(false);
    const [clearRegion, setClearRegion] = useState<boolean>(false);
    const [openMoreBtn, setOpenMoreBtn] = useState(true);

    const { SetOpenModal, SetPokemon, SetOpenModalError, SetAllPokemons, allPokemon } = useContext(OpenDataModalContext);
    const { setStateOthers, stateOthers } = useContext(ModalMobileContext);

    const handleOpenModalOptions = ()=>{
        setStateOthers(true);
    }

    const handleTempAllPokemon = async () => {
        const arrAllObjsMore = [];

        if (arrDataAllPokemons.length > 0) {
            for (let i in arrDataAllPokemons) {
                let obj = await searchDataPoke(arrDataAllPokemons[i]);
                arrAllObjsMore.push(obj);
            }
        }

        setTempAllPokemon(arrAllObjsMore);
    }

    const handlePokeSearch = async () => {
        let { result, stats } = await searchPoke(pokeSearch);

        if (stats) {
            setSearchResult(result);
        } else {
            SetOpenModalError();
        }
    }

    const handleClearFilter = () => {
        const allInputsFilter = document.querySelectorAll(".containerInputs .unity input") as NodeListOf<HTMLInputElement>;

        setOpenFilter(false);
        setFiltedPokemon([]);
        setArrTypePoke([]);
        setArrRegionPoke([]);

        allInputsFilter.forEach((checkbox) => {
            if (checkbox.checked) {
                checkbox.checked = false;
            }
        });
    }

    const handlePokeFilter = () => {

        if(tempAllPokemon.length === 0 || tempAllPokemon.length < allPokemon.length) {
            personalAlert("Waiting for update of all pokemons");
        }

        if (pokeFileterRegion !== "" || pokeFileterType !== "") {
            if (pokeFileterRegion !== "" && pokeFileterType === "") {
                let arrRegion = filterRegion(pokeFileterRegion, allPokemon);

                setFiltedPokemon(arrRegion);
            }
            else if (pokeFileterRegion === "" && pokeFileterType !== "") {
                let arrType = filterType(pokeFileterType, allPokemon);

                setFiltedPokemon(arrType);
            }
            else {
                let arrRT = filterRT(pokeFileterType, pokeFileterRegion, allPokemon);

                setFiltedPokemon(arrRT);
            }

            setOpenFilter(true);
            setOpenMoreBtn(false);
        } else {
            personalAlert("Select one of the filter elements!!");
        }
    }

    const handlePokeFilterMobile = ()=>{
        if(tempAllPokemon.length === 0 || tempAllPokemon.length < allPokemon.length) {
            personalAlert("Waiting for update of all pokemons");
        }

        if(arrRegionPoke.length > 0 || arrTypePoke.length > 0){
            if (arrRegionPoke.length === 0 && arrTypePoke.length > 0) {
                let arrType:pokemonAllSearch[] = [];

                arrTypePoke.forEach((e,k)=>{
                    let temp = filterType(e, allPokemon);
                    
                    temp.forEach((Etemp, Ktemp)=>{
                        arrType.push(Etemp);
                    });
                });
                
                setFiltedPokemon(arrType);
            } else if(arrRegionPoke.length > 0 && arrTypePoke.length === 0){
                let arrRegion:pokemonAllSearch[] = [];

                arrRegionPoke.forEach((e,k)=>{
                    let temp = filterRegion(e, allPokemon);

                    temp.forEach((Etemp, Ktemp)=>{
                        arrRegion.push(Etemp);
                    });
                });

                setFiltedPokemon(arrRegion);
            } else {
                let arrRT:pokemonAllSearch[] = [];
                var temp;
                
                for(let i = 0; i < arrTypePoke.length; i++){
                    for(let j = 0; j < arrRegionPoke.length; j++){
                        temp = filterRT(arrTypePoke[i], arrRegionPoke[j], allPokemon);

                        temp.forEach((Etemp, Ktemp)=>{
                            arrRT.push(Etemp);
                        });
                    }
                }

                setFiltedPokemon(arrRT);
            }
        }

        setOpenFilter(true);
        setOpenMoreBtn(false);
    }

    const handleUpdatePokemon= ()=>{
        if(tempAllPokemon.length > 0) {
            SetAllPokemons(tempAllPokemon);
            setOpenMoreBtn(false);
        }
    }

    const handleGetAllPokemons = async () => {
        const allPokemons = await getAllPokemons();

        setArrDataAllPokemons(allPokemons.pokemon_entries);
    }

    const handlePokeFilterChangeType = (key: string) => {
        setPokeFileterType(key);
    }

    const handlePokeFilterChangeRegion = (key: string) => {
        setPokeFileterRegion(key);
    }

    const handlerSetPokeId = (key: number) => {
        const filterPokemon = allPokemon.filter((e) => {
            return e.id === key;
        });
        const openPokemon = filterPokemon[0];
        const convert = pokemonAllView.convert(openPokemon);

        SetPokemon(convert);
        SetOpenModal();
    }

    const handlerPokeAll = async () => {
        const arrAllObjs = [];

        if (arrDataAllPokemons.length > 0) {
            for (let i = 0; i < 9; i++) {
                let obj = await searchDataPoke(arrDataAllPokemons[i]);
                arrAllObjs.push(obj);
            }
        }

        SetAllPokemons(arrAllObjs);
    }

    const handlerMorePokemons = async () => {
        const arrAllObjsMore = [...allPokemon];

        let lenMore = len < arrDataAllPokemons.length ? len + 18 : arrDataAllPokemons.length;

        setLoadingMorePoke(true);

        if (arrDataAllPokemons.length > 0) {
            for (let i = len; i < lenMore; i++) {
                let obj = await searchDataPoke(arrDataAllPokemons[i]);
                arrAllObjsMore.push(obj);
            }
        }

        SetAllPokemons(arrAllObjsMore);
        setLen(lenMore);
        setLoadingMorePoke(false);
    }

    useEffect(() => {
        let convert;

        if (searchResult != undefined) {
            convert = pokeView.render(searchResult);
            SetPokemon(convert);
            SetOpenModal();
        }

    }, [searchResult])

    useEffect(() => {
        handleGetAllPokemons();
    }, []);

    useEffect(() => {
        if (allPokemon.length === 0) {
            handlerPokeAll();
        }
        handleTempAllPokemon();
    }, [arrDataAllPokemons]);

    return (
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
                                onChange={(e) => setPokeSearch(e.target.value.toLowerCase())}
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
                            {
                                (tempAllPokemon.length > 0) &&
                                (tempAllPokemon.length !== allPokemon.length) &&
                                (
                                    <button onClick={handleUpdatePokemon} className="btn-all">All Pokemon</button>
                                )
                            }
                        </div>
                        <div className="lineOptions--mobile">
                            <button onClick={handleOpenModalOptions}>Filter Options</button>
                        </div>
                    </div>
                    <div className="contentList" style={{ display: allPokemon.length > 0 ? "grid" : "flex" }}>
                        {
                            allPokemon.length == 0 &&
                            <Loading
                                h={400}
                                w={400}
                                fullHeight={false}
                            />
                        }
                        {
                            (allPokemon.length > 0 && !openFilter) &&
                            allPokemon.map((e, k) => {
                                let arrTypes: string[] = [];
                                let url = e.sprites.other.home.front_default !== null ? e.sprites.other.home.front_default as string : Object.values(e.sprites.other)[2].front_default as string;

                                e.types.forEach((es) => {
                                    arrTypes.push(es.type.name);
                                });

                                return (
                                    <CardSearchPoke
                                        key={k}
                                        image={url}
                                        name={e.name}
                                        typing={arrTypes}
                                        valueAttk={e.stats[0].base_stat}
                                        valueDef={e.stats[2].base_stat}
                                        onClick={() => handlerSetPokeId(e.id)}
                                    />
                                );
                            })
                        }
                        {
                            (filtedPokemon.length > 0 && openFilter) &&
                            filtedPokemon.map((e, k) => {
                                let arrTypes: string[] = [];
                                let url = e.sprites.other.home.front_default !== null ? e.sprites.other.home.front_default as string : Object.values(e.sprites.other)[2].front_default as string;

                                e.types.forEach((es) => {
                                    arrTypes.push(es.type.name);
                                });

                                return (
                                    <CardSearchPoke
                                        key={k}
                                        image={url}
                                        name={e.name}
                                        typing={arrTypes}
                                        valueAttk={e.stats[0].base_stat}
                                        valueDef={e.stats[2].base_stat}
                                        onClick={() => handlerSetPokeId(e.id)}
                                    />
                                );
                            })
                        }
                    </div>
                    {
                        loadingMorePoke && (
                            <span className="loading">Loading...</span>
                        )
                    }
                    {
                        (allPokemon.length > 0 && openMoreBtn) &&
                        (!loadingMorePoke)&&
                        (
                            <button
                                className="btn-more"
                                onClick={handlerMorePokemons}
                            >More</button>
                        )
                    }
                    
                </section>
            </Container>
            <ModalOpenCard />
            <UpButton />
            <ModalDropDown
                height={600}
                state={stateOthers}
            >
                <div className="content-filter">
                    <ModalContainerFilter 
                        arr={CustomSelectComponentDataType}
                        label="Type"
                        arrSelected={arrTypePoke}
                        setArrSelected={setArrTypePoke}
                        elementCheck={clearType}
                        setElementCheck={setClearType}
                    />
                    <ModalContainerFilter 
                        arr={CustomSelectComponentDataRegion}
                        label="Region"
                        arrSelected={arrRegionPoke}
                        setArrSelected={setArrRegionPoke}
                        elementCheck={clearRegion}
                        setElementCheck={setClearRegion}
                    />
                    <div className="btns">
                        <button onClick={handlePokeFilterMobile}>Filter</button>
                        <button onClick={handleClearFilter} className="btn-clear">Clear</button>
                        {
                            (tempAllPokemon.length > 0) &&
                            (tempAllPokemon.length !== allPokemon.length) &&
                            (
                                <button onClick={handleUpdatePokemon} className="btn-all">All</button>
                            )
                        }
                    </div>
                </div>
            </ModalDropDown>
        </>
    );
}

export default Search;