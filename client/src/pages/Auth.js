import React from 'react';
import { Button, Card, Col, Container, Form } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation();

    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className='d-flex flex-column '>
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter your email...'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter your password...'
                    />
                    <Col className='d-flex justify-content-between mt-3 pl-3 pr-3'>

                        {isLogin ? <div>
                            Don't have an account? <NavLink to={REGISTRATION_ROUTE} style={{ textDecoration: "underline" }}>Sign Up</NavLink>
                        </div> : <div>
                            Have an account? <NavLink to={LOGIN_ROUTE} style={{ textDecoration: "underline" }}>Log In</NavLink>
                        </div>}
                        <Button
                            variant={"outline-primary"}
                        >
                            {isLogin ? "Log In" : "Sign Up"}
                        </Button>
                    </Col>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
