import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Container, ContentOptions, Elements, LeftArea, Nav, RightArea, ContentBody, BtnMenu } from "../styles/components/Header";

import Logo from "../assets/header/Logo.svg";
import iconBtn from "../assets/header/BurgenBtn.svg"

const Header = () => {
    const [ keys, setKeys ] = useState({
        home: true,
        pokedex: false,
        legen: false,
        doc: false
    });

    function handlerURL(){
        const url = window.location.pathname;

        if(url === "/"){
            setKeys({
                home: true,
                pokedex: false,
                legen: false,
                doc: false
            });
        } else if(url === "pokedex"){
            setKeys({
                home: false,
                pokedex: true,
                legen: false,
                doc: false
            });
        } else if(url === "legendaries"){
            setKeys({
                home: false,
                pokedex: false,
                legen: true,
                doc: false
            });
        } else {
            setKeys({
                home: false,
                pokedex: false,
                legen: false,
                doc: true
            });
        }
    }

    useEffect(()=>{
        handlerURL();
    },[]);

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
                                >Pokédex</Link>
                            </Elements>
                            <Elements >
                                <Link 
                                    className={keys.legen ? "active" : ""} 
                                    to="/legendaries"
                                    onClick={handlerURL}
                                >Legendaries</Link>
                            </Elements>
                        </ContentOptions>
                    </Nav>
                    <BtnMenu>
                        <img src={iconBtn} alt="Icon Btn" />
                    </BtnMenu>
                </RightArea>
            </ContentBody>
        </Container>
    );
}

export default Header;