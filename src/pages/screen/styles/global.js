import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        font-size: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Sora", sans-serif;
    }

    a {
        text-decoration: none;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    li {
        list-style: none;
    }

    .active {
        color: #0149FD !important;
    }
`;
