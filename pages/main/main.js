import MainStyled from "@/pages/main/main.styled"
import FormInput from "@/pages/form/form"
import FormDesription from "@/pages/formDescription/formDescription"
import FreeTrialButton from "@/pages/freeTrialButton/freeTrialButton"

const Main = () => {
    return (
        <MainStyled>
            <FormDesription />

            <div className="form-wrapper">
                <FreeTrialButton />
                <FormInput />
            </div>
        </MainStyled>
    )
}

export default Main