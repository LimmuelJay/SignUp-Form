import FreeTrialButtonStyled from "@/pages/freeTrialButton/freeTrialButton.styled";
import { Typography } from "antd";

const FreeTrialButton = () => {

    const { Text } = Typography

    return (
        <FreeTrialButtonStyled>
            <div className="text-wrapper">!                <Text className="free-trial-text" strong>
                    Try it free 7 days
                </Text>
                <Text className="free-trial-desc">
                    then $20/mo. thereafter
                </Text>
            </div>
        </FreeTrialButtonStyled>
    )
}

export default FreeTrialButton