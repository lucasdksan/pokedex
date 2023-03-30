import { ContentStatusElementTypes } from "../types/ContentStatusElementTypes";

import LineStatus from "./LineStatus";

import { Container } from "../styles/components/ContentStatusElement";

const ContentStatusElement = ({ name, value }:ContentStatusElementTypes) => {
    return (
        <Container>
            <span>{name}</span>
            <strong>{value}</strong>
            <LineStatus value={value} resp />
        </Container>
    );
}

export default ContentStatusElement;