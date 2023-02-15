import { Container } from "../styles/pages/Error";

import error from "../assets/error/teamRocket.svg";

const Error = ()=>{
    return(
        <Container>
            <section>
                <div className="containerTitle">
                    <h1>404</h1>
                    <img src={error} alt="TeamRocket" />
                </div>
                <div className="bottomContainer">
                    <p>The rocket team <span>has won this time.</span></p>
                    <a href="">
                        Return
                    </a>
                </div>
            </section>
        </Container>
    );
}

export default Error;