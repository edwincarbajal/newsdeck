import React, { useState } from 'react'
import { Button, Form, Container, Header, FormField, Label } from 'semantic-ui-react'
import validator from 'validator';

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleChangeEmail = e => {
        setEmail(e.target.value)
    }

    const handleChangePassword = e => {
        setPassword(e.target.value)
    }

    const validate = (email, password) => {
        if (!validator.isEmail(email)) {
            setError({
                email: 'Email is not valid'
            });
        }

        if (!error) {
            //TODO: CALL API FOR LOGIN
            props.handleLogin(email, password)
        }
    }

    return (
        <Container style={{
            marginTop: '20px',
        }}>
            <Header as="h1" textAlign="center">Login</Header>
            <Form size='large'>
                <FormField>
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
                </FormField>

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
                <Button onClick={() => validate(email, password)} color='teal' fluid size='large'>
                    Login
            </Button>
            </Form>
        </Container>

    )
}

export default Login 