import { styled } from "styled-components"

const MainStyled = styled.div`
    min-height: 100vh;
    width: 100%;
    background-image: url('/assets/images/bg-intro-desktop.png');
    background-color: hsl(0, 100%, 74%);
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 30px;
    padding: 20px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

    .form-wrapper {
        width: 40%;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        row-gap: 30px;

        @media screen and (max-width: 768px) {
            width: 60%;
        }

        @media screen and (max-width: 425px) {
            width: 100%;
        }
    }
`

export default MainStyled