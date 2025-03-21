import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["blue-400"]};
    }

    body{
        background-color: ${(props) => props.theme["blue-900"]};
        color: ${(props) => props.theme["gray-300"]};
    }

    body, input, textarea, button{
        font-family: "Nunito", sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }
`;
