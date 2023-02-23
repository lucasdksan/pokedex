import { Container } from "../styles/components/CardPokeModal";

const CardPokeModal = ()=>{
    return(
        <Container>
            <div className="leftArea">
                <div className="areaImgs">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png" alt="Pokémon Image" />
                </div>
                <div className="areaTypes">
                    <span>Normal</span>
                    <span>Fire</span>
                </div>
            </div>
            <div className="rightArea">
                <div className="topCard">
                    <strong>Ditto</strong>
                    <span>Generation 1</span>
                    <div className="circleCode">
                        23
                    </div>
                </div>
                <div className="middleCard"></div>
                <div className="bottomCard"></div>
            </div>
        </Container>
    );
}

export default CardPokeModal;