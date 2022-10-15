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
        //
        --fw-600: 600;
        --fw-400: 400;
        //
        --bg-one: #FFFFFF;
        --bg-two: #F2F4F1;
    }
`;