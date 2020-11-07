import { Button, Form, Input, Modal } from 'antd';
import React from 'react';
import { SignInEmail, SignInGoogleAccount, SignUpEmail } from '../api/firebase';
import './signInModal.sass'
import { Tooltip } from '@material-ui/core';

interface SignInModalProps {
    isOpened: boolean;
    onOk: () => void;
    onClose: () => void;
}

interface SignInModalFormValues {
    email: string;
    password: string;
    isSignIn: boolean;
}

export const SignInModal: React.FC<SignInModalProps> = (props) => {
    return <>
        <Modal
            title={'Вход'}
            visible={props.isOpened}
            onOk={props.onOk}
            onCancel={props.onClose}
            footer={<>
                <div onClick={() => {

                }}>
                </div>
            </>}>
            <Form
                className={'SignInForm'}
                name={'signIn'}
                onFinish={(values: SignInModalFormValues) => {
                    SignUpEmail(values.email, values.password).then((result) => {
                        if (result.code === 'auth/email-already-in-use') SignInEmail(values.email, values.password);
                    }).then(() => props.onOk())
                }}
                onFinishFailed={(errors) => { console.log(errors) }}>
                <Form.Item
                    name={'email'}
                    rules={[{ required: true, message: 'Поле не должно быть пустым' }, { type: 'email', message: 'Неверный формат почты' }]}>
                    <Input placeholder={'Email'} />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Поле не должно быть пустым' }, { min: 6, message: 'Пароль должен состоять минимум из 6 символов' }]}>
                    <Input.Password placeholder={'Пароль'} />
                </Form.Item>
                <div className="sign-in-buttons">
                    <Tooltip title="Войти с помощью Google">
                        <img
                            className='signInIcon'
                            src={process.env.PUBLIC_URL + '/img/autorization/google.svg.webp'}
                            alt="Войти с помощью Google"
                            onClick={() => SignInGoogleAccount().then(() => props.onOk())}
                        />
                    </Tooltip>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Войти</Button>
                    </Form.Item>
                </div>
            </Form>
        </Modal>
    </>
}