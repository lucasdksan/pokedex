import Lottie from "react-lottie";

import { Container } from "../styles/components/Loading";

import Animation from "../assets/search/loadingAnimation.json";

import { LoadingTypes } from "../types/LoadingTypes";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const Loading = ({ h, w }:LoadingTypes)=>{
    return(
        <Container>
            <Lottie
                options={defaultOptions}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: h ? `${h}px` : "250px",
                    width: w ? `${w}px` : "250px"
                }}
            />
        </Container>
    );
}

export default Loading;