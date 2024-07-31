import { styled } from "styled-components"

const FormDescriptionStyled = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 70%;
        align-items: center;
    }

    @media screen and (max-width: 425px) {
        width: 90%;
        align-items: center;
    }
    
    @media screen and (max-width: 375px) {
        width: 100%;
        align-items: center;
    }

    .form-title {
        width: 80%;
        color: white;
        font-weight: 700;
        font-size: 3rem;
        line-height: 1;

        @media screen and (max-width: 768px) {
            width: 100%;
            text-align: center;
        }
    }
    
    .form-description {
        width: 90%;
        color: white;
        font-size: 1rem;

        @media screen and (max-width: 768px) {
            width: 100%;
            text-align: center;
        }
    }
`

export default FormDescriptionStyled