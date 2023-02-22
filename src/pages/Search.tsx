import CustomSelectComponent from "../components/CustomSelectComponent";
import Header from "../components/Header";
import { Container } from "../styles/pages/Search";
import { 
        CustomSelectComponentDataRarity, 
        CustomSelectComponentDataRegion, 
        CustomSelectComponentDataType 
    } from "../data/CustomSelectComponentData";
import CardSearchPoke from "../components/CardSearchPoke";

const Search = ()=>{
    return(
        <>
            <Header />
            <Container>
                <section>
                    <h1>800 <strong>Pokemons</strong> for you to choose your favorite</h1>
                    <div className="containerSearch">
                        <input 
                            type="text" 
                            placeholder="Search Pokémon..."
                        />
                        <div className="lineOptions">
                            <CustomSelectComponent 
                                arrOptions={CustomSelectComponentDataType}
                                firstElement="Type"
                            />
                            {/* <CustomSelectComponent 
                                arrOptions={CustomSelectComponentDataRarity}
                                firstElement="Rarity"
                            /> */}
                            <CustomSelectComponent 
                                arrOptions={CustomSelectComponentDataRegion}
                                firstElement="Region"
                            />
                        </div>
                    </div>
                    <div className="contentList">
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
                            typing={["Normal", "Grass"]}
                            valueAttk={150}
                            valueDef={48}
                        />
                    </div>
                </section>
            </Container>    
        </>
    );
}

export default Search;