import { Container } from "../styles/components/LegendaryDescription";
import LineStatus from "./LineStatus";

const LegendaryDescription = () => {
    return (
        <Container>
            <div className="topContent">
                <div className="leftArea">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png" alt="Image pokemon" />
                </div>
                <div className="rightArea">
                    <span className="title">MewTwo</span>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
                    <div className="contentStatus">
                        <div className="contentStatusElement">
                            <span>Exemplo</span>
                            <strong>48</strong>
                            <LineStatus value={48}/>
                        </div>
                        <div className="contentStatusElement">
                            <span>Exemplo</span>
                            <strong>48</strong>
                            <LineStatus value={48}/>
                        </div>
                        <div className="contentStatusElement">
                            <span>Exemplo</span>
                            <strong>48</strong>
                            <LineStatus value={48}/>
                        </div>
                        <div className="contentStatusElement">
                            <span>Exemplo</span>
                            <strong>48</strong>
                            <LineStatus value={48}/>
                        </div>
                        <div className="contentStatusElement">
                            <span>Exemplo</span>
                            <strong>48</strong>
                            <LineStatus value={48}/>
                        </div>
                        <div className="contentStatusElement">
                            <span>Exemplo</span>
                            <strong>48</strong>
                            <LineStatus value={48}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomContent">

            </div>
        </Container>
    );
}

export default LegendaryDescription;