import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from 'react-router-dom'

const Error403: React.FC = () => {
    const navigate = useNavigate();
    const toHomeClick = () => {
        navigate("/")
    }
    return (
        <Result
            status='403'
            title='403'
            subTitle='抱歉，您无权访问这个页面。'
            extra={
                <Button type='primary' onClick={toHomeClick}>
                    回到首页
                </Button>
            }
        />
    );
};

export default Error403;