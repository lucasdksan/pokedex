import Header from "../components/Header";
import LegendaryDescription from "../components/LegendaryDescription";

import { Container } from "../styles/pages/Legendaries";

const Legendaries = () => {
    return (
        <>
            <Header />
            <Container>
                <section className="allLegendaries">
                    <div className="containerTitle">
                        <h2 className="title">Legendaries</h2>
                    </div>
                    <LegendaryDescription />
                </section>
                <section className="strongerLegendaries">
                    <div className="containerTitle">
                        <h2 className="title">Stronger</h2>
                    </div>
                    <LegendaryDescription />
                </section>
                <section className="weakerLegendaries">
                    <div className="containerTitle">
                        <h2 className="title">Weaker</h2>
                    </div>
                    <LegendaryDescription />
                </section>
            </Container>
        </>
    );
}

export default Legendaries;