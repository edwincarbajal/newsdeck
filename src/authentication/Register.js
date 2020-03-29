import React, { Component, useState } from 'react'
import { Button, Form, Container, Header, Label } from 'semantic-ui-react'
import validator from 'validator';

const Register = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null)

    const handleChangeEmail = e => {
        setEmail(e.target.value)
    }

    const handleChangePassword = e => {
        setPassword(e.target.value)
    }

    const handleChangeConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    }

    const handleChangeFirstName = e => {
        setFirstName(e.target.value)
    }

    const handleChangeLastName = e => {
        setLastName(e.target.value)
    }

    const validate = (firstName, lastName, email, password, confirmPassword) => {
        if (!validator.isEmail(email)) {
            setError({
                email: 'Email is not valid'
            });
        }
        if (password !== confirmPassword) {
            setError({
                password: 'Confirm password not match'
            });
        }

        if (!error) {
            //TODO: CALL API FOR LOGIN
            props.handleRegister(firstName, lastName, email, password, confirmPassword)
        }
    }

    return (
        <Container style={{
            marginTop: '20px',
        }}>
            <Header as="h1" textAlign="center">Register</Header>
            <Form size='large'>
                <Form.Input
                    id="firstName"
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='First Name'
                    type="text"
                    value={firstName}
                    onChange={handleChangeFirstName}
                />
                <Form.Input
                    id="lastName"
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='Last Name'
                    type="text"
                    value={lastName}
                    onChange={handleChangeLastName}
                />
                <Form.Field>

                    <Form.Input
                        id="email"
                        fluid
                        icon='user'
                        iconPosition='left'
                        placeholder='Email'
                        type="text"
                        value={email}
                        onChange={handleChangeEmail}
                    />
                    {error && error.email ? (
                        <Label basic color='red' pointing>
                            {error.email}
                        </Label>
                    ) : null}
                    <Form.Input
                        fluid
                        id="password"
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        value={password}
                        onChange={handleChangePassword}
                    />
                </Form.Field>


                <Form.Field>
                    <Form.Input
                        fluid
                        id="password"
                        icon='lock'
                        iconPosition='left'
                        placeholder='Confirm Password'
                        type='password'
                        value={confirmPassword}
                        onChange={handleChangeConfirmPassword}
                    />
                    {error && error.password ? (
                        <Label basic color='red' pointing>
                            {error.password}
                        </Label>) : null}
                </Form.Field>
                <Button onClick={() => validate(firstName, lastName, email, password, confirmPassword)} color='teal' fluid size='large'>
                    Register
                </Button>
            </Form>

        </Container>
    );
}

export default Register