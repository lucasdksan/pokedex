import Lottie from "react-lottie";

import { Container } from "../styles/components/Loading";

import Animation from "../assets/search/loadingAnimation.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const Loading = ()=>{
    return(
        <Container>
            <Lottie
                options={defaultOptions}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0px 0px 10px 10px',
                }}
            />
        </Container>
    );
}

export default Loading;