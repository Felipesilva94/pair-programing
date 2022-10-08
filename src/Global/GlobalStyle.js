import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --ff-one: 'Montserrat', sans-serif; 
        --ff-footer: 'Roboto', sans-serif;
    }
`;