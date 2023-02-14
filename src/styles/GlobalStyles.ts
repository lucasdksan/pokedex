import { createGlobalStyle } from "styled-components";
import { colors } from "./themes";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        background: ${colors.WhiteColor};
        padding: 0px;
        width: auto;
    }

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button,
    input {
        border: 0px;
        outline: 0px;
    }

    ul,
    li,
    ol {
        list-style: none;
    }

    p,
    span,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0px;
    }

    fieldset {
        border: 0px;
        padding: 0px;
        margin: 0px;
    }

    #root{
        width: 100%;
        height: 100%;
    }
`;