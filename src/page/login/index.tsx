import * as React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './index.css';

interface ILoginParam {
    username: string;
    password: string;
    remember: boolean;
}

interface ILoginFormProps {
    history: any
}

function logining (el:any) {
    localStorage.setItem('isLogin', JSON.stringify(true))
    el.props.history.push({ pathname:'home' })
}

function onFinish (values:string,el:any):void {
  console.log('Success:', values);
  logining(el)
};

function onFinishFailed (errorInfo:any):void {
  console.log('Failed:', errorInfo);
}

class LoginPage extends React.Component<ILoginFormProps, ILoginParam> {
    constructor(props: ILoginFormProps) {
        super(props);
        this.state={
            username: '',
            password: '',
            remember: true,
        }
    }

    render() {
        return (
            <div className='login-body'>
               <div className="login-box"> 
                <h1>Hello World!</h1>
                <Form
                    name="basic"
                    requiredMark={false}
                    initialValues={{ remember: true }}
                    onFinish={(values)=> onFinish(values,this)}
                    onFinishFailed={(errorInfo)=>onFinishFailed(errorInfo)}
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                         登录
                        </Button>
                    </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default LoginPage;