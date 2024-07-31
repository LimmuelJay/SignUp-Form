import FormDescriptionStyled from "./formDescription.styled";
import { Typography } from "antd";

const FormDesription = () => {

    const { Title, Paragraph, Text  } = Typography;

    return (
        <FormDescriptionStyled>
            <Title level={2} className="form-title">Learn to code by watching others</Title>
            <Paragraph className="form-description">
                See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
            </Paragraph>
        </FormDescriptionStyled>
    )
}

export default FormDesription