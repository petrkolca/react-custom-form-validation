import styled from "styled-components";

export const StyledFormInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;

    input{
        padding: 15px;
        margin: 10px 0px;
        border-radius: 5px;
        border: 1px solid gray;

        &:invalid[focused="true"]{
            border: 1px solid red;
        }

        &:invalid[focused="true"] ~ span{
            display: block;
        }
    }


    label{
        font-size: 12px;
        color: gray;
    }

    span{
        font-size: 12px;
        padding: 3px;
        color: red;
        display: none;
    }
`