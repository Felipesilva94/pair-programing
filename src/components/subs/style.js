import styled from "styled-components";

export const Container = styled.section`
    background: #DFE4DE;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0.5rem;

    

    h2{
        font-family: var(--ff-one);
    } 

    p{
        font-family: var(--ff-one);

        padding: 0.5rem ;

    }
`;

export const Form = styled.form`
    background: bisque;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    input{
        padding: 1rem 5rem;
        
    }
   
    button{
        background-color:#DFE4DE ;
        font-weight: bolder;
        border: 4.4px solid black;
        padding: 0.5rem 2rem;
        cursor:pointer;
    }
   
    
`;




