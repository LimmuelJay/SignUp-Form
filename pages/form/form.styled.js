import { styled } from "styled-components"

const FormStyled = styled.div`
    min-height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 25px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 1px 5px 10px 5px grey;

    .ant-form {
        margin-top: 20px;
        width: 100%;

        .ant-form-item {
            input {
                height: 40px;
            }
        }

        .button-form {
            margin-bottom: 10px;

            button {
                background-color: hsl(154, 59%, 51%);
                height: 40px;
            }
        }
    }

    .form-footer {
        margin: 0;
        text-align: center;
        column-gap: 10px;

        .form-footer-description {
            color: hsl(246, 25%, 77%);
            font-size: 0.7rem;
            margin-right: 5px;
        }

        .form-footer-tnc {
            color: hsl(0, 100%, 74%);
        }
    }
`

export default FormStyled