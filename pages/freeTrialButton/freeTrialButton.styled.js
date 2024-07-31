import { styled } from "styled-components"

const FreeTrialButtonStyled = styled.div`
    min-height: 50px;
    border-radius: 10px;
    background-color: hsl(248, 32%, 49%);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 10px 0px hsl(249, 10%, 26%);

    .free-trial-text {
        color: white;
        margin-right: 5px;
    }

    .free-trial-desc {
        color: hsl(246, 25%, 77%);
        margin: 0;
        text-align: center;
    }
`

export default FreeTrialButtonStyled