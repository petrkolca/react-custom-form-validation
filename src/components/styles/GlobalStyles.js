import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    form{
        background-color: white;
        padding: 30px 60px;
        border-radius: 10px;
    }
    
    h1{
        color: rgb(77, 1, 77);
        text-align: center;
    }
    
    button{
        width: 100%;
        height: 50px;
        padding: 10px;
        border: none;
        background-color: rebeccapurple;
        color: white;
        border-radius: 5px;
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
        margin-top: 15px;
        // margin-bottom: 30px;
    }
`

export default GlobalStyles;