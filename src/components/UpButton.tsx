import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

import { Container, ArrowIcon } from "../styles/components/UpButton";

const UpButton = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (pageYOffset > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!visible) {
        return (
            <div />
        );
    }
    return (
        <Container>
            <button onClick={scrollToTop}>
                <ArrowIcon />
            </button>
        </Container>
    );
}

export default UpButton;