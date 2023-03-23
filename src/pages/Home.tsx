import { Link } from "react-router-dom";

import Header from "../components/Header";

import Banner from "../assets/home/BannerComplete.svg";

import { Container } from "../styles/pages/Home";

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <section>
                    <aside>
                        <div className="topContent">
                            <h1><strong>Find</strong> all your favorite <strong>Pokemon</strong></h1>
                        </div>
                        <div className="middleContent">
                            <p>You can know the type of Pokémon, their strengths and abilities</p>
                        </div>
                        <div className="bottomContent">
                            <Link to="/pokedex">
                                <span>See pokemons</span>
                            </Link>
                        </div>
                    </aside>
                    <img src={Banner} alt="Banner home image" />
                </section>
            </Container>
        </>
    );
}

export default Home;