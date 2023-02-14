import { Container, ContentOptions, Elements, LeftArea, Nav, RightArea, ContentBody } from "../styles/components/Header";

import Logo from "../assets/header/Logo.svg";

const Header = () => {
    return (
        <Container>
            <ContentBody>
                <LeftArea>
                    <img src={Logo} alt="Logo Image" />
                </LeftArea>
                <RightArea>
                    <Nav>
                        <ContentOptions>
                            <Elements>
                                <a href="">Home</a>
                            </Elements>
                            <Elements>
                                <a href="">Pokédex</a>
                            </Elements>
                            <Elements>
                                <a href="">Legendaries</a>
                            </Elements>
                            <Elements>
                                <a href="">Documentation</a>
                            </Elements>
                        </ContentOptions>
                    </Nav>
                </RightArea>
            </ContentBody>
        </Container>
    );
}

export default Header;