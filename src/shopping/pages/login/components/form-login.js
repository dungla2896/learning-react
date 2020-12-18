import React from 'react';
import { Row, Col, Form, Input, Button, Spin } from 'antd';
import * as reselect from '../reselect/login-reselect';
import { loginRequest } from '../actions/index';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 20,
  },
};

const FormLogin = () => {
  const { loading, message } = useSelector(createStructuredSelector({
    loading: reselect.loadingLoginUser,
    message: reselect.getMessageLogin
  }));
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(loginRequest(values.username, values.password));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <h1 style={{textAlign: 'center'}}>Login</h1>
          { message !== null ? (
            <p style={{color: 'red', textAlign: 'center'}}> { message } </p>
          ) : null }
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6} style={{ border: '1px solid #ccc', padding: '10px' }}>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
            { loading ? (
              <>
                <Button disabled type="primary" htmlType="submit">
                  Submit
                </Button>
                <Spin style={{ marginLeft: '12px' }} />
              </>
            ) : (
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            ) }

              

            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}
export default React.memo(FormLogin);