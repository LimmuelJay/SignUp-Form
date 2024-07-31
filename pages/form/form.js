import FormStyled from "@/pages/form/form.styled"
import { Button, Form, Input, Typography, message } from 'antd';
import { useEffect, useState } from "react";

const FormInput = () => {

    const { Text, Link  } = Typography;
    const [messageApi, contextHolder] = message.useMessage();

    const [isSuccess, setIsSuccess] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const onFinish = (values) => {
        console.log('CHECK_success', values);
        setFormSubmitted(true)
        setIsSuccess(true)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('CHECK_error', errorInfo);
        setFormSubmitted(true)
        setIsSuccess(false)
    };

    useEffect(() => {
        if (formSubmitted) {
            if (isSuccess) {
                messageApi.success({content: 'form has submitted', duration: 2})
            } else {
                messageApi.error({content: 'form has error', duration: 2})
            }
            setFormSubmitted(false)
        }
        
    }, [formSubmitted, isSuccess])

    return (
        <FormStyled>
            {contextHolder}
            <Form
            name="form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
                <Form.Item
                name="firstName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your first name!',
                    },
                    {
                        pattern: new RegExp(/^[a-z A-Z]/i),
                        message: 'Invalid first name. Only letters allowed.'
                    },
                    {
                        min: 3,
                        message: 'Must be minimum 3 letters.'
                    }
                ]}
                >
                    <Input maxLength={35} placeholder="First Name"/>
                </Form.Item>

                <Form.Item
                name="lastName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your last name!',
                    },
                    {
                        pattern: new RegExp(/^[a-z A-Z`]/i),
                        message: 'Invalid last name. Only letters allowed.'
                    },
                    {
                        min: 3,
                        message: 'Must be minimum 3 letters.'
                    }
                ]}
                >
                    <Input maxLength={35} placeholder="Last Name"/>
                </Form.Item>

                <Form.Item
                name="emailAddress" 
                rules={[
                    {
                        required: true,
                        message: 'Please input your email address!',
                    },
                    {
                        type: "email",
                        message: 'Invalid email!',
                    },
                ]}
                >
                    <Input placeholder="Email Address"/>
                </Form.Item>

                <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    {
                        pattern: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,99}$/),
                        message: 'Password must be minimum eight, at least one uppercase letter, one lowercase letter, one number and one special character',
                    },
                    
                ]}
                >
                    <Input.Password maxLength={99} placeholder="Password"/>
                </Form.Item>
                    
                <Form.Item className="button-form" >
                    <Button type="primary" htmlType="submit" block >
                        CLAIM YOUR FREE TRIAL
                    </Button>
                </Form.Item>
            </Form>

            <div className="form-footer">
                <Text className="form-footer-description">
                    By clicking the button you are agreeing to our
                </Text>
                <Link className="form-footer-tnc" strong>
                    Terms and Services
                </Link>
            </div>
        </FormStyled>
    )
}

export default FormInput;