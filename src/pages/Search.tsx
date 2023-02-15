import Header from "../components/Header";
import { Container } from "../styles/pages/Search";

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
                            <select name="type" id="typeInput">
                                <option>TYPE</option>
                                <option value="fire">Fire</option>
                                <option value="water">Water</option>
                                <option value="rock">Rock</option>
                                <option value="ground">Ground</option>
                                <option value="grass">Grass</option>
                            </select>
                            <select name="attack" id="typeAttack">
                                <option>Attack</option>
                            </select>
                            <select name="exp" id="typeExp">
                                <option>Exp</option>
                            </select>
                        </div>
                    </div>
                    <div className="contentList">

                    </div>
                </section>
            </Container>    
        </>
    );
}

export default Search;