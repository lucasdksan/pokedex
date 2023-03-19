import { useEffect, useState } from "react";

import Header from "../components/Header";
import LegendaryDescription from "../components/LegendaryDescription";
import Loading from "../components/Loading";

import { getAllPokemons } from "../services/get/allPokemons";
import { searchDataPoke } from "../services/get/searchDataPoke";

import { Container } from "../styles/pages/Legendaries";

import { pokemonEntriesTypes } from "../types/pokemonEntriesTypes";
import { pokemonAllSearch } from "../types/pokemonAllSearch";

import { defaultPokes } from "../data/defaultPokemon";
import UpButton from "../components/UpButton";

const Legendaries = () => {
    const [allPokes, setAllPokes] = useState<pokemonEntriesTypes[]>([]);
    const [allLegendary, setAllLegendary] = useState<pokemonAllSearch[]>([]);
    const [allLegendaryStrong, setAllLegendaryStrong] = useState<pokemonAllSearch[]>([]);
    const [allLegendaryWeaker, setAllLegendaryWeaker] = useState<pokemonAllSearch[]>([]);

    async function handleGetAllPokemons() {
        const allPokemons = await getAllPokemons();

        setAllPokes(allPokemons.pokemon_entries);
    }

    async function handlerSearchDataPokemon() {
        const legendary = [];
        const legendaryStrong = [];
        const legendaryWeaker = [];

        if (allPokes.length > 0) {
            for (let i in allPokes) {
                let obj = await searchDataPoke(allPokes[i]);

                if (obj.legendary) {
                    legendary.push(obj);

                    if (obj.stats[1].base_stat > 110) {
                        legendaryStrong.push(obj);
                    } else {
                        legendaryWeaker.push(obj);
                    }
                }
            }
        }

        setAllLegendary(legendary);
        setAllLegendaryStrong(legendaryStrong);
        setAllLegendaryWeaker(legendaryWeaker);
    }

    useEffect(() => {
        if (allPokes.length === 0) {
            handleGetAllPokemons();
        } else {
            handlerSearchDataPokemon();
        }
    }, [allPokes]);

    return (
        <>
            <Header />
            <Container>
                {
                    (allLegendary.length > 0 && allLegendaryStrong.length > 0 && allLegendaryWeaker.length > 0)? (<>
                        <section className="allLegendaries">
                            <div className="containerTitle">
                                <h2 className="title">Legendaries</h2>
                            </div>
                            <LegendaryDescription
                                legendaryPokes={allLegendary}
                                defaultPk={defaultPokes[0]}
                            />
                        </section>
                        <section className="strongerLegendaries">
                            <div className="containerTitle">
                                <h2 className="title">Stronger</h2>
                            </div>
                            <LegendaryDescription
                                legendaryPokes={allLegendaryStrong}
                                defaultPk={defaultPokes[1]}
                            />
                        </section>
                        <section className="weakerLegendaries">
                            <div className="containerTitle">
                                <h2 className="title">Weaker</h2>
                            </div>
                            <LegendaryDescription
                                legendaryPokes={allLegendaryWeaker}
                                defaultPk={defaultPokes[2]}
                            />
                        </section>
                    </>) : (
                        <Loading
                            h={500}
                            w={500}
                            fullHeight={true}
                        />
                    )
                }
            </Container>
            <UpButton />
        </>
    );
}

export default Legendaries;