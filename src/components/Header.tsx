import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Container, ContentOptions, Elements, LeftArea, Nav, RightArea, ContentBody, BtnMenu } from "../styles/components/Header";

import Logo from "../assets/header/Logo.svg";
import iconBtn from "../assets/header/BurgenBtn.svg";

import ModalDropDown from "./ModalDropDown";

import { ModalMobileContext } from "../contexts/ModalMobile";

const Header = () => {
    const [keys, setKeys] = useState({
        home: true,
        pokedex: false,
        legen: false,
        doc: false
    });
    const { setState, state } = useContext(ModalMobileContext);

    function handlerURL() {
        setState(false);
    }
    
    function handleOpenMenuMobile(){
        setState(true);
    }

    return (
        <>
            <Container>
                <ContentBody>
                    <LeftArea>
                        <img src={Logo} alt="Logo Image" />
                    </LeftArea>
                    <RightArea>
                        <Nav>
                            <ContentOptions>
                                <Elements>
                                    <Link
                                        className={keys.home ? "active" : ""}
                                        to="/"
                                    >Home</Link>
                                </Elements>
                                <Elements >
                                    <Link
                                        className={keys.pokedex ? "active" : ""}
                                        to="/pokedex"
                                    >Pokédex</Link>
                                </Elements>
                                <Elements >
                                    <Link
                                        className={keys.legen ? "active" : ""}
                                        to="/legendaries"
                                    >Legendaries</Link>
                                </Elements>
                            </ContentOptions>
                        </Nav>
                        <BtnMenu onClick={handleOpenMenuMobile}>
                            <img src={iconBtn} alt="Icon Btn" />
                        </BtnMenu>
                    </RightArea>
                </ContentBody>
            </Container>
            <ModalDropDown 
                height={350}
                state={state}
            >
                <div className="containerLinks">
                    <img src={Logo} alt="Logo Image" />
                    <ul>
                        <Elements>
                            <Link
                                className={keys.home ? "active" : ""}
                                to="/"
                                onClick={handlerURL}
                            >Home</Link>
                        </Elements>
                        <Elements >
                            <Link
                                className={keys.pokedex ? "active" : ""}
                                to="/pokedex"
                                onClick={handlerURL}
                            >Pokédex</Link>
                        </Elements>
                        <Elements >
                            <Link
                                className={keys.legen ? "active" : ""}
                                to="/legendaries"
                                onClick={handlerURL}
                            >Legendaries</Link>
                        </Elements>
                    </ul>
                </div>
            </ModalDropDown>
        </>
    );
}

export default Header;